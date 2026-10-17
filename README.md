# 取景框官网

`zn-1412.github.io` 是「取景框」浏览器扩展的官方介绍站点，使用纯静态 HTML / CSS / JavaScript 编写，由 GitHub Pages 托管。

- 线上地址：https://zn-1412.github.io/
- 扩展源码：https://github.com/zn-1412/View
- 下载文件：[`assets/downloads/viewfinder-extension-v1.0.0.zip`](assets/downloads/viewfinder-extension-v1.0.0.zip)

## 结构

```text
index.html             官网首页
styles.css             页面样式
script.js              扩展管理页地址复制、年份更新
assets/
  landscape.svg        首屏示例网页风景
  popup.png            扩展实际界面截图（2x）
  og-cover.png         社交分享封面（1200 × 630）
  favicon.svg/.png     站点图标
  icon-128.png         Apple touch icon / 结构化数据图片
  downloads/           可下载的扩展 ZIP
robots.txt
sitemap.xml
.nojekyll              关闭 GitHub Pages 的 Jekyll 处理
```

## 发布

站点从 `main` 分支根目录发布。修改后提交并推送：

```bash
git add .
git commit -m "Update site"
git push
```

## 更新扩展下载包

1. 在 `View` 仓库更新扩展代码和版本号。
2. 将扩展文件打包为 `viewfinder-extension/` 文件夹，生成 ZIP，并放入 `assets/downloads/`。
3. 更新 `index.html` 中的下载链接、版本号、文件大小和 SHA-256。
4. 同步更新本 README 中的下载路径。

下载包内通常包含：

```text
viewfinder-extension/
  manifest.json
  popup.html
  popup.css
  popup.js
  README.md
  icons/
  tools/
```

## 维护说明

- 不加载第三方字体、脚本或分析服务，页面保持完全自包含。
- 页面标题、描述和 Open Graph 信息位于 `index.html` 的 `<head>` 中。
- 更新主视觉截图时，保持 `assets/popup.png` 的 2x 清晰度以便高分屏显示。
