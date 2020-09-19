// o/o.js  首页
//单字母 k 为引用外部的JS
//单字母 z 为引用app的数据
const k = require('../u/k.js'),z= getApp().z
Page({
  data: {
    a:z.h[0],//头部高度    
    l:0,//主页面为0 收藏页任意值
    //tap的内容
    m:['最新','热点','金融','文化','爱情','生活','历史','问答'],
    n:0,//栏目点击的index
    //tap内容说明
    f:['最近更新应用时间 2020-08-18','网络实时关注热点','据此投资风险自负','传统文化在线查询','情感世界的润滑剂','实用生活技巧查询','客观世界发展的过程','作题后 解释正确答案'],
    u:z.u,
    j:[{a:0,b:'RMB',c:'美元汇率比'},{a:0,b:'USD',c:'比特币现价'},{a:0,b:'USD',c:'以太币现价'}],    
    z:z.z,//缓存的收藏数据
    s:z.z?k.d.s():z.s //没有缓存的收藏数据，则从微信云数据库提取数据
  },

  j(e){this.setData({['s['+k.d.j(e)+'].c']:1,z:z.z});k.m.f()},//收藏

  async u(e) {//获得授权
    let a = e.detail.userInfo    
    if(a){let c = a.nickName,d = a.avatarUrl;this.setData({u:[c,d],s:await k.d.o(c,d,e.currentTarget.dataset.a),z:z.z})}
  },

  l(){this.setData({l:this.data.l<1?1:0})},//返回主页面
  r(){this.setData({s:z.s})}, //收藏或删除工具后，重设数据表 

  async k(){//验证是否已经授权过头像
    if(z.u){return}
    let v= await k.g.a()
    if(!v){return}
    z.z= await k.g.c() 
    this.setData({u:v,s:k.d.s()})
    z.u=v;k.d.u(v);k.d.z(z.z)
  }, 
  //左侧tap点击切换
  m(e){this.setData({n:e.currentTarget.dataset.i})},
  //右侧小工具点击
  p(e){let f = e.currentTarget.dataset;k.d.g(f.u,f.a,f.i,f.p)},
  q(){wx.navigateTo({url: './k?o=1'})}, 

  onLoad(){this.k()},

  async h(){//取金融类的返回值 此处如果不在首页直接取外部数据，则可以删除
    await k.r(0).then(o=>o.data.code==200?this.setData({['j[0].a']:o.data.newslist[0].money}):'')
    await k.r(1).then(o=>o.data.code==200?this.setData({['j[1].a']:o.data.newslist[0].close}):'')
    await k.r(2).then(o=>o.data.code==200?this.setData({['j[2].a']:o.data.newslist[0].close}):'')
  },
  //判断展示的参数
  onReady(){this.h();this.setData({r:k.w.b()});z.h[4]&&this.setData({n:z.h[4]})},
  //判断展示的参数
  onShow(){z.h[3]&&this.setData({s:z.s,u:z.u,z:z.z});z.h[1]&&this.setData({l:1})},
  //判断展示的参数 分享朋友圈
  onShareAppMessage(){let a=this.data.n,c = this.data.l?'o/k':a<1?'o/o':'o/k?l='+a
    return{title:'超实用的小工具库',url:c,imageUrl:'https://pic.kuaizhan.com/g3/15/83/3806-698b-43d7-85df-7de3f92c30b580'}},
})