'use strict';

/* Controllers */
var app_c=angular.module('roomControllers', []);
	app_c.controller('GalleryImage', function($scope){
		$scope.photos=images;
		$scope.setVideo = function(imagesitem) {
			alert(imagesitem);
			$scope.mainvideoUrl = imagesitem.videourl;
		}
	});
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
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.map = new google.maps.Map(mapContainer, mapOptions);
        var point = new google.maps.LatLng(55.7868,37.6539);
        $scope.marker = new google.maps.Marker({
				  position: point, map: $scope.map, title: 'ул. Малая Красносельская, 2/8'
				});
    }
	}]);