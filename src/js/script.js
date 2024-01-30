
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(".sp-menu__hamburger").click(function () {
    // ハンバーガーボタンclass付け外し
    $(this).toggleClass("active");
    // メニューにclass付け外し
    // $(".drawer__nav").toggleClass("active");
    // bodyにclass付け外し
    $("body").toggleClass("active");
    $(".header__inner").toggleClass("active");
  });

  var swiper = new Swiper("#js-swiper-mv", {
    pagination: {
      el: ".js-works-pagination"
    },
    clickable: true,
    loop: true,
    effect: 'fade',
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    allowTouchMove: false,
  });

  const mySwiper = new Swiper('#js-swiper-campaign', {
    direction: 'horizontal',
    spaceBetween: 24,
    breakpoints: {
      768: {
        spaceBetween: 40,
      }
    },
    slidesPerView: 'auto',
    loop: true,
    freeMode: true,
    freeModeSticky:true,
    grabCursor: true, // カーソルを置いたときに指のカーソルを表示
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-campaign-button-prev',
      prevEl: '.swiper-campaign-button-next',
    },
  });

  function fadeAnime(){
    $('.js-mask').each(function(){ //bgLRextendTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('mask__lr');// 画面内に入ったらbgLRextendというクラス名を追記
      }else{
        $(this).removeClass('mask__lr');// 画面外に出たらbgLRextendというクラス名を外す
      }
    });
    $('.js-mask__inner').each(function(){ //bgappearTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('mask__inner');// 画面内に入ったらbgappearというクラス名を追記
      }else{
        $(this).removeClass('mask__inner');// 画面外に出たらbgappearというクラス名を外す
      }
    });
  }
  // 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

   //フッター手前で止まるボタン
$(function() {
  // 変数にクラスを入れる
  var btn = $('.to-top');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  
  //フッターの手前でボタンを止める
  $(window).on('load scroll', function(){
    var height = $(document).height(), //ドキュメントの高さ
        position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
        footer = $('footer').height(); //フッターの高さ
    if ( height - position  < footer ){
      btn.addClass('absolute');
    } else {
      btn.removeClass('absolute');
    }
  });
});


$(".js-modal-open").each(function () {
  $(this).on("click", function (e) {
      e.preventDefault();
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      $("#header").hide();
      $("html,body").css("overflow", "hidden");
  });
});

$(".js-modal-close").on("click", function () {
  $(".js-modal").fadeOut();
  $("#header").show();
  $("html,body").css("overflow", "initial");
});

$(".js-modal").on("click", function (e) {
  e.stopPropagation();
});

$('.js-tab-menu').on('click', function () {
  $('.js-tab-menu').removeClass('is-active');
  $('.js-tab-content').removeClass('is-active');
  $(this).addClass('is-active');
  var number = $(this).data("number");
  $('#' + number).addClass('is-active');
});

});
