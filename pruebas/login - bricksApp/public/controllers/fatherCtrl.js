(function(){
	"use strict";
	angular.module("bricksApp")
		.controller("FatherCtrl",FatherCtrl);
	function FatherCtrl($scope,$cookieStore){
    
		var me = this;
      me.titulo="romario";
      $scope.userConectado={
       	names:"",
       	last_names:"",
       	email:"",
       	conectado:""
      };

    var usr = $cookieStore.get('usuario');
    if (usr != null) {
      $scope.userConectado.names = usr.names;
      $scope.userConectado.last_names = usr.last_names;
      $scope.userConectado.email = usr.email;
      $scope.userConectado.conectado = true;
    };

	}
}());