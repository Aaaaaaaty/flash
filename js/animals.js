
function Animals (animals, result, timer) {
  setTimeout(function() {
    var num = result
    var greatNum = []
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
          'right': 65 - index * 10 + '%',
          'top': 60 + '%',
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
        var animal = $('#' + item.name)
        var show = $('#show')
        show.addClass('show')
        animal.css({
          'z-index': 100,
          'transition-timing-function' : 'linear',
          'transition-duration' : 500 + 'ms',
          'transform' : 'translate3d(0px, 0px, 0px);scale(1.2)'
        })
        switch(index)
        {
          case 0:
            animal.css({
              'right': 75 + '%',
              'top': 10 + '%'
            })
            break
          case 1:
            animal.css({
              'right': 55 + '%',
              'top': 10 + '%'
            })
            break
          case 2:
            animal.css({
              'right': 35 + '%',
              'top': 10 + '%'
            })
            break
          case 3:
            animal.css({
              'right': 15 + '%',
              'top': 10 + '%'
            })
            break
          case 4:
            animal.css({
              'right': 75 + '%',
              'top': 52 + '%'
            })
            break
          case 5:
            animal.css({
              'right': 55 + '%',
              'top': 52 + '%'
            })
            break
          case 6:
            animal.css({
              'right': 35 + '%',
              'top': 52 + '%'
            })
            break
          case 7:
            animal.css({
              'right': 15 + '%',
              'top': 52 + '%'
            })
            break
          default:
            break
        }
      })
    }, 20000)

  }, timer)
}
