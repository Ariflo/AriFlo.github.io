var ariApp = angular.module('ariApp', ['ngRoute', 'ngAnimate', 'ngResource']);

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