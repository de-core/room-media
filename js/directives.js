'use strict';

/* Directives */
angular.module('scriptsDirectives', [])
	.directive('hoverEffect', function(){
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
angular.module('placeholderDirective', [])
	.directive('myPlaceholder', function(){
		return function(scope, element, attrs){
			element.placeholder();
		}
	});

var app_f = angular.module('fotoramaDirectives', [])
	// app_f.directive('blockHeight', function(){
	// 	return function(scope, element, attrs){
	// 		element.load(function(){
	// 			var h = element.height();
	// 		})
	// 	}
	// });
	app_f.directive('myFotorama', function() {
		return function(scope, element, attrs) {
			var content_height = element.parent().find('.content').outerHeight();
			element.fotorama({
				fit: 'cover',
				width: '100%',
				height: content_height
			});
		};
	})

// angular.module('loadOnDemain', [])

// 	.directive('myScripts', function(){
// 		return{
// 			restrict: 'A',
// 			template: '<div></div>',
// 			replace: true
// 		}
// 	})