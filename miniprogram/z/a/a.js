// miniprogram/z/b/a.js
"use strict";
const z= getApp().z
Component({
  options: {addGlobalClass: true},
  properties: {  
    u: {type:String,valve:z.u[1],observer(n) {if(n){this.setData({u:n})}}},
    n: {type:String,valve:z.u[0],observer(n) {if(n){this.setData({n:n})}}},
    l: Number,  //推荐搜索
    r: {type:Array,valve:z.o[3]}   
  },
  data:{
    q:'搜索',
    o:z.h[2],//判断是否已经关闭了提示
    p: z.l.top,
    h: z.l.height - 3 + 'px' ,
    w: z.l.left - 13,
    v: z.l.height + 1,
    f:z.l.left
  },

  methods: {
    x(){this.setData({o:1});wx.setStorageSync('c', 1);z.h[2]=1},
    async u(e){e.detail.userInfo&&this.triggerEvent('u', {userInfo:e.detail.userInfo})}//授权
  }

})
