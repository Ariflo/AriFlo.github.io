var ariApp = angular.module('ariApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize']);

ariApp.config(function($routeProvider, $locationProvider,$httpProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/homepage.html',
        		controller: 'homeController'
	})	

	.when('/project',{
		templateUrl: 'views/project.html',
        		controller: 'projectController'
	})	

	.when('/admin',{
		templateUrl: 'views/admin.html',
        		controller: 'adminController'
	})	

	$locationProvider.html5Mode( {
  		enabled: true,
  		requireBase: false
	});


});