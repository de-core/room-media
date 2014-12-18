'use strict';

/* Directives */
	var app_d = angular.module('scriptsDirectives', []);
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
			return function(scope, element, attrs){
				$('.form-custom .btn-submit').click(function(e){
					var googleForm = $(window).jqGoogleForms({"formKey": "1f4DkP_zXeRJJDsKv-4cOiqkcFdLc13xSLV7sNey_6fM"});
					console.log('work')
					e.preventDefault();
					var form = element.find('.form-custom');
					var name = form.find('#name').val();
					var email = form.find('#email').val();
					var phone = form.find('#phone').val();
					googleForm.sendFormData({
					  "entry.1352981750": name,
					  "entry.2072700322": email,
					  "entry.1778561209": phone
					});
					// if (name && phone) {
					//   $('.alert-container').removeClass('hidden');
					// }
					$('.modal').modal('hide');
				});
			}
		});

		app_d.directive('scrollEffect', function(){
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
		var h=0;
		app_d.directive('blockHeight', function(){
			return function(scope, element, attrs){
				h = element.find('.content').outerHeight();
				element.find('.fotorama').fotorama({
					height: h,
					width: '100%',
					fit: 'cover'
				})
			}
		});

		