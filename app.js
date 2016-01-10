var app = angular.module("reddit", []);

app.controller("MainCtrl", ["$scope", "postsFactory", function($scope, postsFactory){

	$scope.posts = postsFactory.posts;

	$scope.addPost = function(){
		// if user add blank title, stop this function execution
		if(!$scope.title || $scope.title === '') { 
			return;
		}

		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 4
		});

		// clear the input
		$scope.title 	= '';
		$scope.link 	= '';
	};

	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	};

}]);

app.factory("postsFactory", [function(){
	/*
	creating a new object that has an array property called 'posts'.
	We then return that variable so that our o object essentially becomes exposed
	to any other Angular module that cares to inject it
	*/
	var obj = {
		posts: [
			{title: 'post 1', upvotes: 1},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 3}
		]
	};
	return obj;
}]);
