ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll ) {

	$scope.client = {};

	//add client info to database
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

	//render heading text 
	$scope.texttyping = ["stargazer.", 
	                        "curious coder.",
	                        "Software Engineer." ]

	//rener bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 5000); 

	$scope.goToBio = function() {
	  // call $anchorScroll() on Bio
	  $anchorScroll('bio');
	};
		
}]);