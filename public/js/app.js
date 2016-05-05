var ariApp = angular.module('ariApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize']);

ariApp.config(function($routeProvider, $locationProvider,$httpProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/homepage.html',
        		controller: 'homeController'
	})	

	$locationProvider.html5Mode( {
  		enabled: true,
  		requireBase: false
	});


});