ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll) {

	
	//empty object to show client
	$scope.client = {};

	//user has not reached bio page on arrival 
	$scope.atBio = false;

	//hide project
	$scope.showProject = false;

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

	$scope.toggleProject = function(projNum){
	        $scope.showProject = !$scope.showProject;

	        $http({
	        	method: "GET",
	        	url: "/api/projects/" + projNum
	        }).then(function(project) {  			
	        	console.log(project.data);
	        	$scope.projectTitle = project.data.project.project_title;
	        	$scope.projectDescription = project.data.project.project_description;
	        	$scope.projectDuties = project.data.project.duties;
	        	$scope.projectImg = project.data.project.project_img;
	        	$scope.projectDemo = project.data.project.project_vid;

	        	var techData = project.data.tech;
	        	$scope.technologies = [];
	        	for(var i = 0; i<techData.length; i++){
	        		$scope.technologies.push(techData[i].tech);
	        	}

	        	$scope.projectBuildTime = project.data.project.build_time;

	        	var teamData = project.data.team
	        	$scope.team = [];
	        	for(var i = 0; i<teamData.length; i++){
	        		$scope.team.push(teamData[i]);
	        	}

	        }).catch(function(err){
	        	console.log(err.message);
	        });   
	};

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

ariApp.controller('adminController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll) {

	                                     	if(localStorage.getItem('jwt')){

	                                     		var  token = localStorage.getItem('jwt');
	                                     		$http({
	                                     			method: "GET",
	                                     			url: "/api/admin/" + token
	                                     		}).then(function(data) {
	                        				if(data.data.id === $scope.admin.id){
	                        					 $scope.isAdmin = true;
	                        					 $scope.showModal = false; 
	                        				}
	                                     		}).catch(function(err){
	                                     			console.log("Please Sign in to gain access to admin page");
	                                     		});
	                                     	}

	                                     	//admin obj for login; 
	                                     	$scope.admin = {};

	                                     	//project obj for project creation
	                                     	$scope.project = {};
	                                     	$scope.project.tech = [];
	                                     	$scope.project.team = {};

	                                     	//temp array of tech
	                                     	$scope.technologies = ['HTML5', 'CSS', 'Javascript', 'PostgreSQL', 'Express', 'Angular', 'Node.js', 'jQuery', 'D3.js', 'Twitter Bootstrap', 'Nightmare.js', 'Select 2', 'ReGex'];

	                                     	//hide admin form upon page launch
	                                     	$scope.isAdmin = false;
	                                     	$scope.showModal = true; 

	                                     	//close of admin modal returns user to hompage
	                                     	$scope.return = function(){
	                                     		$location.path('/');
	                                     	}

	                                     	//sign-in for admin
	                                     	$scope.adminLogin = function(){
	                                     		$http({
	                                     			method: "POST",
	                                     			url: "/api/admin",
	                                     			data: $scope.admin
	                                     		}).then(function(data) {  			
							localStorage.setItem('jwt', data.data.jwt);
							$scope.admin.id = data.data.jwt;
	         						$scope.isAdmin = true;
	         						$scope.showModal = false; 
	                                     		}).catch(function(err){
	                                     			console.log(err.message);
	                                     		});
	                                     	}

	                                     	//Admin sign-out
	                                     	$scope.adminLogout = function() {
	                                     		localStorage.removeItem('jwt');
	                                     		$scope.isAdmin = false;
	                                     		$scope.admin = {};
	                                     		$location.path('/');
	                                     	}


	                                     	$scope.setTech = function(value) {
	                                     	    if($scope.project.tech.indexOf(value) === -1){
	                                     	    	$scope.project.tech.push(value);
	                                     	    }
	                                     	  };

	                                     	$scope.projectSubmit = function(form){
	                                     		if(form.$valid){
	                                     			$http({
	                                     				method:'POST',
	                                     				url:'/api/projects',
	                                     				data: $scope.project
	                                     			}).then(function(data){
	                                     				console.log(data);
	                                     				
	                                     			}).catch(function(err){
	                                     				console.log(err.message);
	                                     			});
	                                     		}
	                                     	}

	                                     	$scope.addMember = function(name, link){
	                                     		angular.element('.projectTeam').append('<div class="projectTeam"><input class="form-control" type="text" ng-model="teamMember" name="teamMember" placeholder="Steve Jobs"><input class="form-control" type="text" ng-model="teamMemberLink" name="teamMemberLink" placeholder="www.linkedin.com/stevejobs"></div>');

	                                     		var teamInput = angular.element('.projectTeam :input');
	                                     	
	                                     		for(var i=0; i<teamInput.length; i+=2){
	                                     			//name
	                                     			var name = teamInput[i].value;
	                                     			var link = teamInput[i+1].value;

	                                     			//push to team member array
	                                     			if(!$scope.project.team[name] && name !== ''){
	                                     			     $scope.project.team[name] = [name, link]	
	                                     			}
	                                     		}	                                     		
	                                     	}
}]);