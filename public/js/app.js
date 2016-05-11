var ariApp = angular.module('ariApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize']);

ariApp.config(function($routeProvider, $locationProvider,$httpProvider){
	$routeProvider
	//landing page 
	.when('/',{
		templateUrl: 'views/homepage.html',
        		controller: 'homeController'
	})	

	//project page 
	.when('/project',{
		templateUrl: 'views/project.html',
        		controller: 'projectController'
	})	

	//admin page
	.when('/admin',{
		templateUrl: 'views/admin.html',
        		controller: 'adminController'
	})

	$locationProvider.html5Mode( {
  		enabled: true,
  		requireBase: false
	});
});