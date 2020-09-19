const k = require('../../u/k.js'),z= getApp().z, mg = requirePlugin("WechatSI").getRecordRecognitionManager()

Page({
  data: {
    button:{buttonText: "中文",lang: "zh_CN",buttonType: 'normal'},
    u:z.u,
    k:0,
    x:null,
    y:null,
    v:0
  },

  a(){this.setData({p:true})},
  b(){this.setData({p:false})},
  c(){let c=this.data.c;if(!c){return};this.setData({b:['',6]});this.s(c)},//确认
  d(e){this.setData({c:e.detail.value})},
  e(e){this.setData({a:e.detail.i})},
  f(e){this.setData({c:e.detail.a});this.c()},

  g(){this.setData({r:true});mg.start({lang:'zh_CN'})},
  h(){if(!this.data.r){return};mg.stop();this.setData({q:'',r:false})},//松开按钮结束语音识别 
  i(){this.data.m?this.setData({c:''}):this.setData({b:'',c:''})},//清空原有的搜索输入  

  v(){this.setData({v:3})},
  u(){var that =this;setTimeout(function a(){that.setData({v:0});clearTimeout(a)},286)},
  t(){k.d.p()},  

  async k(){if(z.u){return};let v= await k.g.a();!v?'':this.setData({u:v})},

  async s(e){
    this.v()
    let b = {word:e}     
    let r = this.data.s.a
    let a = await k.r(r,b).then(o=>{return o.data.code == 200?o.data:o.data.code}).catch()
    //console.log(a)
    if(a.code==200){
      let s = a.newslist
      switch(r){
        case 513:
          let c = s.filter(o=>{return o.type=="综合类"})//取综合类的数据          
          var f = {c:''};for(var i =0 ;i<c.length;i++){f.c += c[i].result}
          let d = await k.g.h(f)
          if(d.errCode==0){this.setData({m:c.map(o=>{o.result=o.result.replace(/<[^>]+>/,'');return o})})}else{this.i();k.m.d()}//内容包含违禁词汇       
        break; 
        case 405:var f = {c:e};let d405 = await k.g.h(f)
        if(d405.errCode==0){this.setData({m:[e,s[0].list]})}else{this.i();k.m.d()}//内容包含违禁词汇        
        break;
        case 510:this.setData({m:s})
        break;
        case 503:s[0].e=e;this.setData({m:s})
        break;
        case 507:var x = s        
        var f = {c:''}
        for(var i =0 ;i<x.length;i++){f.c += x[i].content}           
        let y = await k.g.h(f)
        if(y.errCode==0){this.setData({m:x})}else{this.i();k.m.d()}//内容包含违禁词汇   
        break;
        default:this.setData({m:s[0]})
        break;
      }
    //console.log(this.data.m)

    }else{this.i();k.m.b(a)}//服务器无回馈    
    this.u()
  },
  async w(e){let a = await k.g.g(e)
    if(a.data[0][z.g]){let b=a.data[0][z.g];this.setData({w:b});b[8]?this.setData({n:true}):''}
    else{this.setData({w:['连山阁实用工具库']})}
  },

  onLoad(options) {var that = this     
    this.k();this.setData({s:z.s.filter(o=>o.a==options.o)[0]})
    z.g=='daoj.net'?this.setData({t:1,w:[this.data.s.d]}):z.g?this.w(z.g):this.setData({w:['连山阁实用工具库']})

    this.setData({x:this.g,y:this.h})//语音函数传递至组件       
    mg.onStart = function () {that.setData({q:'正在聆听中...'})}//成功开始录音识别    
    mg.onError = function () {that.setData({q:'您的设备无法支持此功能'})}// 识别错误事件    
    mg.onStop = function (res) {
      //console.log('..............结束录音')
      //console.log('录音临时文件地址 -->' + res.tempFilePath); 
      //console.log('录音总时长 -->' + res.duration + 'ms'); 
      //console.log('文件大小 --> ' + res.fileSize + 'B');
      //console.log('语音内容 --> ' + res.result);
      if (res.result == '') {that.setData({q:'语音识别错误，请重新说一遍'});wx.showModal({title: '提示',content: '听不清楚，请重新说一遍！',showCancel: false});return}
      let a = res.result
      that.setData({c:a.replace(/\uff1f|\u3002|\uff0c/g,''),q:a});that.c()           
    }//识别结束事件
  },
  //用户点击右上角分享
  onShareAppMessage() {return{title:this.data.n[0],url:'o/o/b?o=' + this.data.s.a,imageUrl:'https://pic.kuaizhan.com/g3/21/b8/d9ca-94c9-47ac-bde7-c54a1ad5461a26'}}
})