ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, anchorSmoothScroll) {

	//empty object to show client
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
	$scope.texttyping = ["Stargazer;", 
	                        "Curious Coder;",
	                        "Software Engineer;" ]

	//render bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 5000); 

	//scroll to bio section when clicked
	$scope.goToBio = function(eID) {
	  anchorSmoothScroll.scrollTo(eID)
	};

	//Array of diffrent quotes to render with every page load
	$scope.quotes = ['"Knowledge speaks, but wisdom listens."']

	//Select random quote from quotes array to render on the page
	$scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];

	//display Arian Flores' about me paragraph
	$scope.showBio = function(){
		$scope.display = !$scope.display; 
	}
		
}]);