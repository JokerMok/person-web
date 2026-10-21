#!/usr/bin/env bash
set -euo pipefail
app=/srv/apps/person-web
exec 9>"$app/.release.lock"
flock -x 9
command=${1:-status}

activate() {
    local release=$1 old="" target
    [[ "$release" =~ ^[0-9]{8}T[0-9]{6}Z-[a-f0-9]{12}$ ]] || { echo 'Invalid release ID' >&2; exit 2; }
    target="$app/releases/$release/public"
    [[ -f "$target/index.html" && -f "$target/project.html" && -f "$target/deployment.json" ]]
    (cd "$target" && sha256sum --quiet -c ../SHA256SUMS)
    if [[ -L "$app/current" ]]; then old=$(readlink "$app/current"); fi
    ln -s "$target" "$app/.current-$$"
    mv -Tf "$app/.current-$$" "$app/current"
    if ! curl --noproxy '*' -fsS --max-time 10 http://127.0.0.1:18082/deployment.json >/dev/null; then
        if [[ -n "$old" ]]; then
            ln -s "$old" "$app/.restore-$$"
            mv -Tf "$app/.restore-$$" "$app/current"
        else
            python3 -c 'import os; os.unlink("/srv/apps/person-web/current")'
        fi
        echo 'Activation probe failed; inspect current before changing DNS' >&2
        exit 1
    fi
    if [[ -n "$old" && "$old" != "$target" ]]; then
        ln -s "$old" "$app/.previous-$$"
        mv -Tf "$app/.previous-$$" "$app/previous"
    fi
    printf 'ACTIVE_RELEASE=%s\n' "$release"
    cat "$target/deployment.json"
}

case "$command" in
    activate) activate "${2:?release ID required}" ;;
    rollback)
        [[ -L "$app/previous" ]] || { echo 'No previous server release; use saved EdgeOne DNS for initial rollback' >&2; exit 1; }
        target=$(readlink -f "$app/previous")
        [[ "$target" == "$app/releases/"*/public ]] || exit 2
        activate "$(basename "$(dirname "$target")")"
        ;;
    status)
        readlink -f "$app/current"
        cat "$app/current/deployment.json"
        if [[ -L "$app/previous" ]]; then readlink -f "$app/previous"; fi
        ;;
    *) echo 'Usage: manage.sh status | activate RELEASE | rollback' >&2; exit 2 ;;
esac
