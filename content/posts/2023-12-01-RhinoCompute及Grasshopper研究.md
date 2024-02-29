---
title: RhinoCompute及Grasshopper研究
description: RhinoCompute及Grasshopper研究。
tags:
  - RhinoCompute
  - 技术
  - Grasshopper
  - 建模
image: "https://raw.githubusercontent.com/imamiao/pic/main/20240229150002.png"
slug: "/posts/rhino-des/"
noComments: true
---

1. 简介  
	RhinoCompute(下称Compute): 犀牛软件提供的一个计算服务, 可通过API/SDK调用犀牛软件的功能;   
    Grasshopper(下称GH): 犀牛软件的一个低代码编程服务, 可以使用第三方编写的组件或自己编写组件;   
    RhinoCommon: 犀牛软件中偏底层的一个接口库, 开发者可以利用其中的接口实现参数化建模, 从上边结构图中也可以看到GH和Python, .NET都是基于RhinoCommon来进行开发和功能实现. 其实Compute服务也是基于此, 对其进行包装以提供远程调用服务.  

2. 主要名词解释  
主流建模有两种成型方式，一种是mesh网格成型，另一种是nurbs曲面成型  
mesh曲面基础是三角面, 属于"标量"曲面, 模型精度与网格点精度有关, 是有上限的;  
nurbs曲面的基础是一组由函数表示的曲线, 属于"矢量"曲面, 理论上模型精度是没有上限的.  
犀牛软件对nurbs曲面支持非常完备, 对mesh曲面的支持是不如nurbs曲面   

3. 研究目标   

    a. 在页面上通过RhinoCompute-API, 提供地质点位数据, 实现地质体的建模   
    b. 通过RhinoCompute-API, 对第一步地质体数据进行Boolean操作   

4. 涉及技术  

    a.三角网构建  
    输入顶底板点位生成得劳内三角网, 作为顶底版面. 利用GH中的Delaunay Mesh组件完成实现  

    b.边界提取  
    对上一步中生成的面进行边界提取, 为侧面构建做准备. 利用GH中Mesh Edges组件完成实现  

    c.放样(Loft)  
    在两条曲线中生成面, 以上下表面的边界为基础, 利用GH中的Loft组件实现放样构建侧面  

    d.合并曲面, 封闭曲面  
    顶板,底板和侧面虽然已经构建出来, 但仍是相互独立的三个曲面需要把它们合并成一个封闭的实体才能进行后续的Boolean计算. 利用GH中自己编写的closeMesh组件实现  

    e.MakeHole(挖洞)命令  
    通过此命令可以指定平面上一个曲线, 并将此曲线进行拉伸成体, 实现在另一实体上的挖洞操作.    

5. 技术路线    

	顶底板点位  ->  三角网构建  ->  （顶底板三角网） ->  边界提取  ->  （顶底板边界）  ->  放样(Loft)  ->  （侧边三角网）  ->  合并封闭   ->  （封闭mesh）  ->  转nrubs  ->  (封闭多重曲面)  ->  Boolean计算  
    ![](https://raw.githubusercontent.com/imamiao/pic/main/20240229150256.png)
    ![](https://raw.githubusercontent.com/imamiao/pic/main/20240229150313.png)
    ![](https://raw.githubusercontent.com/imamiao/pic/main/20240229150326.png)

6. 技术障碍  

    a.依赖顶底板点位数据质量, 如果质量不好, 会出现两面交叉的情况;   

7. 附录  

    https://computerhino3djs.readthedocs.io/en/latest/index.html  
    https://developer.rhino3d.com/api/rhinocommon/
