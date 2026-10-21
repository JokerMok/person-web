# 腾讯云静态部署

## 当前发布

- 正式网址：`https://zhenyi.shizibandu.icu/`。
- 服务器：`ssh tencent-main`，`ubuntu@175.178.236.56`，沿用本机 SSH 配置。
- 网站源码 commit：`de8e16619a6f0c5e418178c131195077e3209cb6`。
- release：`20261021T100204Z-de8e16619a6f`，2026-10-21 从 EdgeOne 迁移。
- Caddy：`/etc/caddy/sites-enabled/person-web.caddy`，共用宿主机 Caddy，独立访问日志 `/var/log/caddy/person-web-access.log`。
- DNSPod：`zhenyi A 175.178.236.56`，默认线路，TTL 600；无同名 AAAA。其他记录未改。

```text
/srv/apps/person-web/
  PROJECT.md
  deploy/                         维护脚本和 Caddy 候选配置，不公开
  shared/config/                  DNS 原值等维护记录，不公开
  releases/<时间戳>-<commit>/
    RELEASE.json                  发布信息，不在站点根目录
    SHA256SUMS                    文件校验清单
    release.tar.gz                该次发布包
    public/                       筛选出的公开静态文件
  current -> releases/<版本>/public
  previous -> releases/<上个版本>/public
```

首次迁移暂无服务器旧版 `previous`，可使用保留的 EdgeOne 部署回退。后续更新自动保留前一版。Caddy 只读取 `current`，不暴露仓库、配置或运维目录。

## 发布范围与缓存

发布脚本从指定 Git commit 打包，保留根目录 HTML、CSS、JS 和图片、字体等公开文件。排除 `dist/`、`.git/`、说明文档、部署脚本、`edgeone.json` 和 EdgeOne 验证文件；没有复制整个工作目录。

使用 `file_server` 原生多页面路径，不配置首页兜底。`project.html?id=parentvoice` 等查询参数原样保留；未知路径返回 404。

固定名称资源统一返回 `Cache-Control: public, max-age=0, must-revalidate`，并保留 ETag、Last-Modified 和 304 条件请求。浏览器正常刷新会重新验证，无需 `?v=`。公开 `/deployment.json` 仅记录 commit、release 和发布时间；响应头 `X-Site-Origin: tencent-main/person-web` 用于核对来源。

## 日常更新

在本机完成修改、提交并推送 GitHub `main` 后执行：

```sh
python3 deploy/tencent/deploy.py
```

也可明确指定一个已在远端 `main` 历史中的 commit：

```sh
python3 deploy/tencent/deploy.py de8e166
```

要求本机 Python 3.12+、Git、SSH 和 SCP。脚本先 fetch，使用 `git archive` 打包，保留工作树中的未提交内容；上传后按 SHA256 校验，原子切换软链接并探测 loopback Caddy。新版本探测失败时恢复原链接。日常静态更新不重启 Caddy，不变更 DNS。

检查当前版本和公网：

```sh
ssh tencent-main 'bash /srv/apps/person-web/deploy/manage.sh status'
curl -fsS https://zhenyi.shizibandu.icu/deployment.json
```

如需只暂存、不切换：

```sh
python3 deploy/tencent/deploy.py --stage-only
ssh tencent-main 'bash /srv/apps/person-web/deploy/manage.sh activate <输出的release>'
```

## 首次 Caddy 接入或配置更新

`bootstrap.caddy` 仅用于 DNS 切换前的短暂 HTTP 预验收，不用于正式 HTTPS 运行。正式候选为 `person-web.caddy`。

```sh
scp deploy/tencent/manage.sh deploy/tencent/person-web.caddy tencent-main:/srv/apps/person-web/deploy/
ssh tencent-main 'sudo caddy-site-install person-web /srv/apps/person-web/deploy/person-web.caddy'
```

已有安装工具校验完整配置后平滑 reload，失败恢复旧文件；不修改其他站点配置。HTTPS 证书由 Caddy 自动签发、续期。本次证书为 Let's Encrypt，SAN 与正式域名一致，到期 2027-01-19。

## 回退

后续发布退回服务器上一版：

```sh
ssh tencent-main 'bash /srv/apps/person-web/deploy/manage.sh rollback'
curl -fsS https://zhenyi.shizibandu.icu/deployment.json
```

这会交换 `current` 和 `previous` 的指向，旧 release 不删除。初次迁移回 EdgeOne：在 DNSPod 将同一条 `zhenyi` 记录恢复为 `CNAME zhenyi.shizibandu.icu.pages.dnsoe4.com.`，默认线路、TTL 600，原值记录于 `deploy/tencent/dns-before-20261021.json` 及服务器 `shared/config/`。旧 EdgeOne 项目未删除、未停用。不要变更主域名、www、邮箱或其他产品记录。

## 本次验证范围

2026-10-21 定向验证：正式 DNS 到 `175.178.236.56`；HTTPS 证书有效、HTTP 308 保留 `id`；首页和父母声详情页直接访问、刷新、图片实际显示、语言切换、轮播上一张/下一张；固定 CSS 与 HTML 的缓存重新验证和 304；dist、Git、文档及未知路径不公开。迁移没有改网站业务代码或运行全量功能回归。

服务器维护总记录：本机 `~/server-ops/tencent-main/SERVER.md`，服务器 `/srv/ops/SERVER.md`。本项目发布及维护不影响其他项目。
