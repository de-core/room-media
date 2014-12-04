$(window).bind("load", function() {
  $('input[placeholder], textarea[placeholder]').placeholder();

  $('.video-types .v-type-title').hover(function(){
  	$(this).find('.v-type-wrap .img-shadow').css('opacity', '0');
  	$(this).find('.v-type-wrap .img-shadow').css('opacity', '0.5');
  	console.log("work");
  });
});
