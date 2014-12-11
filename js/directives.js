'use strict';

/* Directives */
	var app_d = angular.module('scriptsDirectives', []);
		app_d.directive('hoverEffect', function(){
			return function(scope, element, attrs){
				element.bind('mouseenter', function(e){
					e.preventDefault();
					element.parent().find('.v-type-wrap .img-shadow').addClass('hovered');
				});
				element.bind('mouseleave', function(e){
					e.preventDefault();
					element.parent().find('.v-type-wrap .img-shadow').removeClass('hovered');
				});
			}
		});

		app_d.directive('scrollEffect', function(){
			return function(scope, element, attrs){
				smoothScroll.init({
					speed: 400,
					easing: 'linear',
					offset: 0,
					updateURL: true,
					callbackBefore: function ( toggle, anchor ) {},
					callbackAfter: function ( toggle, anchor ) {}
				});
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

		app_d.directive('loadVideo', function(){
			return function(scope, element, attrs){
				element.find('.photos').find('img').click(function(){
					console.log('work')
					// e.preventDefault();
					// var activeImage = this.parent().attr('href');
					// element.find('.video-place .video-frame').attr('src', activeImage);
				});
			}
		});
