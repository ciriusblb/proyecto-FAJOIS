(function(){
	"use strict";
	var app = angular.module("bricksApp",["ngMessages","ui.router"]);
	
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("BricksApp")

		$stateProvider
			.state("BricksApp",{
				url:"/"
			})
			.state("Cantidad",{
				url: "/BricksApp/Cantidad",
				templateUrl: "app/controllers/cantidadView.html"
			})
			.state("Mezcla",{
				url: "/BricksApp/Mezcla",
				templateUrl:"app/controllers/mezclaView.html"
			})
	});

}());