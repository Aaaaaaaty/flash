
function Animals (animals, result, timer) {
  setTimeout(function() {
    var num = result
    var greatNum = []
    var quitNum = []
    var hash = {}
    for(var i = 0; i < num.length; i++) {
      hash[num[i]] = true
      animals.map(function(item, index){
        if(num[i] === item.index) {
          greatNum.push(item)
        }
      })
    }
    animals.map(function(item, index){
      if(!hash[item.index]) {
        quitNum.push(item)
      }
    })
    animals.map(function(item, index){
      var animal = $('#' + item.name)
      setTimeout(function(){
        animal.css({
          'right': -index - 30 + '%',
          'transition-timing-function' : 'linear',
          'transition-duration' : 20000 - index * 100 + 'ms',
          'transform' : 'translate3d(0px, 0px, 0px);scale(0.8)'
        })
      },2000)
    })
    greatNum.map(function(item, index){
      var animal = $('#' + item.name)
      setTimeout(function(){
        animal.css({
          'right': 70 - index * 10 + '%',
          'top': 72+ '%',
          'transition-timing-function' : 'linear',
          'transition-duration' : 2000 + 'ms',
          'transform' : 'translate3d(0px, 0px, 0px);scale(0.8)'
        })
        setTimeout(function() {
          animal.addClass('jump')
        }, 2000)
      }, index * 2000 + 2000)
    })

    setTimeout(function () {
      greatNum.map(function(item, index){
        
      }
    }, 20000)

  }, timer)
}
