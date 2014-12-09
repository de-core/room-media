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

angular.module('roomDirectives', [])

	.directive('myFotorama', function() {
		return function(scope, element, attrs) {
			element.fotorama({
				fit: 'cover',
				width: '100%',
				height: '100%',
				maxheight: '1500'
			});
		};
	})

