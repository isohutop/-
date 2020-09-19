const k = require('../../u/k.js'),z= getApp().z

Page({
  data: {
    u:z.u,
    t:1,
    i:[...'连山阁实用工具库']
  }, 

  async k(){if(z.u){return};let v= await k.g.a();!v?'':this.setData({u:v})}, 
  r(){k.d.p();this.setData({x:1,t:this.data.t+1})},
  s(){this.setData({x:0})},  
  async w(e){let a=await k.g.g(e);if(a.data[0][z.g]){let b=a.data[0][z.g];b[8]?this.setData({n:1,w:b,i:[...this.data.s.d]}):this.setData({w:b,i:[...b[0]]})}},

  onLoad(options){   
    this.setData({s:z.s.filter(o=>o.a==options.o)[0]})
    z.g=='daoj.net'?this.setData({r:1,i:[...'一个值得收藏的小工具']}):z.g?this.w(z.g):''
    this.r();this.k()
  },
  //用户点击右上角分享朋友圈
  onShareTimeline () {return{title:this.data.s.b,url:'o/o/c?o=' + this.data.s.a}},
  //用户点击右上角分享
  onShareAppMessage() {return{title:this.data.s.b,url:'o/o/c?o=' + this.data.s.a,imageUrl:'https://pic.kuaizhan.com/g3/21/b8/d9ca-94c9-47ac-bde7-c54a1ad5461a26'}}
})