
function Animals (animals, result, timer) {
  setTimeout(function() {
    var num = result
    var greatNum = []
    var hash = {}
    var appendNum = function(index, num) {
      var child = $('.train-gif')
      if(index === 0) {
        child.append('<div class="number one"><div class="num-icon">'+num+'</div></div>')
      } else if(index === 1) {
        child.append('<div class="number two"><div class="num-icon">'+num+'</div></div>')
      } else if(index === 2) {
        child.append('<div class="number three"><div class="num-icon">'+num+'</div></div>')
      } else if(index === 3) {
        child.append('<div class="number four"><div class="num-icon">'+num+'</div></div>')
      } else if(index === 4) {
        child.append('<div class="number five"><div class="num-icon">'+num+'</div></div>')
      } else if(index === 5) {
        child.append('<div class="number six"><div class="num-icon">'+num+'</div></div>')
      } else if(index === 6) {
        child.append('<div class="number seven"><div class="num-icon">'+num+'</div></div>')
      } else if(index === 7) {
        child.append('<div class="number eight"><div class="num-icon">'+num+'</div></div>')
      }
    }
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
          'right': 67 - index * 10 + '%',
          'top': 60 + '%',
          'transition-timing-function' : 'linear',
          'transition-duration' : 2000 + 'ms',
          'transform' : 'translate3d(0px, 0px, 0px);scale(0.8)'
        })
        setTimeout(function() {
          appendNum(index, item.index)
        }, 2000)
        setTimeout(function() {
          animal.addClass('jump')
          animal.css({
            background: 'none'
          })
          animal.addClass('new-'+item.name)

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
          'transform' : 'translate3d(0px, 0px, 0px);scale(1.0)'
        })
        switch(index)
        {
          case 0:
            animal.css({
              'right': 67 + '%',
              'top': 7 + '%'
            })
            break
          case 1:
            animal.css({
              'right': 47 + '%',
              'top': 7 + '%'
            })
            break
          case 2:
            animal.css({
              'right': 27 + '%',
              'top': 7 + '%'
            })
            break
          case 3:
            animal.css({
              'right': 7 + '%',
              'top': 7 + '%'
            })
            break
          case 4:
            animal.css({
              'right': 67 + '%',
              'top': 46 + '%'
            })
            break
          case 5:
            animal.css({
              'right': 47 + '%',
              'top': 46 + '%'
            })
            break
          case 6:
            animal.css({
              'right': 27 + '%',
              'top': 46 + '%'
            })
            break
          case 7:
            animal.css({
              'right': 7 + '%',
              'top': 46 + '%'
            })
            break
          default:
            break
        }
      })
    }, 20000)

  }, timer)
}
