var ariApp = angular.module('ariApp', ['ngRoute', 'ngAnimate', 'ngResource']);

ariApp.config(function($routeProvider, $locationProvider,$httpProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/index.html',
        		controller: 'homeController'
	})	
});