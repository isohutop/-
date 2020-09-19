//更新日志
//此页面为展示更新 以及 专用的跳转页面
// 正常打开此页面需要 使用 参数 o=1
const z= getApp().z
Page({
  data: {
    p:[//页面展示的数据
      {p:'2020-08-18 更新',
       q:['新增小工具--猜灯谜']},
      {p:'2020-08-02 更新',
       q:['新增小工具--经典台词、名人名言、古代情诗、古籍名句、小段子、脑筋急转弯、网易云热评、神回复、抖音热点榜、网络搜索热点、微博热搜榜']},
      {p:'2020-07-29 更新',
       q:['新增小工具--成语典故、精选宋词、全唐诗集']},
       {p:'2020-07-28 更新',
       q:['★ 上线系列小工具']}
    ]
  },
  onLoad(options){
    let {o,l} = options    
    if(o){this.setData({o});wx.setNavigationBarTitle({title: '更新日志'})
    }else if(l){z.h[4]=l;wx.reLaunch({url:'o'})//跳转首页 的指定tap
    }else{z.h[1]=1;wx.reLaunch({url:'o'})}//跳转到收藏页    
  },
  onShareTimeline(){return{title:'更新日志',url:'o/k?o=1'}},  
  onShareAppMessage(){return{title:'更新日志',url:'o/k?o=1'}}
})