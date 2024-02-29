---
title: Gatsby从安装到自动化部署再到访问加速
description: Gatsby是一个基于React实现的静态网站框架。本文介绍Gatsby的安装，启动，部署到Github Pages，利用Github Actions自动编译部署，自定义域名，利用腾讯云CDN进行访问加速这几方面进行介绍，可以说是从0到1的保姆式教程。
tags:
  - Gatsby
  - 技术
  - Github pages
  - Github Actions
  - 中文
image: "https://raw.githubusercontent.com/imamiao/pic/main/d87c1362ly1h1qmt80ck2j215o0kun0a.jpg"
slug: "/posts/using-gatsby/"
noComments: true
---


### Gatsby简介  

引用一下Gatsby官网的介绍：*[Gatsby](https://github.com/gatsbyjs/gatsby) is a free and open source framework based on React that helps developers build blazing fast websites and apps.*。  
Gatsby是一个基于React实现的开源的静态网页框架，你可以使用Markdown语言来进行创作，使用Gatsby编译为纯静态页面，然后部署到任何支持部署静态资源的地方。如果你对网站框架有所了解，那么它和基于Vue的VuePress，基于Node.js的Hexo的功能相似。  

### 安装，启动  

1. 环境安装  
    - 安装Node：Node版本选择v14.19，下载地址：https://nodejs.org/download/release/v14.19.0/  (*因为要和node-sass版本匹配所以使用node14，这样可以跳过编译这个大坑*)  
    - npm安装Gatsby CLI：
    ```
    npm install -g gatsby-cli
    ```  
    - 使用模板初始化项目：
    ```
    gatsby new my-default-starter https://github.com/izackwu/gatsby-starter-breeze
    ```  
    (*这里使用的是[izackwu](https://github.com/izackwu)大神的模板，示例地址：[点我](https://gatsby-starter-breeze.netlify.app)。如果你想选择其他模板也可以自行选择。*)  
2. 启动项目：  
    ```
    cd my-blog-starter/
    gatsby develop
    ```  
    漫长等待后，一切正常的话，命令行会有一下字样出现。这时候你就可以访问 http://localhost:8000/ ，将会显示和[示例地址](https://gatsby-starter-breeze.netlify.app)一样的页面。
    ```
    ...
    You can now view gatsby-starter-breeze in the browser.

    http://localhost:8000/

    View GraphiQL, an in-browser IDE, to explore your site's data and schema

    http://localhost:8000/___graphql
    ```  

3. 成功启动，第一步完成啦~🎇🎇


### 配置，编译  

todo

### 部署  

todo

#### 部署到Github Pages   

todo

#### 自定义域名  

todo

#### 利用Github Actions自动化部署  

todo

#### 利用腾讯云进行CDN加速  

todo

