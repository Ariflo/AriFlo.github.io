ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, anchorSmoothScroll) {

	//empty object to show client
	$scope.client = {};

	//initially hide Arian's about me description 
	$scope.display = true; 

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
	$scope.texttyping = ["stargazer;", 
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
	$scope.quotes = ['"The roots of education are bitter, but the fruit is sweet" -Aristotle',
			     '"A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better." -Donald Knuth',
			     '"Men are like steel. When they lose their temper, they lose their worth." -Chuck Norris',
			     '"I don&#39t want to achieve immortality through my work. I want to achieve it through not dying." -Woody Allen',
			     '"Life is too short for long-term grudges." -Elon Musk',
			     '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
			     '"Success is a lousy teacher. It seduces smart people into thinking they can&#39t lose." -Bill Gates',
			     '"If you can&#39t explain it simply, you don&#39t understand it well enough." -Albert Einstein',
			     '"Intelligence is the ability to adapt to change." -Stephen Hawking',
			     '"For me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others. You&#39d be surprised how far that gets you." -Neil deGrasse Tyson',
			     '"Strength and wisdom are not opposing values." -Bill Clinton',
			     '"All I can do is be me, whoever that is." -Bob Dylan',
			     '"Time you enjoy wasting, was not wasted." -John Lennon',
			     '"Knowledge speaks, but wisdom listens." -Jimmy Hendrix',
			     '"Life&#39s most persistent and urgent question is, What are you doing for others?" -Dr. Martin Luther King, Jr.',
			     '"The most sophisticated people I know - inside they are all children." -Jim Henson']

	//Select random quote from quotes array to render on the page
	$scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];

	//display Arian Flores' about me paragraph
	$scope.showBio = function(){
		$scope.display = !$scope.display; 
	}
		
}]);