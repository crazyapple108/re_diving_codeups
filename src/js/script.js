
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
    loop: true,
    // loopAdditionalSlides: 1,
    // freeMode: true, // 前後のスライドで止まらずにスライド
    grabCursor: true, // カーソルを置いたときに指のカーソルを表示
    navigation: {
      nextEl: '.swiper-campaign-button-prev',
      prevEl: '.swiper-campaign-button-next',
    },
    breakpoints: {
      768: {
        slidesPerView: "3.5",
        spaceBetween: 40,
        width: 1260,
      }
    },
  });

  function fadeAnime(){
    $('.js-mask').each(function(){ //bgLRextendTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('mask-lr');// 画面内に入ったらbgLRextendというクラス名を追記
      }else{
        $(this).removeClass('mask-lr');// 画面外に出たらbgLRextendというクラス名を外す
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

  // /******************************************
  // init
  // ******************************************/
  // var startPos = 0,
  //   winScrollTop = 0;
  // /******************************************
  // window scroll
  // ******************************************/
  // // $(window).on('scroll', function () {
  // //   winScrollTop = $(this).scrollTop();
  // //   if (winScrollTop >= startPos) {
  // //     if (winScrollTop >= 200) {
  // //       $('.header').addClass('hide');
  // //     }
  // //   } else {
  // //     $('.header').removeClass('hide');
  // //   }
  // //   startPos = winScrollTop;
  // // });
  // var trigger = new ScrollTrigger["default"]();
  // trigger.add('[data-trigger]');

  // var isAnimated = false;

  // function delayScrollAnime() {
  //   var time = 0.2; //遅延時間を増やす秒数の値
  //   var value = time;
  //   $('.delay-scroll').each(function () {
  //     var parent = this; //親要素を取得
  //     var elemPos = $(this).offset().top; //要素の位置まで来たら
  //     var scroll = $(window).scrollTop(); //スクロール値を取得
  //     var windowHeight = $(window).height(); //画面の高さを取得
  //     var childs = $(this).children(); //子要素を取得

  //     // アニメーションが既に実行された場合はスキップ
  //   if (isAnimated) {
  //     return;
  //   }
  //     if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
  //       //指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
  //       $(childs).each(function () {
  //         if (!$(this).hasClass("js-fade-up")) {
  //           //アニメーションのクラス名が指定されているかどうかをチェック
  //           $(parent).addClass("play"); //親要素にクラス名playを追加
  //           $(this).css("animation-delay", value + "s"); //アニメーション遅延のCSS animation-delayを追加し
  //           $(this).addClass("js-fade-up"); //アニメーションのクラス名を追加
  //           value = value + time; //delay時間を増加させる
  //           //全ての処理を終わったらplayを外す
  //           var index = $(childs).index(this);
  //           if (childs.length - 1 == index) {
  //             $(parent).removeClass("play");
  //           }
            
  //         }
  //       });
  //       isAnimated = true;
  //     } else {
  //       $(childs).removeClass("js-fade-up"); //アニメーションのクラス名を削除
  //       value = time; //delay初期値の数値に戻す
  //     }
  //   });
  // }

  // // 画面をスクロールをしたら動かしたい場合の記述
  // $(window).scroll(function () {
  //   delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  // }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  // $(window).on('load', function () {
  //   delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  // }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

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

});
