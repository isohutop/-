const kd = require("./d.js"),

ma =function(){wx.showModal({title: 'daoj.net',content: '请在微信或浏览器中搜索\r\n“归藏易文化”\r\n发现更多精彩内容',showCancel: false,success (res) {res.confirm&&kd.f('归藏易文化')}})},
bb =function(){wx.showModal({title: '错误提示',content: '网络连接错误\r\n请与管理员联系',showCancel: false})},
mb =function(e){
  switch (e) {
    case 100: wx.showModal({title: '错误提示',content: '内部服务器错误\r\n请与管理员联系',showCancel: false})      
      break;
    case 110: wx.showModal({title: '错误提示',content: '服务器维护中\r\n详情查看公众号公告',showCancel: false})      
      break;
    case 120: console.log('IP来源受限')     
      break; 
    case 130: bb()      
      break;
    case 140: bb()     
      break;
    case 150: bb()      
      break;
    case 160: bb()   
      break;
    case 170: console.log('Referer请求来源受限')     
      break;
    case 250: wx.showModal({title: '无查询数据',content: '或者\r\n根据相关规定\r\n部分内容无法展示',showCancel: false})      
      break;
    case 270: wx.showModal({title: '错误提示',content: '缺少有效数据\r\n请与管理员联系',showCancel: false})      
      break;
    case 280: wx.showModal({title: '错误提示',content: '参数缺失\r\n请与管理员联系',showCancel: false})      
      break;
    case 290: wx.showModal({title: '错误提示',content: '搜索内容超过了最大输入限制',showCancel: false})      
    default:break;
  } 
},
mc =function(){wx.showModal({title: '功能即将上线',content: '请在微信或浏览器中搜索\r\n“归藏易文化”\r\n实时获取应用更新上线信息',showCancel: false})},
md =function(){wx.showModal({title: '无法查询数据',content: '根据相关规定\r\n部分内容无法展示',showCancel: false})},
mf =function(){wx.showToast({title: ' 收藏成功 ',icon:'none',duration:888})},
mg =function(e){wx.showModal({title: '提示',content: '网络延迟中\r\n请在'+e+'秒后重试',showCancel: false})}
module.exports = { 
  a:ma,
  b:mb,
  c:mc,
  d:md,
  f:mf,
  g:mg
}