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

	    .state('ourSolution', {
	      url: "/ourSolution",
	      templateUrl: "partials/ourSolution.html"
	    })

	    .state('getInvolved', {
	      url: "/getInvolved",
	      templateUrl: "partials/getInvolved.html"
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

	    .state('qualityEducation', {
	      url: "/qualityEducation",
	      templateUrl: "partials/qualityEducation.html"
	    })

	    .state('outOfSchoolProject', {
	      url: "/outOfSchoolProject",
	      templateUrl: "partials/outOfSchoolProject.html"
	    })

	    .state('studentOnline', {
	      url: "/studentOnline",
	      templateUrl: "partials/studentOnline.html"
	    })

	    .state('blogDetails', {
	      url: "/blogDetails",
	      templateUrl: "partials/blogDetails.html"
	    })

	    .state('error', {
	      url: "/error",
	      templateUrl: "404.html"
	    })

	});