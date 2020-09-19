module.exports =(k,z)=>{
  var n, z =z?z:{}
  z.key ='服务器密匙'
  switch(k){
    case 0: n ='服务器网址1'
      return r(z,n);
    case 1: n ='服务器网址2'
      return r(z,n);
    case 2: n ='服务器网址3'
      return r(z,n);  
   
  }
  
}
//使用promise回调api数据
var r=(z,n)=>new Promise((d,p)=>{
  wx.request({
    url: 'https://服务器网址/'+n,
    data: z,
    success(o){d(o)},
    fail(o){typeof p =='function'?p(o):console.log(o)}
  })
})