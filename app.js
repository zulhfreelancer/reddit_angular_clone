var app = angular.module("reddit", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
		.state('posts', {
			url: '/posts/:id',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});

	$urlRouterProvider.otherwise('home');

}]);

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
			upvotes: 4,
			comments: [
				{author: 'Joe', body: 'Hello!', upvotes: 0},
				{author: 'Bob', body: 'Hi!', upvotes: 0}
			]
		});

		// clear the input
		$scope.title 	= '';
		$scope.link 	= '';
	};

	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	};

}]);

app.controller("PostsCtrl", ["$scope", "$stateParams", "postsFactory", function($scope, $stateParams, postsFactory){
	// grab the right post from postsFactory posts array
	$scope.post = postsFactory.posts[$stateParams.id];
	console.log($scope.post);

	$scope.addComment = function(){
	  // stop this function if comment body is empty
	  if($scope.body === '') {
	  	return;
	  }
	  $scope.post.comments.push({
	    body: $scope.body,
	    author: 'user',
	    upvotes: 0
	  });

	  // clear the input field
	  $scope.body = '';
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
			{
				title: 'post 1',
				upvotes: 1,
				comments: [
					{author: 'Joe', body: 'Hello!', upvotes: 0},
					{author: 'Bob', body: 'Hi!', upvotes: 0}
				]
			},
			{
				title: 'post 2',
				upvotes: 2,
				comments: [
					{author: 'Joe', body: 'Hello!', upvotes: 0},
					{author: 'Bob', body: 'Hi!', upvotes: 0}
				]
			},
			{
				title: 'post 3',
				upvotes: 3,
				comments: [
					{author: 'Joe', body: 'Hello!', upvotes: 0},
					{author: 'Bob', body: 'Hi!', upvotes: 0}
				]
			}
		]
	};
	return obj;
}]);
