'use strict';

/* Services */

var app_s = angular.module('roomServices', ['ngResource']);

app_s.factory('Photo', ['$resource',
  function($resource){
    return $resource('data/projects.json', {}, {
      query: {method:'GET', params:{img:'photos'}, isArray:true}
    });
  }]);
