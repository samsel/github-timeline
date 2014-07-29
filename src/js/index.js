define(['ionic', 'mock'], function (ionic, mock) {

	mock = mock[0].children;

	var app = angular.module('bukmarkz', ['ionic']);

	app.config(function($stateProvider, $urlRouterProvider) {

	  $stateProvider

	  .state('page', {
	      url: "/page",
	      templateUrl: "page.html",
	      controller : "PageController"
	    })
	  
	   $urlRouterProvider.otherwise("page");
	});

	app.controller('PageController', function($scope) {

		$scope.bookmarks = mock;

		$scope.nextPage = function (bookmark) {
			console.log(bookmark);
		};

	});

	app.run(function () {
		ionic.DomUtil.ready(function () {
			console.log(mock);
		});
	});
});