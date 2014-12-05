'use strict';

/* App Module */
var app=angular.module('vsApp', []);
// app.controller('hoverImg', function($scope){
// 	$('.v-type-title').mouseenter(function(){
// 		$scope.shadow.opacity(0);
// 	});
// });
	app.controller('GalleryImage', function($scope){
		$scope.photos=images;
		// $scope.mainvideoUrl=images[0].videourl;
		$scope.setVideo = function(imagesitem) {
			$scope.mainvideoUrl = imagesitem;
		}
	});

	var images=[
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': 'http://www.youtube.com/embed/FkX88N4pCow?rel=0'
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		},
		{
			'img': 'img/projects/photo-1.jpg',
			'videourl': ''
		}
	]