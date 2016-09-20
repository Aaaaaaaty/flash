
function Animals (animals, showTime, lotteryTime) {
  //获取背景height,top
  var getBgValue = function(className) {
    var element = $(className)
    return {
      height: element.height(),
      width: element.width(),
      top: element.position().top
    }
  }
  var pathY = (function() {
    var data = getBgValue('.content-wrap')
    return data.top + data.height / 2
  })()
  animals.map(function(item) {
    var data = getBgValue('.content-wrap')
    var name = item.name
    var startX = item.startX * data.width
    var startY = item.startY * data.height
    var endX = item.endX * data.width
    var endY = item.endY * data.height
    var startTime = item.startTime
    var speed = showTime - startTime //持续时间 和 出场时间相加相等

    var animal = $(name)
      this.timer = setTimeout(function(){

        animal.css({
          'display': 'block',
          'right': startX,
          'top': startY
        })

        animal.transition({
          'right': endX + 'px',
          'top': endY + 'px'
        }, speed, 'linear')

      }, startTime)
  })
}

// var an = $('#dog')
// var anHeight = an.height()
// an.css({
//   top: pathY - anHeight + 25
// })
// var anTop = an.position().top + 130

//设置动物位置
// var getAnimal = function(animals) {
//   var animal = $(animals)
// }
//多种动物出场动画，每个动物代表一个数字

//开奖时，随机抽取8个数，这8个数代表的动物的路径需要依次超前
