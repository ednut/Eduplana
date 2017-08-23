	angular.module('myApp.controllers', []);
	angular.module('myApp.models', []);
	var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.models']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "partials/home.html"
	    })

	    .state('about', {
	      url: "/about",
	      templateUrl: "partials/about.html"
	    })

	    .state('data', {
	      url: "/data",
	      templateUrl: "partials/data.html"
	    })

	    .state('infographics', {
	      url: "/infographics",
	      templateUrl: "partials/infographics.html"
	    })

	    .state('contact', {
	      url: "/contact",
	      templateUrl: "partials/contact.html"
	    })

	    .state('blog', {
	      url: "/blog",
	      templateUrl: "partials/blog.html"
	    })

	    .state('blogDetails', {
	      url: "/blog",
	      templateUrl: "partials/blogDetails.html"
	    })

	    .state('error', {
	      url: "/error",
	      templateUrl: "404.html"
	    })

	});