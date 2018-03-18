$(function () {
  var TIMER = 1000
  var imageCount = 0
  var imageChildren = $(".slide-wrap ul").children()

  var slideInterval = setInterval(function () {
    slideImage()
  }, TIMER)

  // click -> hover로 하면 임블리처럼 효과가 변함
  // $('.slide-pointer-area > span').click(function () {
  //   $('.slide-pointer-area > span').css('background-color', '#e4c9a6')
  //   $(this).css('background-color', '#222222')
  //   imageCount = $(this).index()
  //   slideImage()
  //   clearInterval(slideInterval)
  //   slideInterval = setInterval(function () {
  //     slideImage()
  //   }, TIMER)
  // })
  $('.index-wrap').html('1 / ' + imageChildren.length)

  function slideImage() {
    $('.slide-wrap ul').css('left', imageCount * -60 + 'vw')
    $('.slide-pointer-area > span').css('background-color', '#e4c9a6')
    $('.slide-pointer-area > span:nth-of-type(' + (++imageCount) + ')').css('background-color', '#222222')
    $('.index-wrap').html(imageCount + ' / ' + imageChildren.length)
    if (imageCount === imageChildren.length) {
      imageCount = 0
    }
  }

  // $('.slide-wrap img').click(function () {¡
})