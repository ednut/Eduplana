'use strict';
var app = angular.module('myApp.controllers');

app.controller('generalController', function($scope, $location) {
	
    $scope.getClass = function (path) {
	  return ($location.path().substr(0, path.length) === path) ? 'current' : '';
	}

});