ariApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams) {

$scope.client = {};

$scope.info = function(){
	$http({
		method: "POST",
		url: "/api/clients",
		data: $scope.client
	})
}
	
}]);