//时间处理 时间处理为点击取消提示后方可见
//此处原为农历处理， 大多数的小程序用不上 因此，此部分代码略过
//请另行安排 当用户关闭提示后的文字展示

na = (y, m, d) => [y, m, d+1].map(n =>n.toString()).join('-')

module.exports = {
  b:na
}