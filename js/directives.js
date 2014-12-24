'use strict';

/* Directives */
	var app_d = angular.module('scriptsDirectives', []);

		app_d.directive('myScripts', function(){
			return function(scope, element, attrs){
				smoothScroll.init({
					speed: 600,
					easing: 'linear',
					offset: 0,
					updateURL: true,
					callbackBefore: function ( toggle, anchor ) {},
					callbackAfter: function ( toggle, anchor ) {}
				});
			}
		});

	// app_d.directive('fancyBox', function(){
	// 	return function(scope, element, attrs){
	// 		$('.fancybox').click(function(e){
	// 			e.preventDefault();
	// 			$.fancybox({
	// 					openEffect  : 'none',
	// 					closeEffect : 'none',
	// 					prevEffect	: 'none',
	// 					nextEffect	: 'none',
	// 					// helpers : {
	// 					// 	buttons : {},
	// 					// },
	// 					nextClick : true,
	// 					type : 'iframe',
	// 					href			: this.href.replace(new RegExp('watch\\?v=', 'i'), 'embed/'),
	// 					// type          : 'swf',
 //      //       swf           : {
 //      //           allowfullscreen   : true
 //      //       }
	// 			});
	// 		});
	// 	}
	// });
		app_d.directive('hoverEffect', function(){
			return function(scope, element, attrs){
				element.bind('mouseenter', function(e){
					e.preventDefault();
					element.parent().find('.v-type-wrap figure img').addClass('hovered');
				});
				element.bind('mouseleave', function(e){
					e.preventDefault();
					element.parent().find('.v-type-wrap figure img').removeClass('hovered');
				});
			}
		});

		app_d.directive('sendForm', function(){
			var googleForm = $(window).jqGoogleForms({"formKey": "1f4DkP_zXeRJJDsKv-4cOiqkcFdLc13xSLV7sNey_6fM"});
			return function(scope, element, attrs){
				$('.form-custom .btn-submit').click(function(e){
					e.preventDefault();
					var form = $(this).parents('.form-custom');
					var name = form.find('#name').val();
					  console.log(name)
					var email = form.find('#email').val();
					console.log(email)
					var phone = form.find('#phone').val();
					googleForm.sendFormData({
					  "entry.1352981750": name,
					  "entry.2072700322": email,
					  "entry.1778561209": phone
					});
					if (name && phone) {
					  $('#modal-success').modal('show');
					}
					// formId.resetForm();
					$('#modal-request').modal('hide');
				});
			}
		});


		app_d.directive('formEffect', function(){
			return function(scope, element, attrs){
				$.material.init();
			}
		});

		app_d.directive('myPlaceholder', function(){
			return function(scope, element, attrs){
				element.placeholder();
			}
		});


		app_d.directive('blockHeight', function(){
			return function(scope, element, attrs){
				$(window).load(function(){
					// var h = element.find('.content').outerHeight();
					// console.log("load"+h)
					// element.find('.fotorama').fotorama({
					// 	height: h,
					// 	width: '100%',
					// 	fit: 'cover'
					// });
				enquire.register("screen and (max-width:320px)", {
					match : function() {
						var h = element.find('.content').outerHeight();
						console.log(h)
						element.find('.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					},
				});
				enquire.register("screen and (min-width:321px) and (max-width: 479px)", {
					match : function() {
						var h = element.find('.content').outerHeight();
						console.log(h)
						element.find('.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					},
				});
				enquire.register("screen and (min-width:480px) and (max-width: 767px)", {
					match : function() {
						var h = element.find('.content').outerHeight();
						console.log(h)
						element.find('.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					},
				});
				enquire.register("screen and (min-width:768px) and (max-width: 991px)", {
					match : function() {
						var h = element.find('.content').outerHeight();
						console.log(h)
						element.find('.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					},
				});
				enquire.register("screen and (min-width:992px) and (max-width: 1199px)", {
					match : function() {
						var h = element.find('.content').outerHeight();
						console.log(h)
						element.find('.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					},
				});
				enquire.register("screen and (min-width:1200px) and (max-width: 1499px)", {
					match : function() {
						var h = element.find('.content').outerHeight();
						console.log(h)
						element.find('.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					},
				});
				enquire.register("screen and (min-width:1500px)", {
					match : function() {
						var h = element.find('.content').outerHeight();
						console.log(h)
						element.find('.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					},
				});
				});
			}
		});
