
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  var swiper = new Swiper(".js-mv-swiper", {
    pagination: {
      el: ".js-works-pagination"
    },
    clickable: true,
    loop: true,
    loopAdditionalSlides: 1,
    // autoplay: {
    //   delay: 3000
    // }
  });

  const mySwiper = new Swiper('.swiper-campaign', {
    slidesPerView: '1.2',
    spaceBetween: 24,
    // freeMode: true, // 前後のスライドで止まらずにスライド
    grabCursor: true, // カーソルを置いたときに指のカーソルを表示
    navigation: {
      nextEl: '.card02 .swiper-button-next',
      prevEl: '.card02 .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: "3.5",
        spaceBetween: 40,
        width: 1260,
      }
    },
  });

  // var swiper = new Swiper(".swiper-campaign", {
  //   slidesPerView: '1.3', // スライド数
  //   spaceBetween: 24,
  //   freeMode: true, // 前後のスライドで止まらずにスライド
  //   grabCursor: true, // カーソルを置いたときに指のカーソルを表示
  //   // centeredSlides: true,
  //   loop: true,
  //   loopAdditionalSlides: 2,
  //   // autoplay: {
  //   //     delay: 3000,
  //   //     disableOnInteraction:false,
  //   //   },
  //   navigation: {
  //     nextEl: ".swiper-campaign .swiper-button-next",
  //     prevEl: ".swiper-campaign .swiper-button-prev",
  //   },
  //   breakpoints: {
  //     768:{
  //       slidesPerView: "3.4",
  //       spaceBetween: 40,
  //       width: 1260,
  //     }
  //   },
  // });

});
