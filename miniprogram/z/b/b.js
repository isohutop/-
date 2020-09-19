const k = require('../../u/k.js'),z=getApp().z
Component({options: {addGlobalClass: true}, 
  properties: {w: {type:Array,observer(w){
    if(w[2]){this.setData({n:w})
    }else{this.setData({n:['','','归藏易文化','执古之道以御今之有！']})}
  }},b:String,g:{type: Function},h:{type: Function}},  
  data:{m:{buttonText: "中文",lang: "zh_CN",buttonType: 'normal'}},
  attached(){getCurrentPages().length>1&&this.setData({e:true})}, 
  methods: {
    n(){let a = this.data.w;wx.navigateToMiniProgram({appId:a[5],path:a[6]?a[6]:''})},
    m(){wx.navigateToMiniProgram({appId:'wx23c2756280ba0cb6'})},
    w(){wx.navigateToMiniProgram({appId:this.data.w[5]})},
    g(){this.properties.g()},
    h(){this.properties.h()},
    r(){this.data.e? wx.navigateBack() :wx.reLaunch({url: '/o/o'})},
    l(){k.m.a()}//点击提示收藏，暂时不用
  }
});