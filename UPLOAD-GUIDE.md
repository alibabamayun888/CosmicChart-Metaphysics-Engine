# CosmicChart 上传与发布指南

## 上传或覆盖

将压缩包内容合并到仓库根目录：

```text
README.md
README.zh-TW.md
README.en.md
GITHUB-METADATA.md
PRIVACY.md
SECURITY.md
RESPONSIBLE-USE.md
docs/
```

`docs/assets/Screenshots/` 包含线上仓库现有的 `001.png` 至 `004.png`。压缩包不会修改根目录的 `js/`、`layui/`、`qimen.html` 或其他现有程序文件。

## 设置 GitHub

1. 在仓库 About 设置中填写 `GITHUB-METADATA.md` 的 About、Website 和 Topics。
2. 打开 **Settings → Pages**。
3. 选择 **Deploy from a branch**、`main` 和 `/docs`。
4. 部署后检查首页、`/zh-TW/`、`/en/` 和四张产品截图。

## 提交搜索引擎

在 Google Search Console 和 Bing Webmaster Tools 添加：

```text
https://alibabamayun888.github.io/CosmicChart-Metaphysics-Engine/
```

提交 Sitemap：

```text
https://alibabamayun888.github.io/CosmicChart-Metaphysics-Engine/sitemap.xml
```

## 发布前还需处理

- 选择真实许可证并添加标准 `LICENSE`，在此之前不要继续展示 MIT 徽章。
- 核对 `wujibazi.jsop` 是否为正确扩展名；若是误写，应在测试引用后更名。
- 为 `qimen.html`、`mail-login.html` 和主要脚本补充用途说明。
- 如果确有 Vue、Spring Boot、MySQL 或 Redis 代码，应上传真实目录、构建文件与配置示例；否则从 About 中删除这些技术。
- 增加算法来源、历法数据版本、边界日期测试和已知误差说明。
- 清理截图中的真实人物资料、Windows 激活水印及可能泄露的测试信息，再发布新的脱敏截图。
- 添加版本标签、Release、CHANGELOG 和可重复的演示步骤。

Google 与 Bing 排名取决于内容质量、可抓取性、项目更新、外部链接和用户搜索需求，README 与 Pages 优化不能保证固定排名。
