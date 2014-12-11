'use strict';

/* Controllers */
var app_c=angular.module('roomControllers', []);
	app_c.controller('galleryImage', [ '$scope', '$http', function($scope, $http){
		$http.get('data/projects.json').success(function(data, status, headers, config){
			$scope.photos = data;
			$scope.selected = data[0].img;
		}).error(function(data, status, headers, config){
              alert("Error");
          });
		// $scope.photos=Photo;
		$scope.setVideo = function(video) {
			console.log('work')
			$scope.selected = video;
		}
	}]);
	// app_c.controller('PhotoVideo', ['$scope', '$routeParams', 'Photo',
 //  function($scope, $routeParams, Photo) {
 //    $scope.image = Photo.get({img: $routeParams.img}, function(image) {
 //      $scope.mainImageUrl = phone[0];
 //    });

 //    $scope.setImage = function(imageUrl) {
 //      $scope.mainImageUrl = imageUrl;
 //    }
 //  }]);
	// app_c.controller('VideoCtrl', ['$scope', '$routeParams', 'Photo',
 //  function($scope, $routeParams, Photo) {
 //    $scope.video = Photo.get({videoUrl: $routeParams.phoneId}, function(phone) {
 //      $scope.mainImageUrl = phone.images[0];
 //    });

 //    $scope.setImage = function(imageUrl) {
 //      $scope.mainImageUrl = imageUrl;
 //    }
 //  }]);

	app_c.controller('testController', ['$scope', function($scope){
		$scope.test = function(){
			console.log('work test');
		}
	}]);

	app_c.controller('googleMap', ['$scope', function($scope) {
	var mapContainer = document.getElementById('map-place');
	mapContainer.style.width = '100%';
	mapContainer.style.height = '650px';
		var center = new google.maps.LatLng(55.787055, 37.653821);
	$scope.initialize = function() {
		var mapOptions = {
			center: center,
			zoom: 17,
			scrollwheel: false,
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
		var point = new google.maps.LatLng(55.7868,37.6539);
		$scope.marker = new google.maps.Marker({
				position: point, map: $scope.map, title: 'ул. Малая Красносельская, 2/8'
			});
		}
	}]);