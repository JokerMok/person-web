# 臻一个人网站

正式地址：https://zhenyi.shizibandu.icu/

纯静态多页面网站，发布源为仓库根目录 `./`，无需构建。`dist/` 是另一套旧产物，不用于当前发布。

网站托管于腾讯云服务器，由 Caddy 提供 HTTPS；代码继续通过 GitHub 管理。旧 EdgeOne 部署暂留作回退，`edgeone.json` 保留其原始根目录配置。

本机提交、推送到 GitHub 后发布：

```sh
git push origin main
python3 deploy/tencent/deploy.py
```

脚本获取远端 `main` 的已提交版本，筛选根目录静态文件和公开资源，经 `ssh tencent-main` 上传独立 release 并原子切换。未提交改动不会被覆盖或带入发布，也不需要给正式网址添加版本参数。

部署目录、首次接入和回退方法见 [DEPLOYMENT.md](DEPLOYMENT.md)。
