var ariApp = angular.module('ariApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize']);

ariApp.config(function($routeProvider, $locationProvider, $httpProvider){
	$routeProvider
	//landing page 
	.when('/',{
		templateUrl: '/views/homepage.html',
        		controller: 'homeController'
	})		

	//admin page
	.when('/admin',{
		templateUrl: '/views/admin.html',
        		controller: 'adminController'
	})

	.otherwise({
	        redirectTo: '/'
	      });

	$locationProvider.html5Mode({
  		enabled: false,
  		requireBase: false
	});

	$httpProvider.interceptors.push('authInterceptor');
});