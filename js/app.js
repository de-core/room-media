'use strict';

/* App Module */

var app=angular.module('roomApp', 
	[
		'ngRoute',
		'ngResource',
		'roomControllers',
		'scriptsDirectives'
		// 'roomServices'
	]
);

var images=[
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": "data/video/Dan_Balan.mp4"
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": "http://www.youtube.com/embed/FkX88N4pCow?rel=0"
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		},
		{
			"img": "img/projects/photo-1.jpg",
			"videourl": ""
		}
	]