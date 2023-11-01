'use strict';


$(function(){
  $('.modal_open').on('click', function(){
    let target = $(this).data('modal-btn');
    let modal = document.getElementById(target)
    //fadeInはdisplay:noneになっている要素を表示する命令、()内は表示に要する時間を指定できる。
    $(modal).fadeIn();
  });
  $('.modal_close').on('click' , function(){
    $('.modal_content').fadeOut();
  });

});


// $(function(){
//   const modal = $('.modal_content');
//   // const overlay = $('.modal_overlay');
//   // 「クリックしたらモーダル表示」をクリックしたらモーダルを表示
//   $('.modal_open').on('click', function(){
//     modal.removeClass("hidden");
//     // overlay.addClass("open");
//   });
//   // 「閉じる」をクリックしたらモーダルを非表示
//   $('.modal_close').on('click', function(){
//     modal.addClass("hidden");
//     // overlay.removeClass("open");
//   });
//   // オーバーレイをクリックしたら非表示
//   overlay.on('click', function(){
//     modal.removeClass("open");
//     // overlay.removeClass("open");
//   });
// });

