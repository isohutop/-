// 内容审查
const cloud = require('wx-server-sdk')
//env:'xxx' XXX为小程序的数据库环境id
cloud.init({env:'xxx',traceUser: true})
 
// 云函数入口函数
exports.main = async (e) => { 
  try {    
    return await cloud.openapi.security.msgSecCheck({content: e.c})
  } catch (err){throw err}
}