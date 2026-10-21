# 项目状态
核对日期：2026-10-21；范围：person-web；依据：DEPLOYMENT.md、正式站/deployment.json、服务器PROJECT.md。

## 项目目标
维护臻一个人品牌与项目作品网站，GitHub管理源码，腾讯云静态托管。

## 当前状态
已从EdgeOne迁移至 https://zhenyi.shizibandu.icu/ ，DNSPod zhenyi A=175.178.236.56，HTTPS自动续期。

## 已完成
网页源码de8e16619a6f0c5e418178c131195077e3209cb6，release 20261021T100204Z-de8e16619a6f。独立公开目录、Caddy、缓存重新验证、SSH发布及回退方法已配置。

## 当前进行中
无。

## 关键决策
纯静态多页面，根目录./为发布源，无需构建，dist/不发布。只打包Git已提交静态资源，不发布工作树或运维资料。保留project.html?id参数和真实404。

## 已知问题/阻塞
首次服务器发布无previous；旧EdgeOne部署及原CNAME已保留供回退，无迁移阻塞。

## 下一步
后续网站内容修改提交并push main后，执行python3 deploy/tencent/deploy.py；没有新增业务任务。

## 验收状态
2026-10-21迁移定向验证：公网HTTPS和来源、首页与父母声详情页直达/刷新、图片、中英切换、轮播、304缓存及非公开资源404。未执行全量功能回归或实际DNS回退。
