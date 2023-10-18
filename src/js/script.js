
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  const mySwiper = new Swiper('.card02 .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
      el: '.card02 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.card02 .swiper-button-next',
      prevEl: '.card02 .swiper-button-prev',
    },
    breakpoints: {
      1025: {
        spaceBetween: 32,
      }
    },
  });

});
