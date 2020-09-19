const k = require('../../u/k.js')
Component({
  options: {addGlobalClass: true},
  properties: {
    n: {type: Object, observer(v) {      
      //console.log(v)      
      if(v){
      switch(this.data.o){
        case 513:this.setData({m:v})   
          break;
        case 515:this.setData({y:v})
            break;  
        case 405:this.setData({y:v})
            break;
        case 508:this.setData({x:v})
            break;
        case 509:this.setData({b:v})
            break;    
        case 510:this.setData({r:v})
            break; 
        case 309:this.setData({z:v})
            break;         
        case 601:this.setData({x:v})
            break;
        case 507:this.setData({m:v})
            break;  
        case 503:
             v.map(o=>{let a = o.type;o.type = a==0?"可回收":a==1?"有害垃圾":a==2?"湿垃圾":"干垃圾";return o})
          this.setData({r:v})
          console.log(v)
            break;           
      }
      }  
                 
    }},
    a:Number,
    o:Number,
    i: Array
  },
  //attached: function attached() {this.setData({m:wx.getStorageSync('s')});console.log(this.data.m)},
  data: {},
  methods: {
    l(){let a = this.data.y;
      switch(this.data.o){
        case '515':k.d.f(a.cnresult+a.enresult)
            break;  
        case '405':k.d.f(a[1])
            break;  
      }
      
      }

  }
})