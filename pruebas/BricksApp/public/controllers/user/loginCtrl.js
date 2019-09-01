(function(){
	"use strict";

	angular.module("bricksApp")
		.controller("LoginCtrl",LoginCtrl);
	function LoginCtrl($scope,UserResource,$state,$q,$log,$cookieStore,$interval){

		var me = this;

		//autenticación de usuario
		var iniciarSesion = $q.defer();
		iniciarSesion.promise.then(userASesion);
		function userASesion(user){
			$scope.userConectado.names=user.names;
			$scope.userConectado.last_names=user.last_names;
			$scope.userConectado.email=user.email;
			$scope.userConectado.conectado=true;
			$log.info("info ",$scope.userConectado);
			$cookieStore.put("estaConectado",true);
			$cookieStore.put("usuario",user);
			$state.go("home");
		};
		//fin de autenticación de usuario

		me.registro = {
			names :"",
			last_name:"",
			email:"",
			password:""
		};
		me.logueo={
			email:"",
			password:""
		};

		//funcion para la verificación de emails existentes
		me.Email = function(){
			$("#divEmail").removeClass('has-error');
	        $("#span").html('');
			if(me.registro.email){
				UserResource.get({email: me.registro.email})
	              	.$promise.then(function(user) {
	              	if(user.email==me.registro.email){
	              		$("#divEmail").addClass('has-error');
	              		$("#span").html('<span>La dirección de correo electrónico ya existe</span>');
	              	}
	              	else{
	              		$("#divEmail").removeClass('has-error');
	              		$("#span").html('');
	              	}
	            }); 
	     	}
	     	return false;
    	};
    	//fin funcion para la verificación de emails existentes

		//funcion para registrar usuario
		me.registrar = function(){
			console.log("wewwg ",me.registro);
			if(me.registro.names!="" && me.registro.last_name!="" && me.registro.email!="" && me.registro.password!="" && !$("#divEmail").hasClass('has-error') && $("#pswd_info .invalid").length==0)
			{

				UserResource.email({email: me.registro.email})
		            .$promise.then(function(code){
		            	swal({
							title: 'Ingrese código de validacion',
							input: 'text',
							showCancelButton: true,
							confirmButtonText: 'Submit',
							showLoaderOnConfirm: true,
							preConfirm: function (text) {
							    return new Promise(function (resolve, reject) {
							      	setTimeout(function() {
							        if (text === code.text) {
							        	console.log(me.registro);
						                UserResource.save(me.registro)
						                	.$promise.then(function(code){
							                 	console.log("code ",code);
							                 	me.registro={};
						                });
							          	resolve()
							        } else {
							          	reject("Código devalidación incorrecto");
							        }
							      }, 2000)
							    })
						  	},
						allowOutsideClick: false
						}).then(function (text) {
							swal({
							    type: 'success',
							    title: '¡Bienvenido!',
							    html: 'Usuario ' + me.registro.names
							})
						},function (dismiss) {
						  	if (dismiss === 'cancel') {
							    swal(
							      	'Cancelled',
							      	'Your imaginary file is safe :)',
							      	'error'
							    )

						 	}

						})
		        }); 
	        }
	        else{
	        	swal("Oops...", "Complete correctamente el formulario", "error");
	        } 
	        return false;
		};
		//fin funcion para registrar usuario

		//funcion para trnasformar la primera letra en mayuscula
		me.Capitalletter=function(string,num){
			if(string){
				switch(num){
					case 1: me.registro.names= string.charAt(0).toUpperCase() + string.slice(1); break;
					case 2: me.registro.last_name= string.charAt(0).toUpperCase() + string.slice(1); break;
				};
			}
		};
		//fin funcion para trnasformar la primera letra en mayuscula

		//funcion para el inicio de sesion
		var i=0;
		me.sesion=function(){
			if(me.logueo.email!="" && me.logueo.password!=""){
				console.log(me.logueo);
			 UserResource.query({email:me.logueo.email,password:me.logueo.password})
              	.$promise.then(function(user) {
	              	if(i>2){
	              		toastr . info ( ' Primero Registrese ' , ' bricksApp say ' );
	              		i=0;
	              		me.logueo.email="";
	              		me.logueo.password="";
	              		$("#nombre").focus();
	              	}else{
	              		if(!user.email || !user.password){
							toastr . error ( ' Correo electrónico o contraseña incorrecto ' , ' bricksApp say ',{
								  closeButton :  true 
							});
							i++;
		              	}else{
		              		me.logueo.password="";
		              		i=0;
		              		iniciarSesion.resolve(user);
	              		}
	              	}
              	}); 
	        }else{
	          	if(me.logueo.email==""){
	          		toastr.options.showMethod = 'slideDown';
	          		toastr.options.hideMethod = 'slideUp';
	                toastr . info ( ' Ingrese un correo electrónico ' , ' bricksApp say ' );
	            }else{
	            	toastr . info ( ' Ingrese una contraseña ' , ' bricksApp say ' );
	            }
	        }
			return false;
		};
		//fin de funcion para el inicio de sesion


	}
}());