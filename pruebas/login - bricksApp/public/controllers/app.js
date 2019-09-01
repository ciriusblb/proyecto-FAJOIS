(function(){
	"use strict";
	var app = angular.module("bricksApp",["ui.router","commonService","ngMessages","ngCookies","ngIdle","ui.bootstrap"])
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
			   	controller: "LoginCtrl as vm"
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
		   	.state('view.remove',{
		   		url: '/remove'
		  	});
	});
}());