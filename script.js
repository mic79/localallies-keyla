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

// VCARD
var vcardLink = document.getElementById("vcard-link");
vcardLink.addEventListener("click", function () {
  // Get the contact information from the website
  var contact = {
    name: "Keyla Nogueira",
    website: "https://localallies.com/",
    email: "keyla@localallies.com",
    company: "Local Allies;International Business Development",
    photo: "https://keyla.localallies.com/keyla.jpg"
  };
  // create a vcard file
  var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nURL:" + contact.website + "\nEMAIL:" + contact.email + "\nORG:" contact.company + "\nPHOTO;MEDIATYPE=image/jpeg:" + "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;
  
  newLink.click();
});
// END VCARD
