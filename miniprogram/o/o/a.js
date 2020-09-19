//单字母 k 为引用外部的JS
//单字母 z 为引用app的数据
const k = require('../../u/k.js'),z= getApp().z

Page({
  data: {
    u:z.u,//用户头像
    p:[],//展示的数据类型 1 
    j:[],//暂存数据
    q:[],//展示的数据类型 2 
    i:[...'连山阁实用工具库'] //图片下方的文字
  }, 
  // 函数 k 统一为获取用户授权信息
  async k(){if(z.u){return};let v= await k.g.a();!v?'':this.setData({u:v})}, 
  //数据刷新置顶 设置防误触 最后触发请求
  r(){k.d.p();this.data.x?wx.showToast({title:' 数据刷新中 ',icon:'none',duration:666}):this.setData({x:1});this.s(this.data.s.a)},

  async s(e){//通过api获得数据
    let a = await k.r(e).then(o=>o.data.code == 200?o.data:o.data.code).catch()
    //console.log(a) 根据不同的返回数据，安排展示格式
    if(a.code==200){
      var f = {c:''},s =a.newslist[0],c = a.newslist
      switch(e){
        case 301:this.qp(c.map(o=>{o.title=o.title.replace(/\u3002|\uff0c/g,' · ');return o}))
          return;              
        case 302:this.qp(c.map(o=>{o.title=o.title.replace(/\u3002|\uff0c/g,' · ');return o}))
          return;
        case 603:for(var i =0 ;i<c.length;i++){f.c += c[i].title}
        break;
        case 308:for(var i =0 ;i<c.length;i++){f.c += c[i].content}
        break;
        case 303:f.c=s.front+','+s.behind
          break;  
        case 305:f.c=s.quest+' -- '+s.result
          break;
        case 306:f.c=s.content.replace(/<[^>]+>/g,'')
          break;
        case 307:f.c=s.dialogue
          break;
        case 101:this.setData({p:c.map(o=>o.keyword)})
          return;
        case 102:this.setData({p:c.map(o=>o.word)})
          return;
        case 103:this.setData({p:c.map(o=>o.hotword)})
          return;          
        case 406:this.q(s)
          return; 
        case 411:f.c=s.quest +'<br /><b>答案：</b>' +s.result
          break;
        case 104:f.c=s.content+s.source
          break;    
        case 310:this.q(s)
          return;
        case 603:f.c=s
        break;
        case 105:f.c=s.title + s.content
        break;
        default:f.c=s.content
          break
      }      
      //console.log(f.c) 过审内容
      if(z.c==1154){
        switch(e){
          case 603:this.qp(c)
            break;
          case 104:this.q(s)
              break;
          case 105:this.q(s)
              break;
          case 308:this.qp(c)
            break;
          case 307:this.q(s)
            break;
          case 516:this.q(s)
            break;
          default:this.p(f.c)
            break
          }   
      }else{//内容过审
      let d = await k.g.h(f)          
      if(d.errCode==0){
        switch(e){
        case 603:this.qp(c)
          break;
        case 104:this.q(s)
            break;
        case 516:this.q(s)
            break;
        case 105:this.q(s)
            break;
        case 308:this.qp(c)
          break;
        case 307:this.q(s)
          break;
        default:this.p(f.c)
          break
        }   
        }else{this.s(this.data.s.a)}//内容包含违禁词汇
      }
    }else{k.m.b(a)}//服务器无回馈 
       
  },
  //三种不同的表现形式传参至组件
  p(e){this.data.j.unshift(e);this.setData({p:this.data.j,x:0})},//使用网页的标签展示 <rich-text nodes="{{item}}"></rich-text>  
  q(e){this.data.j.unshift(e);this.setData({q:this.data.j,x:0})},//使用微信原生标签展示
  qp(e){this.setData({q:e,x:0,j:e})},//不用 j 数据再传导的模式
  //触发底部广告参数时 设置相应的展示方法
  async w(e){let a=await k.g.g(e);if(a.data[0][z.g]){let b=a.data[0][z.g];b[8]?this.setData({n:true,w:b,i:[...this.data.s.d]}):this.setData({w:b,i:[...b[0]]})}},

  onLoad(options){    
    let a = z.s.filter(o=>o.a==options.o)[0],b = [603,101,102,103]//过滤部分不同类型
    this.setData({s:a,t:b.indexOf(a.a)<0})//t为过滤后的值给组件
    //当参数为daoj.net时不展示底部 图片下文字更替 否则触发 w 函数
    z.g=='daoj.net'?this.setData({r:1,i:[...'一个值得收藏的小工具']}):z.g?this.w(z.g):''
    this.r();this.k()
  },
  
  //用户点击右上角分享朋友圈
  onShareTimeline(){return{title:this.data.s.b,url:'o/o/a?o=' + this.data.s.a}},
  //用户点击右上角分享
  onShareAppMessage(){return{title:this.data.s.b,url:'o/o/a?o=' + this.data.s.a,imageUrl:'https://pic.kuaizhan.com/g3/21/b8/d9ca-94c9-47ac-bde7-c54a1ad5461a26'}}
})