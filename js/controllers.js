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


		// initScrollAnimations() {
		// 		var controller = $.superscrollorama();
		// 		controller.pin($('.header-left'), 3000, {
		// 	  anim: (new TimelineLite())
		// 	    .append(
		// 	      TweenMax.fromTo($('#bg-lines'), .5, 
		// 	        {css:{left: -200, top: 500}, immediateRender:true}, 
		// 	        {css:{top: -400}})
		// 	    )
		// 	    .append(
		// 	      TweenMax.to($('#bg-lines'), .5, 
		// 	        {css:{left: 200}})
		// 	    )
		// 	    .append(
		// 	      TweenMax.to($('#bg-lines'), .5, 
		// 	        {css:{top: -200}})
		// 	    )
		// 	    .append(
		// 	      TweenMax.to($('#bg-lines'), .5, 
		// 	        {css:{left: 0}})
		// 	    )
		// 	});
		// }
		// var s = skrollr.init({
		// 	forceHeight: false
		// });
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
			// var map = new google.maps.Map(mapContainer, mapOptions);
			// var locations = [
			// 	['RoomMedia', 'ул. Малая Красносельская, 2/8, стр. 7', '8 (888) 888 88 88', '', '', 55.7869,37.6535, 'https://mapbuildr.com/assets/img/markers/default.png']
			// ];
			// for (var i = 0; i < locations.length; i++) {
			// 	if (locations[i][1] =='undefined'){ 
			// 		var description ='';
			// 	} else { var description = locations[i][1]; }
			// 	if (locations[i][2] =='undefined'){
			// 		var telephone ='';
			// 	} else { var telephone = locations[i][2]; }
			// 	if (locations[i][3] =='undefined'){
			// 		var email ='';
			// 	} else { var email = locations[i][3]; }
			// 	if (locations[i][4] =='undefined'){
			// 		var web ='';
			// 	} else { var web = locations[i][4]; }
			// 	if (locations[i][7] =='undefined'){
			// 		var markericon ='';
			// 	} else { var markericon = locations[i][7]; }
			// 	var marker = new google.maps.Marker({
			// 		icon: markericon,
			// 		position: new google.maps.LatLng(locations[i][5], locations[i][6]),
			// 		map: map,
			// 		title: locations[i][0],
			// 		desc: description,
			// 		tel: telephone,
			// 		email: email,
			// 		web: web
			// 	});
			// 	if (web.substring(0, 7) != "http://") {
			// 		var link = "http://" + web;
			// 	} else { var link = web; }
			// 	bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
			// }
			// function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
			// 	var infoWindowVisible = (function () {
			// 	var currentlyVisible = false;
			// 	return function (visible) {
			// 		if (visible !== undefined) {
			// 			currentlyVisible = visible;
			// 		}
			// 		return currentlyVisible;
			// 	};
			// }());
			// var iw = new google.maps.InfoWindow();
			// google.maps.event.addListener(marker, 'click', function() {
			// 	if (infoWindowVisible()) {
			// 		iw.close();
			// 		infoWindowVisible(false);
			// 	} else {
			// 		var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
			// 		iw = new google.maps.InfoWindow({content:html});
			// 		iw.open(map,marker);
			// 		infoWindowVisible(true);
			// 	}
			// });
			// google.maps.event.addListener(iw, 'closeclick', function () {
			// 	infoWindowVisible(false);
			// });
		}
	}]);