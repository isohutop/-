const k = require('../../u/k.js'),z= getApp().z
Component({
  properties: {n:{type:Array,observer(v){v&&this.setData({s:v})}}},
  methods: {
    p(e){let f = e.currentTarget.dataset;k.d.g(f.u,f.a)},
    q(e){let a = e.currentTarget.dataset.a;var that = this
      wx.showModal({title: '提醒',content: '点击确认后\r\n【' + z.s.filter(o=>o.a==a)[0].b + '】\r\n将从收藏中移除',success(v){v.confirm&&that.o(a)}})     
    },
    o(a){let s =e=>{e.c=0;return e};z.s=z.s.map(o=>o.a==a?s(o):o);this.triggerEvent('r');z.z.splice(z.z.findIndex(o=>o==a),1);k.d.z(z.z);k.g.d(a)}
  }
})