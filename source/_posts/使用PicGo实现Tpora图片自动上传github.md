---
title: 使用PicGo实现Tpora图片自动上传github
tags:
  - Typora
  - PicGo
  - 图片自动上传
toc: true
abbrlink: 8364e9c6
date: 2023-12-11 00:00:00
---

# 新建仓库并且创建token

## 新建仓库

在github新建一个仓库，属性需要设置为public，这样第三方软件（PicGo）才能访问。

## 创建token

在github网页点击头像->Setting->Developer Settings->Personal access tokens->Tokens(classic)，设置永久期限，勾选repo，点击生成token，记得赶紧保存好token，不然就看不到了。

<!--more-->

# 下载并配置PicGo

![屏幕快照 2023-12-11 的 21.30.15 下午](https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@main//hexo-blog/202312112130960.png)

按照上图设置，打开时间戳重命名和上传后自动复制URL，图床只选择github。

![屏幕快照 2023-12-11 的 21.43.33 下午](https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@main//hexo-blog/202312112143464.png)

几个要点：

- 设定仓库名：Github用户名/仓库名
- 设定Token：复制粘贴上面的token
- 设置自定义域名：使用CDN加速，https://cdn.jsdelivr.net/gh/username/repository@branch/

# 配置Tpora

打开设置->图像

![屏幕快照 2023-12-11 的 21.52.49 下午](https://cdn.jsdelivr.net/gh/MarkChenyyds/resources@main//hexo-blog/202312112203896.png)

上传服务设定，选择PicGo.app，点击验证图片上传选项，可以试验是否能够上传。

