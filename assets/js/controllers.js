ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll ) {

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

	$scope.gotoContent = function() {

	  // call $anchorScroll()
	  $anchorScroll('content');
	};
		
}]);