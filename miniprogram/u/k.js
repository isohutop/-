//禁用 单字母 k 命名函数
//细分各类功能 如果无需被加载的js 则不会被触发加载
module.exports = { 
  g:require('./g.js'),//上传下载数据  
  d:require('./d.js'),//本地缓存等常用js 
  w:require('./w.js'),//原 worker 处理
  r:require('./r.js'),//网络请求
  m:require('./m.js')//消息提示
  }