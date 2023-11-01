'use strict';


//chara01.htmlのスクロール
$(function ($) {
  $('#tottoriicon').on('click',function(){
      const tottoriTop = $('#tottori').offset().top;
      $("html").animate({scrollTop: tottoriTop});
  });
});

$(function ($) {
  $('#iwamiicon').on('click',function(){
      const iwamiTop = $('#iwami').offset().top;
      $("html").animate({scrollTop: iwamiTop});
  });
});

$(function ($) {
  $('#yazuicon').on('click',function(){
      const yazuTop = $('#yazu').offset().top;
      $("html").animate({scrollTop: yazuTop});
  });
});

$(function ($) {
  $('#wakasaicon').on('click',function(){
      const wakasaTop = $('#wakasa').offset().top;
      $("html").animate({scrollTop: wakasaTop});
  });
});

$(function ($) {
  $('#tizuicon').on('click',function(){
      const tizuTop = $('#tizu').offset().top;
      $("html").animate({scrollTop: tizuTop});
  });
});


//chara06.htmlのスクロール
$(function ($) {
  $('#kurayoshiicon').on('click',function(){
      const kurayoshiTop = $('#kurayoshi').offset().top;
      $("html").animate({scrollTop: kurayoshiTop});
  });
});

$(function ($) {
  $('#misasaicon').on('click',function(){
      const misasaTop = $('#misasa').offset().top;
      $("html").animate({scrollTop: misasaTop});
  });
});

$(function ($) {
  $('#yurihamaicon').on('click',function(){
      const yurihamaTop = $('#yurihama').offset().top;
      $("html").animate({scrollTop: yurihamaTop});
  });
});

$(function ($) {
  $('#kotouraicon').on('click',function(){
      const kotouraTop = $('#kotoura').offset().top;
      $("html").animate({scrollTop: kotouraTop});
  });
});

$(function ($) {
  $('#hokueiicon').on('click',function(){
      const hokueiTop = $('#hokuei').offset().top;
      $("html").animate({scrollTop: hokueiTop});
  });
});


//chara11.htmlのスクロール
$(function ($) {
  $('#yonagoicon').on('click',function(){
      const yonagoTop = $('#yonago').offset().top;
      $("html").animate({scrollTop: yonagoTop});
  });
});

$(function ($) {
  $('#sakaiminatoicon').on('click',function(){
      const sakaiminatoTop = $('#sakaiminato').offset().top;
      $("html").animate({scrollTop: sakaiminatoTop});
  });
});

$(function ($) {
  $('#hieduicon').on('click',function(){
      const hieduTop = $('#hiedu').offset().top;
      $("html").animate({scrollTop: hieduTop});
  });
});

$(function ($) {
  $('#daisenicon').on('click',function(){
      const daisenTop = $('#daisen').offset().top;
      $("html").animate({scrollTop: daisenTop});
  });
});

$(function ($) {
  $('#nanbuicon').on('click',function(){
      const nanbuTop = $('#nanbu').offset().top;
      $("html").animate({scrollTop: nanbuTop});
  });
});

$(function ($) {
  $('#houkiicon').on('click',function(){
      const houkiTop = $('#houki').offset().top;
      $("html").animate({scrollTop: houkiTop});
  });
});

$(function ($) {
  $('#nitinanicon').on('click',function(){
      const nitinanTop = $('#nitinan').offset().top;
      $("html").animate({scrollTop: nitinanTop});
  });
});

$(function ($) {
  $('#hinoicon').on('click',function(){
      const hinoTop = $('#hino').offset().top;
      $("html").animate({scrollTop: hinoTop});
  });
});

$(function ($) {
  $('#kouhuicon').on('click',function(){
      const kouhuTop = $('#kouhu').offset().top;
      $("html").animate({scrollTop: kouhuTop});
  });
});



// スクロールフェードイン　参考サイトhttps://dubdesign.net/download/html-css/jquery-scrollfadein/
$(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});




