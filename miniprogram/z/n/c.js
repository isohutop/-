const k = require('../../u/k.js'),z= getApp().z,g=e=>e.currentTarget.dataset.d,h=e=>e.detail.value
Component({
  options: {addGlobalClass: true},
  properties: {    
    o:{type:Number,observer(v){v&&this.s(v)}},
    w:{type:Number,observer(v){v&&this.w()}},
    t:{type:Number,observer(v){v&&this.s(this.data.o)}}},
  data: {p:0,j:[],q:[],n:"在此作答后，可查看正确的答案和解释。"},
  methods: {
    a(e){this.setData({q:this.data.q.map(o=>{e.currentTarget.dataset.d==o.d?o.n='':'';return o})}) },
    b(e){this.c(e)},
    d(e){this.data.q.forEach(o=>{if(g(e)==o.d)h(e)==o.answer&&this.c(e)})},    
    c(e){this.setData({q:this.data.q.map(o=>{if(g(e)==o.d){let a = h(e);a?o.n=a:o.n=this.data.n;o.f=a==o.answer?2:a?1:0};return o})})},
    
    async s(e){
      let a = await k.r(e).then(o=>o.data.code == 200?o.data:o.data.code).catch()
      //console.log(a)
      if(a.code==200){
        var f = {c:''}, s =a.newslist[0]
        switch(e){
          case 701:f.c=s.content+s.reason
            break;
          case 702:f.c=s.riddle+s.description
            break;
          case 703:f.c=s.question+s.source
            break;
          case 705:f.c=s.title+s.analytic
            break;
          default:return
        }      
        console.log(f.c)
        if(z.c==1154){
          switch(e){            
            default:s.n=this.data.n;var p = s.d = this.data.p+1;this.setData({p});this.q(s)
              break
            }   
        }else{//过审
        let d = await k.g.h(f)          
        if(d.errCode==0){
          switch(e){
            default:s.n=this.data.n;var p = s.d = this.data.p+1;this.setData({p});this.q(s)
            break
          }   
          }else{this.s(this.data.o)}//内容包含违禁词汇
        }
      }else{k.m.b(a)}//服务器无回馈 
         
    },
  
    
    q(e){this.data.j.unshift(e);this.setData({q:this.data.j});this.triggerEvent('s')},
    w(){let j =this.data.j.map(o=>{delete o.n,o.f,o.d;return o});k.g.f(this.data.o,j)},

    f(e){let a = e.currentTarget.dataset.i,s = this.data.q.filter(o=>o.d==a)[0],b=' 谜底解释 '
    console.log(s.content)
      switch(this.data.o){
        case 701: k.d.f(s.content+b+s.reason)
        break;
        case 703: k.d.f(s.question+b+s.answer+'出处'+s.source)
        break;
        default: k.d.f(s.riddle+b+s.description)
        break  
      }  
    }

  }
})