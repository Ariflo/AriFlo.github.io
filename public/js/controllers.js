ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll) {

	
	//empty object to show client
	$scope.client = {};

	//user has not reached bio page on arrival 
	$scope.atBio = false;

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
	$scope.texttyping = ['"Stargazer";', 
	                        '"Curious Coder";',
	                        '"Software Engineer";' ]

	//render bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 5000); 

	//scroll to bio section when clicked
	$scope.goToBio = function(eID) {
	  anchorSmoothScroll.scrollTo(eID)
	  $scope.atBio = true;
	};

	//Array of diffrent quotes to render with every page load
	$scope.quotes = ['"Knowledge speaks, but wisdom listens."']

	//Select random quote from quotes array to render on the page
	$scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];

	//display Arian Flores' about me paragraph
	$scope.showBio = function(){
		$scope.display = !$scope.display; 
	}

	//when scroll reach the bottom of the page remove contact card
	//Found on http://blog.sodhanalibrary.com/2015/02/detect-when-user-scrolls-to-bottom-of.html#.VyvoxxUrIcg
	angular.element($window).bind("scroll", function() {

	    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	    var body = document.body, html = document.documentElement;

	    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
	    windowBottom = windowHeight + window.pageYOffset;

	    if (windowBottom >= docHeight) {
	        angular.element('.contactInfo2').slideToggle();
	    }
	});	    	
}]);

ariApp.controller('projectController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll) {
	                                         	
}]);

ariApp.controller('adminController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll) {

	                                     	$scope.return = function(){
	                                     		$location.url('/');
	                                     	}
}]);