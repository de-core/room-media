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
		// app_d.directive('scrollEffect', function(){
		// 	return function(scope, element, attrs){
		// 		// element.smoothScroll.init();
 	// 			var script = document.createElement("script");

 	// 			script.type = "text/javascript";
 	// 			element.appendChild(script);
 	// 			script.text = "smoothScroll.init();";
		// 	}
		// });
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
