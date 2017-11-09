(function(global, document, $){
 'use strict'

 // 메뉴 토글
  $('.menu-toggle').on('click', () => {
    $('.menu-nav').toggle();
    $('.menu-nav-background').toggle();
    $('.menu-nav').addClass('is-visible');
  });
  $('.menu-close').on('click', () => {
    $('.menu-nav').toggle();
    $('.menu-nav-background').toggle();
    $('.menu-nav').removeClass('is-visible');
  })
})(window, window.document, jQuery);