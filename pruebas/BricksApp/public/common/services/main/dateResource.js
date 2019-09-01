(function(){
	"use strict";
	angular.module('commonService')
	  .factory('DateResource',DateResource);
	  
	function DateResource($resource)
	{
		this.datas=[];
		console.log("this.datas ",this.datas);
		return $resource('/bricksApp/:idBricks',{idBricks:'@id'}, { 
			'get':    {method:'GET'},
			'query': { method: 'GET', isArray: true},
            'update': { method: 'PUT',url:'/edit'},
	        'save': { method: 'POST',url:'/new'},
	        'remove': { method:'DELETE',url:'/remove'}
		});	

	};

}());