'use strict';

/* Controllers */
var app_c=angular.module('roomControllers', []);

	app_c.controller('generalController', ['$timeout', '$rootScope', '$scope', '$http',
	 function($timeout, $rootScope, $scope, $http){
		$http.get('data/projects.json').success(function(data){
			$scope.projects = data;
		}).error(function(data){
			alert("Data json Error");
		});
		$http.get('data/photos.json').success(function(data){
			$scope.photos = data;
		}).error(function(data){
			alert("Data json Error");
		});

		$scope.openSlider = function(){
			$('.modal-video').css('left', '0')
			.css('position', 'fixed')
			$timeout(function(){
				$('.modal-video').animate({ opacity: '1'}, 500)
			}, 500);
		}
		$scope.closeSlider = function(){
			$('.modal-video').animate({ opacity: '0'}, 500)
			$timeout(function(){
				$('.modal-video').css('position', 'absolute').css('left', '-999999px');
			}, 500)
		}

	}]);

	app_c.controller('googleMap', ['$scope', function($scope) {
		var mapContainer = document.getElementById('map-place');
		mapContainer.style.width = '100%';
		mapContainer.style.height = '600px';
		var center = new google.maps.LatLng(55.7866,37.6539);
		$scope.initialize = function() {
			var mapOptions = {
				center: center,
				zoom: 15,
				scrollwheel: false,
				draggable : false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
					{
						featureType: "landscape",
						stylers: [
						{ saturation: -100 },
						{ lightness: 65 },
						{ visibility: "on" }
						]
					},{
						featureType: "poi",
						stylers: [
						{ saturation: -100 },
						{ lightness: 51 },
						{ visibility: "simplified" }
						]
					},{
						featureType: "road.highway",
						stylers: [
						{ saturation: -100 },
						{ visibility: "simplified" }
						]
					},{
						featureType: "road.arterial",
						stylers: [
						{ saturation: -100 },
						{ lightness: 30 },
						{ visibility: "on" }
						]
					},{
						featureType: "road.local",
						stylers: [
						{ saturation: -100 },
						{ lightness: 40 },
						{ visibility: "on" }
						]
					},{
						featureType: "transit",
						stylers: [
						{ saturation: -100 },
						{ visibility: "simplified" }
						]
					},{
						featureType: "administrative.province",
						stylers: [
						{ visibility: "off" }
						]
					},{
						featureType: "water",
						elementType: "labels",
						stylers: [
						{ visibility: "on" },
						{ lightness: -25 },
						{ saturation: -100 }
						]
					},{
						featureType: "water",
						elementType: "geometry",
						stylers: [
						{ hue: "#ffff00" },
						{ lightness: -25 },
						{ saturation: -97 }
						]
					}
				]
			};
			$scope.map = new google.maps.Map(mapContainer, mapOptions);
			var point = new google.maps.LatLng(55.7866,37.6539);
			$scope.marker = new google.maps.Marker({
					position: point, map: $scope.map, title: 'ул. Малая Красносельская, 2/8'
			});

		}
	}]);