$( document ).ready(function() {
    console.log( "ready!" );
    $('#main-slider').flexslider({
      animation: "slide",
  	});

  $('#reviews-slider').flexslider({
      animation: "slide",
      itemWidth: 200,
      itemMargin: 1,
      minItems: 3,
      maxItems: 9,
      move: 0,
  	});
});

