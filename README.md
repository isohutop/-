# 连山阁小工具库

用常见的API组合成一个小程序，其中包含了约50条API功能。除去集合在小程序上的图片代码，代码大小约为80K之内。

# 在小程序上的主要表现为：

- 实时刷新：获取服务器数据之后，实时更新页面状态
- 专项查询：分类数据，搜索后返回页面结果
- 问答展示：服务器获得数据之后，客户端采用问答的形式展现

# 使用小程序云数据库的功能为：

- 为用户提供简单的收藏移除小工具
- 由于每个企业可能制作很多不同的小程序，根据推广的需求，在小工具的底部配置了根据不同的参数跳转到不同的小程序。

# 项目结构

- 首页"o/o",
- 更新记录"o/k",
- 实时刷新"o/o/a",
- 专项查询"o/o/b",
- 问答展示"o/o/c"，
- "u"文件夹为工具调用，
- "z"文件夹为组件

# 命名方式

- 中文拼音不适合命名！英文说白了，很多可能都是词不达意，而且未必能保证阅读者有那么多词汇量。加上本人比较懒...
- 因此，命名从一开始写的时候，都是单字母命名，最多两个字母。文件路径、函数名、变量名和HTML元素命名以及数据库命名都是单字母为主。
- 命名方式中有明显的个人惯性指纹，比如a\b\c\d的函数名一般都是用于用户输入的交互数据获取
  全局 k 为引用外部js
  全局 z 为appdata
- 最重要的是，任何一个页面或者组件26个英文字母的变量名和函数名，抑或是HTML元素命名，基本上都是用不完的。
- 事实上，使用单字母的命名方式是更为简洁的代码规范，团队配合可以使用固定的指纹命名方式或详细的注释。

# 代码注释

- 表现层的代码比较简单，都是常见的JS代码，因此没有过多注释。
- 核心可共用的代码均带有注释说明

# 部署方式

- 复制代码至新建的小程序文档
- 使用微信开发者工具修改APPID项目名称
- 修改所有的env:'xxx'为env:'项目的环境ID'
- 数据库部署三个基本集合为 fo公开库 fp用户可写库 ff备用库
- 调用外部的api应修正您自己的网址密钥和数据返回带来的变化
- 使用语音搜索时，应先申请微信的同声传译插件

# 小程序云数据库结构
- 设置集合 fo 该集合下新增 bb 字段
- bb下新增类型为数组，命名即为触发的参数
- 新增的数据在前端的表现形式如下：

         //页面中部文字和图片
         //图片规格410x200
        "执古之道以御今之有",
        "https://pic.kuaizhan.com/g3/09/c2/5624-4bed-4872-8ca7-d699be7b58cc38",

         //底部广告标题，引导语和图片
        "归藏易文化",
        "执古之道以御今之有",        
        "https://pic.kuaizhan.com/g3/09/c2/5624-4bed-4872-8ca7-d699be7b58cc38",

        //点击跳转的APPID
        "wx12333333339999",
        //为空时，默认为首页 值为路径
        "",
        //分享时的图片
        "https://pic.kuaizhan.com/g3/79/40/e960-b55f-44f0-b244-a27d4cebf2b739",

        //为空时，显示页面中部图片
        //有值，值为企业名称 显示在顶部
        ""
      

## 开源许可 BSD 2-Clause License

Copyright (c) 2020, 六桂
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

