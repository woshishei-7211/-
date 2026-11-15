# 产品展示与下载中心

一个不需要安装依赖的中文静态网站。当前产品资料和下载文件均为示例占位内容。

## 预览

直接用浏览器打开 `index.html` 即可预览。也可以在项目目录运行一个本地静态服务器：

```powershell
py -m http.server 8000
```

然后访问 <http://localhost:8000>。按 `Ctrl+C` 停止服务器。

## 修改产品

打开 `products.js`，编辑 `window.PRODUCTS` 数组中的产品对象。每个对象对应首页的一张产品卡片和一个详情弹窗。常用字段包括：

- `name`、`category`、`summary`：卡片上的名称、分类和简述
- `description`：详情介绍
- `features`、`useCases`：产品特点和适用场景
- `version`：版本信息
- `download`、`downloadLabel`、`fileType`：下载路径、按钮文字和文件类型
- `color`、`symbol`：卡片示意色和图形符号

复制一个产品对象并修改 `id`（保持唯一），即可添加新产品。

## 添加下载文件

将文件放入 `downloads/` 目录，然后把对应产品的 `download` 修改为相对路径，例如 `downloads/manual.pdf`。卡片和详情页会显示下载入口。大文件或需要在线上传管理时，可在此基础上再接入存储服务。
