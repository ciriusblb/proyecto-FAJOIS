

 btnregistrar=document.getElementById("btnregistrar");
 btnregistro=document.getElementById("abrirregistro");
(function(){
	borrar=function(){
		$('.bub1,.bub2,.bub3,.bub4,.bub5,.bub6').removeClass("alerta");
	}
	registrar= function(){
		$('.bub1,.bub2,.bub3,.bub4').removeClass("alerta");
		var nombre =document.getElementById("nombre").value,
		    apellidos=document.getElementById("apellidos").value,
		    correo=document.getElementById("correo").value,
		    contrasena=document.getElementById("clave2").value;
    if(nombre.length<4 ||/^\s+$/.test(nombre)|| !/^[A-Za-z\s\xF1\xD1]+$/.test(nombre)){
    	$('.bub1').addClass("alerta");
    	document.getElementById("nombre").value="";
    	document.getElementById("nombre").focus();
    	return false;
    }
	if (apellidos.length<4 ||/^\s+$/.test(apellidos)|| !/^[A-Za-z\s\xF1\xD1]+$/.test(apellidos)){
		$('.bub2').addClass("alerta");
		document.getElementById("apellidos").value="";
    	document.getElementById("apellidos").focus();
			return false;  	
		}
	if (correo.length==0||/^\s+$/.test(correo)||!(/\S+@\S+\.\S+/.test(correo)) ) {
		$('.bub3').html("¡Escriba un correo valido");
		$('.bub3').addClass("alerta");
		document.getElementById("correo").value="";
    	document.getElementById("correo").focus();
		return false;
	}
	if(contrasena.length<6|| /^\s+$/.test(contrasena))
	{
    	document.getElementById("clave2").focus();
		$('.bub4').addClass("alerta");
		return false
	}	   	
		$.ajax({
			type:'POST',
			url:'Php/registrar.php',
			dataType:'json',
			data:"nombre="+nombre+"&apellidos="+apellidos+"&correo="+correo+"&contrasena="+contrasena,
			success: function(datos1){
				var resultado=eval(datos1);
				if(resultado[0][0]=="incorrecto")
				{
					$('.bub3').html("El correo "+correo+" ya esta registrado");
					$('.bub3').addClass("alerta");					
					document.getElementById("correo").value="";
					document.getElementById("correo").focus();
				}else{
					location.reload();
				}
			    },			
			});
	return false;
}
	iniciar= function(){
		$('.bub5,.bub6').removeClass("alerta");
		var usuario=document.getElementById("usuario").value,
		    contrasena=document.getElementById("clave").value;
	if (usuario.length == 0|| /^\s+$/.test(usuario) ){
		document.getElementById("usuario").value="";
		$('.bub5').html("¡Escriba un correo electronico!");
		$('.bub5').addClass("alerta");
		document.getElementById("usuario").focus();
			return false;
	   }
	 if (contrasena.length == 0){
	 	$('.bub6').html("¡Escriba una contraseña!");
		$('.bub6').addClass("alerta");
		document.getElementById("clave").focus();
			return false;
	}

		$.ajax({
				type:'POST',
				url:'Php/sesion.php',
				data: "usuario="+usuario+"&contrasena="+contrasena,
				dataType: 'json',
				success: function(datos){
					var  resultado=eval(datos);

					if(resultado[0][0]==null)
					{
						document.getElementById("usuario").value="";
						$('.bub5').html("¡El correo no coincide con ninguna cuenta!");
		                $('.bub5').addClass("alerta")
						document.getElementById("usuario").focus();
						document.getElementById("clave").value="";
					}else{
						if(resultado[0][2]!=resultado[0][1] )
						{
							document.getElementById("clave").value="";
							document.getElementById("clave").focus();
							$('.bub6').html("¡La contraseña es incorrecta!");
		                    $('.bub6').addClass("alerta");
						}else{
							sesion_id = resultado[0][0];
							localStorage.setItem("nombre_variable",sesion_id);
							document.fvalida.submit();
						}
					}
					
				},
		 });
		return false;
	}

	desplegar=function(){
        $("#seccion1").removeClass('desplegar1').addClass('seccion1');
        $("#seccion2").removeClass('desplegar2').addClass('seccion2');
        $("#abrirregistro").addClass('remove');
        
    }

    var inputs = document.getElementsByClassName('input-100');
    for(var i = 0; i < inputs.length; i++)
    {
        inputs[i].addEventListener('keyup', function(){
            if(this.value.length>=1)
            {
                this.nextElementSibling.classList.add('fijar');
            }
            else{
                this.nextElementSibling.classList.remove('fijar');
            }
        });
    }
	btnregistro.addEventListener("click",desplegar);
}());