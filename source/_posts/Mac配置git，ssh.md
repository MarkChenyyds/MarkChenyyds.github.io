---
title: Mac配置git，ssh
tags:
  - git
  - ssh
toc: true
abbrlink: 24cea3fc
---

```
//生成公钥
ssh-keygen -t rsa -C "你的git注册邮箱"
//将私钥身份添加到OpenSSH身份验证代理,加速认证
ssh-add ~/.ssh/id_rsa
//测试
ssh -T git@github.com
```

<!--more-->

**另外，ssh-add的相关命令：**

#### 1.启动ssh-agent

在使用SSH-add命令之前，我们需要启动ssh-agent。可以通过以下命令启动：

```plain
eval "$(ssh-agent -s)"
```

#### 2.添加私钥

将私钥添加到ssh-agent，只需运行以下命令：

```plain
ssh-add ~/.ssh/id_rsa
```

其中，~/.ssh/id_rsa是默认私钥文件的路径，你可以根据实际情况替换为你的私钥文件路径。

#### 3.查看已添加的私钥

要查看已添加到ssh-agent的私钥，可以使用以下命令：

```plain
ssh-add -l
```

#### 4.删除私钥

如果需要从ssh-agent中删除某个私钥，可以使用以下命令：

```plain
ssh-add -d ~/.ssh/id_rsa
```

删除所有：

```plain
ssh-add -D
```