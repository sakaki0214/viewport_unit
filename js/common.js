$(function() {
  //smooth scroll
  $('a[href^=#]').click(function() {
    var speed = 400; // ミリ秒
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  // gnav
  $('.js-menu-toggle').on('click', function(){
    $('.gnav').slideToggle('fast');
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    };
  });
});