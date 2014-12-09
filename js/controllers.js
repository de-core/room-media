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