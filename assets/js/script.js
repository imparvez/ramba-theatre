$( document ).ready(function() {

  var windowHeight = $(window).height(),
      headerHeight = $('header').outerHeight(),
      footerHeight = $('.wrapper footer').outerHeight();

  $('#main-slider').flexslider({
    animation: "slide",
	});

  $('#reviews-slider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 131,
    itemMargin: 10,
    minItems: 3,
    maxItems: 9,
    move: 0,
	});

  $('.menu-trigger').on('click', function(){
    $('.nav-menu').slideToggle(400, function(){
        $(this).toggleClass('nav-expanded');
    });
  });

  // $('main').css('min-height', (windowHeight - headerHeight - footerHeight));
});

