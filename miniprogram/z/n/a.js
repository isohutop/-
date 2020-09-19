// 随机获取内容组件
const k = require('../../u/k.js')
Component({
  options: {addGlobalClass: true},
  properties: {
    p: Array,
    q: Array,
    o:Number,
    t:Boolean //榜单数字
  },
  
  methods: {
    f(e){let a = e.currentTarget.dataset.i,
      b =this.data.o,
      c = [308,310,406,301,302,104],
      y = this.data.p[a],
      x = this.data.q[a]      
      c.indexOf(b)>-1&&k.d.f(x.content)
      switch(b){
        case 411: k.d.f(y.replace(/\n|<[^>]+>/g,''))
        break;
        case 105: k.d.f(x.title+x.content)
        break;
        case 307: k.d.f(x.dialogue)
        break;      
        case 603: k.d.f(x.title)
            break;
        default: k.d.f(y)
        break;  
      }  
    }

  }
})