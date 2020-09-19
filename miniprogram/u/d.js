const kz = getApp().z,ug= require('./g.js'),

kp=function(){wx.pageScrollTo({scrollTop:0})},//置顶

//复制回调
kf =e=>new Promise(function (d) {wx.setClipboardData({data: e,success: function (o) {typeof d == 'function'?d(o):console.log(o)}})}),
//跳转方式，支持跳转小程序
kg =(k,z,i,p)=>{i?wx.navigateToMiniProgram({appId:i,path:p}):wx.navigateTo({url: 'o/'+k+'?o=' + z})},
//用户授权头像
ko = async (c,b,x)=>{
      let d = await ug.b([c,b]),f = (d==0||!d[0])?[]:d
      kz.z=f[0]?f:x?[x]:[]
      wx.nextTick(()=>{zz(kz.z);kz.u=[c,b];ku([c,b]);f[0]?'':x?ug.e(x):''})
      return ks()      
},
//增加收藏
kj=e=>{
    let a= e.currentTarget.dataset.a,b= kz.s.findIndex(o=>o.a==a),d=kz.z.unshift(a)
    wx.nextTick(()=>{kz.s[b].c=1;zz(kz.z);ug.e(a)})       
    return b    
},
//收藏的状态
ks =()=>{let s =e=>{e.c=1;return e};kz.s=kz.s.map(o=>kz.z.indexOf(o.a)>-1?s(o):o);return kz.s},
//重新认证收藏状态 -- 首页
kt =()=>{kz.h[1]=0;let s =e=>{e.j=0;return e};return kz.s.map(o=>kz.z.indexOf(o.a)==-1?s(o):o)},
//重新认证收藏状态 -- 收藏页
kr =()=>{kz.h[0]=0;return kz.s.filter(o=>kz.z.indexOf(o.a) >-1)},
//设置缓存 用户头像名称本地
ku = function(u){wx.setStorageSync('u',u)},
//设置缓存 收藏记录
zz = function(u){wx.setStorageSync('z',u)}

module.exports = {
  j:kj,  //增加收藏
  f:kf,  //复制文本内容
  g:kg,   //统一跳转
  r:kr,  //重新认证收藏状态 -- 收藏页
  o:ko,  //用户授权头像
  p:kp,  //返回顶部
  s:ks,  //收藏的状态
  t:kt,  //重新认证收藏状态 -- 首页
  u:ku,  //设置缓存 用户头像名称本地
  x:kx,  //验证页面缓存是否过期
  z:zz   //设置缓存 收藏记录
}