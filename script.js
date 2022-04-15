// QR
var swipercards = new Swiper('.swiper-container.swipercards', {
  pagination: '.swipercards .swiper-pagination',
  effect: 'flip',
  loop: true,
  grabCursor: true,
  paginationClickable: true,
  onTransitionStart: function(swiper) {
    $('.photo').removeClass('selected');
  }
});
var swiperscrollbar = new Swiper('.swiper-container.swiperscrollbar', {
        scrollbar: '.swiperscrollbar .swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
});
$('.swiper-container.swipercards > .swiper-wrapper > .swiper-slide > a').bind('click', function() {
  if ($(this).attr('target') == '_blank') {
    window.open($(this).attr('href'), '_blank');
  } else {
    window.open($(this).attr('href'), '_self');
  }
});
$('.link').on('click', function() {
  swipercards.slideTo($(this).index() + 1);
});
$('.qrcode').qrcode("https://keyla.localallies.com");
$('.photo').on('click', function() {
  $(this).toggleClass('selected');
});
// END QR