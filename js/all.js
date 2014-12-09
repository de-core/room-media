$.noConflict();
jQuery(document).ready(function($){
  var h=0;
  $('#header .logo img').hover(function(){
   console.log(h)
  });
});
// (function($){
//    // jQuery code here will not conflict with any other codes.
//   // $('input[placeholder], textarea[placeholder]').placeholder();

//   // $('.video-types .v-type-title').mouseenter(function(){
//   // 	$(this).find('.v-type-wrap .img-shadow').css('opacity', '0');
//   // 	$(this).find('.v-type-wrap .img-shadow').css('opacity', '0.5');
//   // 	console.log("work");
//   // });
// 	$('.header .logo img').on(function(){
// 		$(this).css('border', '1px solid #fff')
// 		console.log('work')
// 	})
// 	var h = $('.header-content').height();

// })(jQuery); 
