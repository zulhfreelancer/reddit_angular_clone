var app = angular.module("reddit", []);

app.controller("MainCtrl", ["$scope", function($scope){

	$scope.posts = [
		{title: 'post 1', upvotes: 1},
		{title: 'post 2', upvotes: 2},
		{title: 'post 3', upvotes: 3}
	];

	$scope.addPost = function(){
		// if user add blank title, stop this function execution
		if(!$scope.title || $scope.title === '') { 
			return;
		}

		$scope.posts.push({
			title: $scope.title,
			upvotes: 4
		});

		// clear the input
		$scope.title = '';
	};

}]);