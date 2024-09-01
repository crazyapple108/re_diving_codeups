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

let accordionDetails = '.js-accordion';
let accordionSummary = '.js-accordion__title';
let accordionContent = '.js-accordion__content';
let speed = 200;

$(accordionSummary).each(function (){
    $(this).on("click",function (event){
        // デフォルトの挙動を無効化
        event.preventDefault();
        if($(this).parent($(accordionDetails)).attr("open")){
            // アコーディオンを閉じるときの処理
            $(this).nextAll($(accordionContent)).slideUp(speed,function (){
                // アニメーションの完了後にopen属性を取り除く
                $(this).parent($(accordionDetails)).removeAttr("open");
                // display:none;を消して、ページ内検索にヒットするようにする
                $(this).show();
            });
        }else{
            // アコーディオンを開くときの処理
            // open属性を付ける
            $(this).parent($(accordionDetails)).attr("open","true");
            // いったんdisplay:none;してからslideDownで開く
            $(this).nextAll($(accordionContent)).hide().slideDown(speed);
        }
    })
})
    
$(function () {
  // 最初のコンテンツは表示
  $(".faq-list__item .faq-list__item-answer").css("display", "block");
  // 最初の矢印は開いた時の状態に
  $(".faq-list__item .js-faq-question").addClass("is-open");
});

$('.js-faq-question').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('is-open');
});

$("#check").change(function () {
  // チェックが入っていたら有効化
  if ($(this).is(":checked")) {
    // ボタンを有効化
    $("#button").prop("disabled", false);
    // 有効化したらボタンの色を変える
    $("#button").css({
      "background-color": "#fb8a00",
    });
  } else {
    // ボタンを無効化
    $("#button").prop("disabled", true);
    // 無効化したらボタンの色を戻す
    $("#button").css({
      "background-color": "#c1c1c1",
    });
  }
});

/* ========================================
  // フォームバリデーション
  ======================================== */
  function formValidation() {
    /* バリデーション関数
    ------------------------------ */
    function validateField(field, regex, errorMessage) {
      if (!regex.test($(field).val())) {
        $(field).addClass("is-error");
        $(field).next(".error-message").remove();
        $(field).after('<p class="error-message">' + errorMessage + "</p>");
        return false;
      } else {
        $(field).removeClass("is-error");
        $(field).next(".error-message").remove();
        return true;
      }
    }

    /* お問い合わせ項目のバリデーション関数
    ------------------------------ */
    function validateCheckboxGroup(groupName, errorMessage) {
      if ($('input[name="' + groupName + '"]:checked').length === 0) {
        let errorContainer = $("#checkboxError");
        if (errorContainer.length === 0) {
          $(".form__check").append(
            '<p id="checkboxError" class="error-message">' +
              errorMessage +
              "</p>"
          );
        }
        return false;
      } else {
        $("#checkboxError").remove();
        return true;
      }
    }

    /* 個人情報同意バリデーション関数
    ------------------------------ */
    function validateConsentCheckbox(errorMessage) {
      if (!$("#consent").is(":checked")) {
        let errorContainer = $("#consentError");
        if (errorContainer.length === 0) {
          $("#consent").addClass("is-error");
          $(".form__privacy").append(
            '<p id="consentError" class="error-message"><span>個人情報取り扱いに</span><span>同意する必要があります。</span></p>'
          );
        }
        return false;
      } else {
        $("#consent").removeClass("is-error");
        $("#consentError").remove();
        return true;
      }
    }

    /* リアルタイムバリデーション
    ------------------------------ */
    $("#name, #email, #phone, #message, #consent").on(
      "input change",
      function () {
        switch (this.id) {
          case "name":
            validateField(
              this,
              /^[ぁ-んァ-ヶー一-龯]+$/,
              "有効な名前を入力してください。"
            );
            break;
          case "email":
            validateField(
              this,
              /^[^@]+@[^@]+\.[^@]+$/,
              "有効なメールアドレスを入力してください。"
            );
            break;
          case "phone":
            validateField(
              this,
              /^(\d{2,4}-\d{2,4}-\d{4}|\d{10,11})$/,
              "有効な電話番号を入力してください。"
            );
            break;
          case "message":
            validateField(this, /.+/, "メッセージを入力してください。");
            break;
          case "consent":
            validateConsentCheckbox();
            break;
        }
      }
    );

    /* チェックボックスのリアルタイムバリデーション
  ------------------------------ */
    $('input[name="category"]').on("change", function () {
      validateCheckboxGroup(
        "category",
        "お問い合わせ項目を選択してください。"
      );
    });

    /* 送信時のバリデーション
    ------------------------------ */
    $("#contact-form").submit(function (e) {
      let isValid = true;
      isValid &= validateField(
        "#name",
        /^[ぁ-んァ-ヶー一-龯]+$/,
        "有効な名前を入力してください。"
      );
      isValid &= validateField(
        "#email",
        /^[^@]+@[^@]+\.[^@]+$/,
        "有効なメールアドレスを入力してください。"
      );
      isValid &= validateField(
        "#phone",
        /^(\d{2,4}-\d{2,4}-\d{4}|\d{10,11})/,
        "有効な電話番号を入力してください。"
      );
      isValid &= validateCheckboxGroup(
        "category",
        "お問い合わせ項目を選択してください。"
      );
      isValid &= validateField(
        "#message",
        /.+/,
        "メッセージを入力してください。"
      );
      isValid &= validateConsentCheckbox();

      if (!isValid) {
        e.preventDefault();
        let errorContainer = $("#formError");
        if (errorContainer.length === 0) {
          $("#contact-form").prepend(
            '<p id="formError" class="error-message"><span class="error-message-text">※必須項目が入力されていません。<span class="error-message-text">入力してください。</p>'
          );
        }
      } else {
        $("#formError").remove();
      }
    });
  }

  formValidation();

  //インフォーメーションタブ制御
 // URLのクエリパラメーターを取得
const urlParams = new URLSearchParams(window.location.search);
const tabParam = urlParams.get('tab');

// タブメニューとコンテンツの要素を取得
const tabMenuItems = document.querySelectorAll('.tab__menu-item');
const tabContentItems = document.querySelectorAll('.tab__content-item');

// タブを切り替える関数
function showTab(tabId) {
  // 既存のアクティブなタブをリセット
  tabMenuItems.forEach(item => item.classList.remove('is-active'));
  tabContentItems.forEach(item => item.classList.remove('is-active'));

  // 指定されたタブをアクティブに設定
  const targetTabMenu = document.querySelector(`.tab__menu-item[data-number="${tabId}"]`);
  const targetTabContent = document.querySelector(`#${tabId}`);

  if (targetTabMenu && targetTabContent) {
    targetTabMenu.classList.add('is-active');
    targetTabContent.classList.add('is-active');
  }
}

// 初期表示時にクエリパラメーターに基づいてタブを切り替える
window.addEventListener('load', () => {
  if (tabParam) {
    showTab(tabParam);
  } else {
    showTab('tab01'); // 初期値はタブ01
  }
});
});