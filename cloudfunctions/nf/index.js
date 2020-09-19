// 新用户注册
const cloud = require('wx-server-sdk')
cloud.init({env:'xxx',traceUser: true})
const db = cloud.database()
// 云函数入口函数
exports.main = async (e) => {
  
  let a=e.userInfo.openId,{data} = await db.collection('fp').where({_openid:a}).get().then(o=>o)
  if(!data[0]){//没有用户，新建用户数据库类型
    
    //用户公开库
    db.collection('fo').add({data: [{"_openid": a,
    "a":[],//收藏记录
    "b":e.b,//用户名和头像
    "z":0,//判定为用户 新增未读数时可用 
      }]
    })  
    //用户私密库仅自己可写
    db.collection('fp').add({data: [{"_openid": a,"a":[],"b":e.b,"z":0}]}) 
    //用户备用库 -- 所有不可读写
    db.collection('fu').add({data: [{"_openid": a,"a":[],"b":e.b,"z":0}]})     
   
  }

  return data[0]?data[0].a:0
}