// 底部弹出说明组件
const k = getApp()
Component({
  options: {addGlobalClass: true},
  properties: {    
    t: {type: Number, observer(v) {
      switch (v){       
        case 513: this.setData({z:'解梦说明',
                   n:['请不要输入整句的梦境，只需输入印象最深的物品或动作。比如，我梦到了很多个月亮在火中，那么只需要输入“月亮”作为搜索关键词。',
                   '搜索中使用的语音搜索功能，由于1-3个字会出现同音字的判断异常，因此，敬请尽量使用文字输入。',
                   '此搜索引用网络上的数据库内容，相对内容比较笼统。由于男女区别，时间差异等原因，梦境所代表的含义各不相同，如果，网络数据无法满足你的解梦需求，敬请关注“归藏易文化”与我们联系。'
                  ]
                  })      
            break;
        default:
            break;        
      }
    }}
  },
  data: {},
  methods: {
    y() {this.triggerEvent('y')},//将控件数组清零回传引用页并回传至 X
  }
})