'use strict';

/* Directives */
	var app_d = angular.module('scriptsDirectives', []);

		app_d.directive('myScripts', function($window){
			return function(scope, element, attrs){
				smoothScroll.init({
					speed: 600,
					easing: 'linear',
					offset: 0,
					updateURL: true,
					callbackBefore: function ( toggle, anchor ) {},
					callbackAfter: function ( toggle, anchor ) {}
				});
				$(window).bind('scroll', function(e){
					e.preventDefault();
					var winScroll = $(window).scrollTop();
					if (winScroll > 0){
						$('.btn-scroll').css('display', 'block');
					} else
					{
						$('.btn-scroll').css('display', 'none');
					}
				});

			}
		});
		app_d.directive('fotoramaBlock', function($http){
			return function(scope, element, attrs){
				$http.get('data/projects.json').success(function(data){
					scope.projects = data;
					var $container = $('#fotorama').fotorama({
						width: '100%',
						data: [
							{video: scope.projects[0].videourl},
							{video: scope.projects[1].videourl},
							{video: scope.projects[2].videourl},
							{video: scope.projects[3].videourl},
							{video: scope.projects[4].videourl},
							{video: scope.projects[5].videourl},
						]
					});
					var fotorama = $container.data('fotorama');
					// console.log(fotorama)
					var n=0;
					var $items;
					$('.work-wrap').each(function(){
						$items = $(this).find('img')
						var itemsVal = $items.length
						$items.attr({'data-index': n});
						n=++n;
					})
					$('.our-favourites .work-wrap img').click(function(){
						var itemIndex = $(this).data('index')
						console.log(itemIndex)
						fotorama.show(itemIndex);
					});
					$('.modal-video .close').click(function(){
						fotorama.stopVideo();
					});
				})
			}
		});

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

		app_d.directive('firstForm', function(){
			var googleForm = $(window).jqGoogleForms({"formKey": "1f4DkP_zXeRJJDsKv-4cOiqkcFdLc13xSLV7sNey_6fM"});
			return function(scope, element, attrs){
				$('#request .btn-submit').click(function(e){
					e.preventDefault();
					var form = $(this).parent('.form-custom');
					var name = form.find('#name').val();
					var email = form.find('#email').val();
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
		app_d.directive('secondForm', function(){
			var googleForm = $(window).jqGoogleForms({"formKey": "1f4DkP_zXeRJJDsKv-4cOiqkcFdLc13xSLV7sNey_6fM"});
			return function(scope, element, attrs){
				$('#partner-request .btn-submit').click(function(e){
					e.preventDefault();
					var form = $(this).parents('.form-custom');
					var name = form.find('#name').val();
					var email = form.find('#email').val();
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
		app_d.directive('thirdForm', function(){
			var googleForm = $(window).jqGoogleForms({"formKey": "1f4DkP_zXeRJJDsKv-4cOiqkcFdLc13xSLV7sNey_6fM"});
			return function(scope, element, attrs){
				$('#modal-request .btn-submit').click(function(e){
					e.preventDefault();
					var form = $(this).parents('.form-custom');
					var name = form.find('#name').val();
					var email = form.find('#email').val();
					var phone = form.find('#phone').val();
					googleForm.sendFormData({
						"entry.1352981750": name,
						"entry.2072700322": email,
						"entry.1778561209": phone
					});
					if (name && phone) {
						$('#modal-success').modal('show');
					}
					$('#modal-request').modal('hide');
				});
			}
		});

		app_d.directive('myPlaceholder', function(){
			return function(scope, element, attrs){
				$('input[placeholder], textarea[placeholder]').placeholder();
			}
		});

		app_d.directive('blockHeight', function($timeout){
			return function(scope, element, attrs){
				$(document).ready(function(){
					$timeout(function(){
						var h = element.find('.content').outerHeight();
						element.find('.bg-fotorama.fotorama').fotorama({
							height: h,
							width: '100%',
							fit: 'cover'
						});
					}, 1000);
				});
				// enquire.register("screen and (max-width:320px)", {
				// 	match : function() {
				// 		var h = element.find('.content').outerHeight();
				// 		element.find('.bg-fotorama.fotorama').fotorama({
				// 			height: h,
				// 			width: '100%',
				// 			fit: 'cover'
				// 		});						
				// 	},
				// });
				// enquire.register("screen and (min-width:321px) and (max-width: 479px)", {
				// 	match : function() {
				// 		var h = element.find('.content').outerHeight();
				// 		element.find('.bg-fotorama.fotorama').fotorama({
				// 			height: h,
				// 			width: '100%',
				// 			fit: 'cover'
				// 		});
				// 	},
				// });
				enquire.register("screen and (min-width:480px) and (max-width: 767px)", {
					match : function() {
						if (element.hasClass('clients')){
							element.find('.fotorama').fotorama({
								height: '562px',
								width: '100%',
								fit: 'cover'
							});
						} else {
							var h = element.find('.content').outerHeight();
							element.find('.bg-fotorama.fotorama').fotorama({
								height: h,
								width: '100%',
								fit: 'cover'
							});
						}
					},
				});
				enquire.register("screen and (min-width:768px) and (max-width: 991px)", {
					match : function() {
						if (element.hasClass('clients')){
							element.find('.fotorama').fotorama({
								height: '340px',
								width: '100%',
								fit: 'cover'
							});
						} else {
							var h = element.find('.content').outerHeight();
							element.find('.bg-fotorama.fotorama').fotorama({
								height: h,
								width: '100%',
								fit: 'cover'
							});
						}
					},
				});
				enquire.register("screen and (min-width:992px) and (max-width: 1199px)", {
					match : function() {
						if (element.hasClass('clients')){
							element.find('.fotorama').fotorama({
								height: '355px',
								width: '100%',
								fit: 'cover'
							});
						} else {
							var h = element.find('.content').outerHeight();
							element.find('.bg-fotorama.fotorama').fotorama({
								height: h,
								width: '100%',
								fit: 'cover'
							});
						}
					},
				});
				enquire.register("screen and (min-width:1200px) and (max-width: 1499px)", {
					match : function() {
						if (element.hasClass('clients')){
							element.find('.fotorama').fotorama({
								height: '360px',
								width: '100%',
								fit: 'cover'
							});
						} else {
							var h = element.find('.content').outerHeight();
							element.find('.bg-fotorama.fotorama').fotorama({
								height: h,
								width: '100%',
								fit: 'cover'
							});
						}
					},
				});
				enquire.register("screen and (min-width:1500px)", {
					match : function() {
						if (element.hasClass('clients')){
							element.find('.fotorama').fotorama({
								height: '360px',
								width: '100%',
								fit: 'cover'
							});
						} else {
							var h = element.find('.content').outerHeight();
							element.find('.bg-fotorama.fotorama').fotorama({
								height: h,
								width: '100%',
								fit: 'cover'
							});
						}
					},
				});
			}
		});

