// miniprogram/z/b/a.js
"use strict";
const k = require('../../u/k.js'),z=getApp().z
Component({
  options: {addGlobalClass: true},
  properties: {  
    b:String,
    u:Array, 
    s:Object,
    w:Array
  },
  data:{
    q:'搜索',
    t:0,
    f:z.l.left + 4,          
    p: z.l.top ,
    h: z.l.height + 'px' ,
    r: 'width:' + (z.l.left - 13) + 'px',
    y:z.c
  },
  methods: {
    a(){this.setData({q:''})},
    b(){this.setData({q:'搜索'})},
    c(){this.triggerEvent('f', {a:this.data.c})},
    d(e){this.setData({c:e.detail.value})},
    y(){this.setData({t:0})},
    t(e){this.setData({t:a})},
    j(e){this.setData({['s.c']:1});k.d.j(e);z.h[3]=1;this.h()},
    h(){wx.showModal({title: '收藏成功',content: '\r\n是否立即查看收藏页面',success(res){if(res.confirm){z.h[1]=1;wx.reLaunch({url: '../o'})}}})},
    //授权
    async u(e){let a=e.detail.userInfo;if(a){let c=a.nickName,d=a.avatarUrl;this.setData({u:[c,d],['s.c']:1});await k.d.o(c,d,e.currentTarget.dataset.a);z.h[3]=1;this.h()}}
      
  }
})