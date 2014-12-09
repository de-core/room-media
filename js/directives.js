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
		app_d.directive('myPlaceholder', function(){
			return function(scope, element, attrs){
				element.placeholder();
			}
		});
		var h=0;
		app_d.directive('blockHeight', function(){
			return function(scope, element, attrs){
				h = element.find('.content').outerHeight();
				console.log(h);
				element.find('.fotorama').fotorama({
					height: h,
					width: '100%',
					fit: 'cover'
				})
			}
		});
		// app_d.directive('myFotorama', function() {
		// 		return function(scope, element, attrs) {
		// 			// var h = element.parent().find('.content').outerHeight();
		// 			console.log(h)
		// 			element.fotorama({
		// 				height: h,
		// 				width: '100%',
		// 				fit: 'cover'
		// 			});
		// 		};
		// });

