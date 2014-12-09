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
    // $scope.cities = [];
    // $scope.map;
    // $scope.infoBox = new google.maps.InfoWindow();
    // var MY_MAPTYPE_ID = 'custom_style';
    var mapContainer = document.getElementById('map-place');
    mapContainer.style.width = '100%';
    mapContainer.style.height = '650px';
    // $http.get('data.json').success(function(data) {
    //     $scope.cities = data;
    // });
		// var featureOpts = [
		//   {
		//     featureType: 'landscape.natural',
		//     elementType: 'all',
		//     stylers: [
		//       { hue: '#ffffff' },
		//       { saturation: -100 },
		//       { lightness: 100 },
		//       { visibility: 'off' }
		//     ]
		//   },{
		//     featureType: 'road',
		//     elementType: 'all',
		//     stylers: [
		//       { hue: '#9f9f9f' },
		//       { saturation: -100 },
		//       { lightness: -3 },
		//       { visibility: 'on' }
		//     ]
		//   },{
		//     featureType: 'poi.park',
		//     elementType: 'all',
		//     stylers: [
		//       { hue: '#ffffff' },
		//       { saturation: -100 },
		//       { lightness: 100 },
		//       { visibility: 'on' }
		//     ]
		//   },{
		//     featureType: 'landscape',
		//     elementType: 'all',
		//     stylers: [
		//       { hue: '#ffffff' },
		//       { saturation: -100 },
		//       { lightness: 100 },
		//       { visibility: 'on' }
		//     ]
		//   },{
		//     featureType: 'administrative',
		//     elementType: 'all',
		//     stylers: [
		//       { hue: '#909090' },
		//       { saturation: 0 },
		//       { lightness: 11 },
		//       { visibility: 'on' }
		//     ]
		//   },{
		//     featureType: 'water',
		//     elementType: 'all',
		//     stylers: [
		//       { hue: '#ffffff' },
		//       { saturation: -100 },
		//       { lightness: 100 },
		//       { visibility: 'on' }
		//     ]
		//   }
		// ];
 		var center = new google.maps.LatLng(55.787055, 37.653821);
    $scope.initialize = function() {
        var mapOptions = {
            center: center,
            zoom: 17,
            scrollwheel: false,
            color: '#999',
            name: 'ул. Малая Красносельская, 2/8',
      //       mapTypeControlOptions: {
						// 	mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
						// },
      //       mapTypeId: MY_MAPTYPE_ID
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.map = new google.maps.Map(mapContainer, mapOptions);
        var point = new google.maps.LatLng(55.7868,37.6539);
        var text = 'Address';
        $scope.marker = new google.maps.Marker({
				  position: point, map: $scope.map, title: 'ул. Малая Красносельская, 2/8'
				});
	 	// 	var styledMapOptions = {
			// 	name: 'Custom Style'
			// };
			
			// var customMapType = new google.maps.StyledMapType(styledMapOptions);
			// $scope.map.mapTypes.set(customMapType);


			// var marker = new google.maps.Marker({
			// 	position: marker,
			// 	map: map
			// });
    }
		
	}]);