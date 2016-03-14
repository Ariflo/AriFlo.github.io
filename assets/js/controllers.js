ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout ) {

	$scope.client = {};

	$scope.info = function(){
		$http({
			method: "POST",
			url: "/api/clients",
			data: $scope.client
		}).then(function(data){
			
		}).catch(function(err){
			console.log(err);
		});
	}

	$scope.texttyping = ["stargazer.", 
	                        "curious coder.",
	                        "Software Engineer." ]

	$timeout(function(){
		$scope.show = true; 
	}, 5000); 
		
}]);