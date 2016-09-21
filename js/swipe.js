function Swipe (container, className) {
  //获取背景图
  var element = container.find(className)
  //滑动对象
  var swipe = {}
  //获取容器尺寸
  var height = container.height()
  var width = container.width()
  //设定背景图尺寸 可能会加载后改变图片尺寸因为是计算的，之后再讨论（也可以嵌套进模板在模板里渲染
  element.css({
    height: height + 'px',
  })
  //动画移动
  swipe.scrollTo = function(x, speed) {
    element.css({
      'right': x + 'px',
      'transition-timing-function' : 'linear',
      'transition-duration' : speed + 'ms',
      'transform' : 'translate3d('+x+'px, 0px, 0px)'
    })
  }
  return swipe
}
