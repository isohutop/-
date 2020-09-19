wx.cloud.init({env: 'xxx',traceUser: true})
const db = wx.cloud.database(), _ = db.command,
//公开数据命名为fo 用户隐私数据集合命名为fp

// 获取用户信息 已经授权返回用户信息  未授权无返回
oa = async()=> await wx.getSetting().then(o=>o.authSetting['scope.userInfo']?wx.getUserInfo().then(o=>{let b =o.userInfo,a =[b.nickName,b.avatarUrl];return a}):''),
//用户注册查询
ob = async(e)=> await wx.cloud.callFunction({name: 'nf',data:{b:e}}).then(o =>o.result),
//用户收藏记录
oc = async()=> await db.collection('fp').where({_openid:'{openid}'}).field({a:true}).get().then(o=>o.data[0].a),
//删除收藏记录
od = async(e)=> await db.collection('fp').where({_openid:'{openid}'}).update({data:{a: _.pull(e)}}).then(o=>o),
//增加收藏记录
oe = async(e)=> await db.collection('fp').where({_openid:'{openid}'}).update({data:{a: _.unshift(e)}}).then(o=>o),
//验证内容合规
oh = async(e)=>await wx.cloud.callFunction({name: 'sc',data:e}).then(o => o.result).catch(o=>1),
//获取公开数据
og = async(e)=>await db.collection('fo').where({_id:'bb'}).field({[e]:true}).get()

module.exports = {
  a:oa,
  b:ob,
  c:oc,
  d:od,
  e:oe,
  h:oh,
  g:og

}