'use strict';

/* Controllers */
var app_c=angular.module('roomControllers', []);

	app_c.controller('generalController', [ '$scope', '$http', function($scope, $http){
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

		$scope.$on('youtube.player.playing', function ($event, player) {
			$('.slider .arrow').click(function(){
				player.stopVideo();
			})
		});
		$scope.$on('youtube.player.playing', function ($event, player) {
			$('#modal-video .close').click(function(){
				player.stopVideo();
			})
		});
		$scope.getindex = 0;

		$scope.videoPlay = function(value, index){
			$scope.selected = value;
			$scope.getindex=index;
		}
		$scope.setVideo = function(value, index){
			$scope.selected=value;
			$scope.getindex=index;
		}

		$scope.showNext = function () {
			if ($scope.getindex < ($scope.projects.length - 1)){
				$scope.getindex = ++$scope.getindex;
			}
		};
		$scope.showPrev = function () {
			if ($scope.getindex>0){
				$scope.getindex = --$scope.getindex;
			}
		};

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