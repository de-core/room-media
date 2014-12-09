'use strict';

/* App Module */
var app=angular.module('vsApp', 
	[
		'roomControllers',
		'scriptsDirectives',
		'placeholderDirective',
		'fotoramaDirectives'
	]
);
// app = angular.module('app', ['loadOnDemand']);
	// app.config(['$loadOnDemandProvider', function ($loadOnDemandProvider) {
	// 	var modules = [
	// 		{
	// 			name: 'all',
	// 			script: 'js/all.js'
	// 		}
	// 	];
	// 	$loadOnDemandProvider.config(modules, []);
	// }]);
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