//realizamos una funcion para realizar las operaciones matematicas con los datos ingresados
function operaciones()
{
    tamaño=(document.getElementById("nombre").value).length;
    document.getElementById("limite").value=50-tamaño;
    longitud = parseFloat(document.getElementById("longitud").value),
	ancho = parseFloat(document.getElementById("ancho").value),
	altura = parseFloat(document.getElementById("altura").value),
	horizontal = parseFloat(document.getElementById("horizontal").value),
	vertical = parseFloat(document.getElementById("vertical").value),
	desperdicio = parseFloat(document.getElementById("desperdicio").value),
	desperdicio2= parseFloat(document.getElementById("desperdicio2").value);
	//comprobamos que los datos obtenidos y realizamos las operaciones matematicas de la pestaña "Cantidad"
	if(longitud>0 && longitud<101 && ancho>0 &&ancho<101 && altura>0 && altura<101 && horizontal>0 && horizontal<6 && vertical>0 && vertical<6 && desperdicio>0&&desperdicio<16)
	{	
	 var	soga1 = (10000/((longitud+horizontal)*(altura+vertical))),
		cabeza1= (10000/((ancho+horizontal)*(altura+vertical))),
		canto1 = (10000/((longitud+horizontal)*(ancho+vertical))),
		soga2 = (soga1*desperdicio/100)+soga1,
		cabeza2 = (cabeza1*desperdicio/100)+cabeza1,
		canto2 =  (canto1*desperdicio/100)+canto1;
        document.getElementById("valor-soga1").value=soga1.toFixed(1);
		document.getElementById("valor-cabeza1").value=cabeza1.toFixed(1);
		document.getElementById("valor-canto1").value=canto1.toFixed(1);
		document.getElementById("valor-soga2").value=Math.ceil(soga2);
		document.getElementById("valor-cabeza2").value=Math.ceil(cabeza2);
		document.getElementById("valor-canto2").value=Math.ceil(canto2);
		//esta es la parte de la pestaña mezcla donde se rellenara con los valores que se ingrese en la pestaña cantidad			
		soga3=( (ancho/100)-(soga1*( (longitud/100)*(ancho/100)*(altura/100) )));		
		cabeza3=( (longitud/100)-(cabeza1*( (longitud/100)*(ancho/100)*(altura/100) )));
		canto3=( (altura/100)-(canto1*( (longitud/100)*(ancho/100)*(altura/100) )) );
		document.getElementById("m-soga1").value=soga3.toFixed(4);		 
		document.getElementById("m-cabeza1").value=cabeza3.toFixed(4);
		document.getElementById("m-canto1").value=canto3.toFixed(4);
		document.getElementById("desperdicio2").disabled=false;							






	}else{
		//si los datos no cumplen o se borraron algun dato automaticamente borramos todos los valos de los inputs
		document.getElementById("valor-soga1").value="";
		document.getElementById("valor-cabeza1").value="";
		document.getElementById("valor-canto1").value="";
		document.getElementById("valor-soga2").value="";
		document.getElementById("valor-cabeza2").value="";
		document.getElementById("valor-canto2").value="";
		document.getElementById("m-soga1").value="";		 
		document.getElementById("m-cabeza1").value="";
		document.getElementById("m-canto1").value="";
		document.getElementById("desperdicio2").disabled=true;
	}	
	//comprobamos los datos obtenidos de la pestaña mezcla y ccantidad ya que los dos se relacionan	
	if (desperdicio2>0&&desperdicio2<26&&soga1>0&&cabeza1>0&&canto1>0) 
	{
		canto4=( ((canto3*desperdicio2)/100)+canto3 );
		soga4=( ( (soga3*desperdicio2)/100)+soga3);
		cabeza4=( ((cabeza3*desperdicio2)/100)+cabeza3 );
		document.getElementById("m-soga2").value=soga4.toFixed(4);
		document.getElementById("m-cabeza2").value=cabeza4.toFixed(4);
		document.getElementById("m-canto2").value=canto4.toFixed(4);

		document.getElementById("mezclaa").disabled=false;
		document.getElementById("cementoo").disabled=false;
		document.getElementById("arenaa").disabled=false;
		document.getElementById("aguaa").disabled=false;
		document.getElementById("arenaa2").disabled=false;
		document.getElementById("airee").disabled=false;
	}else{
		document.getElementById("m-soga2").value="";
	    document.getElementById("m-cabeza2").value="";
		document.getElementById("m-canto2").value="";
		//bloqueamos los inputs de la apestaña mezcla ya que no se puede ingresar valores si no hay valores en la pestaña "Cantidad"
	    document.getElementById("mezclaa").disabled=true;
		document.getElementById("cementoo").disabled=true;
		document.getElementById("arenaa").disabled=true;
		document.getElementById("aguaa").disabled=true;
		document.getElementById("arenaa2").disabled=true;
		document.getElementById("airee").disabled=true;
		 }
		/*-------------------------------------------------------------*/
		 mezclaa = parseFloat(document.getElementById("mezclaa").value);
		cementoo = parseFloat(document.getElementById("cementoo").value);
		arenaa = parseFloat(document.getElementById("arenaa").value);
		aguaa = parseFloat(document.getElementById("aguaa").value);
		arenaa2 = parseFloat(document.getElementById("arenaa2").value);
		airee = parseFloat(document.getElementById("airee").value);
		aguacemento = parseFloat(document.getElementById("aguacemento").value);
		//comprobamos que se hayan ingresado los datos en la pestaña mezcla para realizar las operaines
		if(soga1>0&&desperdicio2>0&&desperdicio2<=25 && mezclaa>0 && mezclaa<=8 && cementoo>=2500 && cementoo<=4000 && arenaa>=1500 && arenaa<=3501 && aguaa>=900 && aguaa<=1200 && arenaa2>=1000 && arenaa2<=2000 && airee>0 && airee<=10 && aguacemento>0 )
		{
			redondeocemento=42.5,
		    redondeoarena=(mezclaa*arenaa2)/35.315,
			sumaredondeo=redondeoarena+redondeocemento,

			resultrendcemento12=redondeocemento/cementoo,
			resultrendarena12=redondeoarena/arenaa,
			resultrendagua12=(redondeocemento*aguacemento)/aguaa,
			sumaresult12=(resultrendcemento12+resultrendarena12+resultrendagua12),
			aireresult12=(sumaresult12*airee)/100,
			totalresult12=(sumaresult12+aireresult12),

			resultadosoga1=(soga4/totalresult12),
			resultadosoga2=(mezclaa/35.315)*resultadosoga1,
			resultadosoga3=(redondeocemento*resultadosoga1*aguacemento)/1000,
			resultadocabeza1=(cabeza4/totalresult12),
			resultadocabeza2=(mezclaa/35.315)*resultadocabeza1,
			resultadocabeza3=(redondeocemento*resultadocabeza1*aguacemento)/1000,
			resultadocanto1=(canto4/totalresult12),
			resultadocanto2=(mezclaa/35.315)*resultadocanto1,
			resultadocanto3=(redondeocemento*resultadocanto1*aguacemento)/1000;

			document.getElementById("resultcemento").value=redondeocemento.toFixed(1);
			document.getElementById("resultarena").value=redondeoarena.toFixed(1);
			document.getElementById("sumaredondeo").value=sumaredondeo.toFixed(1);
			document.getElementById("rendcemento1").value=redondeocemento.toFixed(1);
			document.getElementById("rendcemento2").value=cementoo;
			document.getElementById("rendarena1").value=redondeoarena.toFixed(1);
			document.getElementById("rendarena2").value=arenaa;
			document.getElementById("rendagua1").value=redondeocemento.toFixed(1);
			document.getElementById("rendagua2").value=aguacemento;
			document.getElementById("rendagua3").value=aguaa;
			document.getElementById("resulrendcemento12").value=resultrendcemento12.toFixed(4);
			document.getElementById("resulrendarena12").value=resultrendarena12.toFixed(4);
			document.getElementById("resulrendagua12").value=resultrendagua12.toFixed(4);
            
			document.getElementById("sumaresul12").value=sumaresult12.toFixed(4);
			document.getElementById("aireresult12").value=aireresult12.toFixed(4);
			document.getElementById("totalresult12").value=totalresult12.toFixed(4);
            
			document.getElementById("resultadosoga1").value=resultadosoga1.toFixed(4);
			document.getElementById("resultadosoga2").value=resultadosoga2.toFixed(4);
			document.getElementById("resultadosoga3").value=resultadosoga3.toFixed(4);
			document.getElementById("resultadocabeza1").value=resultadocabeza1.toFixed(4);
			document.getElementById("resultadocabeza2").value=resultadocabeza2.toFixed(4);
			document.getElementById("resultadocabeza3").value=resultadocabeza3.toFixed(4);
			document.getElementById("resultadocanto1").value=resultadocanto1.toFixed(4);
			document.getElementById("resultadocanto2").value=resultadocanto2.toFixed(4);
			document.getElementById("resultadocanto3").value=resultadocanto3.toFixed(4);
		}else{
			document.getElementById("resultcemento").value="";
			document.getElementById("resultarena").value="";
			document.getElementById("sumaredondeo").value="";
			document.getElementById("rendcemento1").value="";
			document.getElementById("rendcemento2").value="";
			document.getElementById("rendarena1").value="";
			document.getElementById("rendarena2").value="";
			document.getElementById("rendagua1").value="";
			document.getElementById("rendagua2").value="";
			document.getElementById("rendagua3").value="";
			document.getElementById("resulrendcemento12").value="";
			document.getElementById("resulrendarena12").value="";
			document.getElementById("resulrendagua12").value="";
			document.getElementById("sumaresul12").value="";
			document.getElementById("aireresult12").value="";
			document.getElementById("totalresult12").value="";
			document.getElementById("resultadosoga1").value="";
			document.getElementById("resultadosoga2").value="";
			document.getElementById("resultadosoga3").value="";
			document.getElementById("resultadocabeza1").value="";
			document.getElementById("resultadocabeza2").value="";
			document.getElementById("resultadocabeza3").value="";
			document.getElementById("resultadocanto1").value="";
			document.getElementById("resultadocanto2").value="";
			document.getElementById("resultadocanto3").value="";
		}
	
}
var temporizador1=setInterval(function(){verificar()},100);
decimal = function(){
		if(document.getElementById("longitud").value>0){
			document.getElementById("longitud").value=longitud.toFixed(2);
		}
		if(document.getElementById("ancho").value>0){
			document.getElementById("ancho").value=ancho.toFixed(2);
		}
		if(document.getElementById("altura").value>0){
			document.getElementById("altura").value=altura.toFixed(2);
		}
		if(document.getElementById("horizontal").value>0){
			document.getElementById("horizontal").value=horizontal.toFixed(2);
		}
		if(document.getElementById("vertical").value>0){
			document.getElementById("vertical").value=vertical.toFixed(2);
		}
		if(document.getElementById("desperdicio").value>0){
			document.getElementById("desperdicio").value=desperdicio.toFixed(2);
		}
		if(document.getElementById("desperdicio2").value>0){
			document.getElementById("desperdicio2").value=desperdicio2.toFixed(2);
		}
}
function saltar(e,id)
{
	//el unico cambio que hice fue en los inputs para ingresar datos  onkeyup="saltar(event,'id')"
	// Obtenemos la tecla pulsada
	(e.keyCode)?k=e.keyCode:k=e.which;//para verificar que tecla presionamos
 
	// Si la tecla pulsada es enter (codigo ascii 13)
	if(k==113)
	{
		nuevo();
	}
	if(k==114)
	{
		editarTarea();
	}
	if(k==115)
	{
		eliminarTarea();
	}
	if(k==13)
	{
		decimal();	
	if(id=="mezcla") //en el ultimo input de desperdicio al presionar enter nos saltara al div mezcla como si lo clickearamos
	{
		$('.cabecera').removeClass('activar-c');
		$('.cabecera').eq(1).addClass('activar-c');
		$(".cantidad").removeClass('activar-p');
		$(".mezcla").addClass('activar-p');
		$('.leyenda').removeClass('activar-l');
		$('.leyenda').eq(1).addClass('activar-l');
		document.getElementById("desperdicio2").focus();
	}
	else
	{// nos posicionamos en el siguiente input
		document.getElementById(id).focus();
	}
	$('.cant2,.mezcla').find("input").on('click', function(){decimal();})
	$('.cabecera').on('click', function(){
		if(document.getElementById("desperdicio2").value>0){
			document.getElementById("desperdicio2").value=desperdicio2.toFixed(2);
		}
		if(document.getElementById("desperdicio").value>0){
		document.getElementById("desperdicio").value=desperdicio.toFixed(2);}
	})
		
	}
}