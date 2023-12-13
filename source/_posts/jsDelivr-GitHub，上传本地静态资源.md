---
title: jsDelivr-GitHub，上传本地静态资源
tags:
  - github
  - 上传资源
toc: true
abbrlink: 8c365343
---

tips：图片也可以用图床上传到github（https://picx.xpoet.cn/#/upload）

**目标：将本地图片资源上传到免费CDN，以便随时使用！其他静态资源亦可，例如：js、css、pdf、word、excel 等等。**

## 1.在[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020)上创建新仓库：resources，用于存放要上传到 CDN 的静态资源：

![img](https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@main//hexo-blog/202312121523348.png)

<!--more-->

## 2.上传图片到新仓库：resources 中：

- 可以在 github 使用 Upload files 上传文件。
- 也可以先将仓库克隆到本地,将需要上传的图片复制到 resources/ 目录中，然后 push 到远程仓库。

以下可不看，直接使用这个链接就可以访问资源：**https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@main/test/xiaojinyu.jpg**

也就是以下格式：

```html
https://cdn.jsdelivr.net/gh/<username>/<repo name>@<branch>/<resource name>
```

## 3.新发布一个版本release：

进入 github 仓库的 Code 页面，点击页面右侧的 Release，create a new release,

![img](https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@main//hexo-blog/202312121521334.png)

choose a tag, 需要新建一个标签，直接输入例如0.0.1，点击create new tag,之后点击 Publish release 进行发布。

## 4.完成，可以访问CDN资源：

使用如下规则访问 CDN 资源：

```html
https://cdn.jsdelivr.net/gh/<username>/<repo name>@<tag>/<resource name>
```

例如：https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@0.0.1/test/xiaojinyu.jpg

或者：**https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@main/test/xiaojinyu.jpg**

查看 CDN 资源目录：https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@0.0.1/

