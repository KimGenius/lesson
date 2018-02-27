$(function () {
  var TIMER = 1000
  var imageCount = 0
  var imageChildren = $(".slide-wrap ul").children()
  setInterval(function () {
    $('.slide-wrap ul').css('left', imageCount * -60 + 'vw')
    imageCount++
    if (imageCount === imageChildren.length) {
      imageCount = 0
    }
  }, TIMER)
})