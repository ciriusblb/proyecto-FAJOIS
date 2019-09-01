(function(){
	"use strict";
	angular.module('commonService')
	  	.factory('UserResource',UserResource);
	  
	function UserResource($resource)
	{
		return $resource('/login/',{idBricks:'@id'}, { 
			'get': {method:'GET',url:'/email'},
			'query': { method: 'GET',url:'/sesion'},
	        'save': { method: 'POST',url:'/registro'},
	        'email': {method: 'GET',url:'/sendEmail'}
		});
	};

}());