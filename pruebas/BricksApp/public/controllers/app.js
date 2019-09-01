(function(){
	"use strict";
	var app = angular.module("bricksApp",["ui.router","commonService","ngMessages","ngCookies","ngIdle","ui.bootstrap"])
		app.filter('startFrom', function() {
	    return function(input, start) {
	        if(input) {
	            start = +start; //parse to int
	            return input.slice(start);
	        }
	        return [];
	    }
	});
		app.run(function ($location, $rootScope, $cookieStore) {
		$rootScope.$on('$locationChangeStart', function(event,next, fromUrl) {
			if($cookieStore.get("estaConectado")==false || $cookieStore.get("estaConectado")==undefined){
	    		if(next=='http://localhost:8000/#!/bricksApp'){
	    			$location.path('/bricksApp/login');
	    		}
	    	}else{
	    		if(next=='http://localhost:8000/#!/bricksApp/login'){
	    			$location.path('/bricksApp');
	    		}
	    	}
		});
	});
	app.config(function($stateProvider,$urlRouterProvider,KeepaliveProvider, IdleProvider){

		$urlRouterProvider.otherwise("/bricksApp/login");

		IdleProvider.idle(600);
		IdleProvider.timeout(5);
		KeepaliveProvider.interval(10);
		// definimos las vistas con ui.
		$stateProvider
		   	.state('login',{
			   	url: '/bricksApp/login',
			   	templateUrl:'/views/user/index.html',
			   	controller: "LoginCtrl as vn"
		   	})
		   	.state('home',{
			   	url: '/bricksApp',
			   	templateUrl:'/views/main/index.html',
			   	controller: "ItemsCtrl as vm",
		   	})
		   	.state('home.view',{
		   		url: '/:idBricks'
		   	})
		   	.state('home.new',{
		   		url: '/new'
		   	})
		   	.state('home.view.edit',{
		   		url: '/edit',
		   	})
		  	.state('home.view.reporte',{
		   		url: '/reporte',
		   		templateUrl:'/views/pdf/pdf.html',
		   		controller: "PdfCtrl as vmPdf"
		   	})
	});
}());