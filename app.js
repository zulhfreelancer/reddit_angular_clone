var app = angular.module("reddit", []);

app.controller("MainCtrl", ["$scope", function($scope){

	$scope.posts = [
		{title: 'post 1', upvotes: 1},
		{title: 'post 2', upvotes: 2},
		{title: 'post 3', upvotes: 3}
	];
	
}]);