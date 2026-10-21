#!/usr/bin/env python3
"""从远端 main 的已提交版本打包根目录静态资源，经 SSH 发布，无构建。"""
import argparse
import datetime
import hashlib
import io
import json
import shlex
import subprocess
import tarfile
import tempfile
from pathlib import Path, PurePosixPath

REPO = Path(__file__).resolve().parents[2]
APP = "/srv/apps/person-web"


def run(*args, **kwargs):
    return subprocess.run(args, check=True, **kwargs)


def git(*args):
    return subprocess.check_output(["git", "-C", str(REPO), *args]).decode().strip()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("revision", nargs="?", default="origin/main")
    parser.add_argument("--host", default="tencent-main")
    parser.add_argument("--stage-only", action="store_true")
    args = parser.parse_args()
    run("git", "-C", str(REPO), "fetch", "origin", "main")
    commit = git("rev-parse", "--verify", args.revision + "^{commit}")
    run("git", "-C", str(REPO), "merge-base", "--is-ancestor", commit, "origin/main")
    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    release = f"{stamp}-{commit[:12]}"
    extensions = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".ico", ".avif", ".woff", ".woff2", ".ttf", ".mp3", ".mp4", ".webm", ".ogg", ".wav", ".pdf"}
    public = []
    for item in git("ls-tree", "-r", commit).splitlines():
        meta, name = item.split("\t", 1)
        p = PurePosixPath(name)
        root_file = len(p.parts) == 1 and (p.suffix.lower() in {".html", ".css", ".js", ".ico", ".webmanifest"} or name in {"robots.txt", "sitemap.xml"})
        asset = p.parts[0] in {"images", "fonts", "assets"} and p.suffix.lower() in extensions and not any(part.startswith(".") for part in p.parts)
        if root_file or asset:
            if not meta.startswith("100644 ") and not meta.startswith("100755 "):
                raise RuntimeError(f"Refusing non-regular public asset: {name}")
            public.append(name)
    required = {"index.html", "project.html", "site.css", "site.js", "project.js", "projects-data.js"}
    if not required.issubset(public):
        raise RuntimeError("Release is missing required root site files")
    archive = subprocess.check_output(["git", "-C", str(REPO), "archive", commit, "--", *public])
    with tempfile.TemporaryDirectory(prefix="person-web-release-") as temp:
        root = Path(temp)
        output = root / "public"
        output.mkdir()
        with tarfile.open(fileobj=io.BytesIO(archive)) as source:
            source.extractall(output, filter="data")
        info = {"project": "person-web", "commit": commit, "release": release, "published_at": stamp, "origin": "tencent-main"}
        (output / "deployment.json").write_text(json.dumps(info, indent=2) + "\n")
        files = sorted(p for p in output.rglob("*") if p.is_file())
        (root / "SHA256SUMS").write_text("".join(f"{hashlib.sha256(p.read_bytes()).hexdigest()}  {p.relative_to(output)}\n" for p in files))
        (root / "RELEASE.json").write_text(json.dumps({**info, "public_file_count": len(files)}, indent=2) + "\n")
        package = root / "release.tar.gz"
        with tarfile.open(package, "w:gz") as dest:
            dest.add(output, arcname="public")
            dest.add(root / "SHA256SUMS", arcname="SHA256SUMS")
            dest.add(root / "RELEASE.json", arcname="RELEASE.json")
        remote = APP + "/releases/" + release
        run("ssh", "-o", "BatchMode=yes", args.host, "mkdir -p " + shlex.quote(APP + "/releases") + " && mkdir " + shlex.quote(remote))
        run("scp", str(package), args.host + ":" + remote + "/release.tar.gz")
        run("ssh", "-o", "BatchMode=yes", args.host, "tar -xzf " + shlex.quote(remote + "/release.tar.gz") + " -C " + shlex.quote(remote) + " && chmod -R a+rX " + shlex.quote(remote + "/public") + " && cd " + shlex.quote(remote + "/public") + " && sha256sum --quiet -c ../SHA256SUMS")
    print(f"STAGED_RELEASE={release}", flush=True)
    print(f"SOURCE_COMMIT={commit}", flush=True)
    if not args.stage_only:
        run("ssh", "-o", "BatchMode=yes", args.host, "bash " + APP + "/deploy/manage.sh activate " + shlex.quote(release))


if __name__ == "__main__":
    main()
