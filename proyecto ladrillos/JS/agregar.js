var inputs = $('.cantidad');
    bloqueo=inputs.find('input');
    bloqueo.attr("disabled","disabled");
    b=0;
    c=-1;
    e=0;

    document.getElementById("desperdicio2").disabled=true;
    document.getElementById("mezclaa").disabled=true;
	document.getElementById("cementoo").disabled=true;
	document.getElementById("arenaa").disabled=true;
	document.getElementById("aguaa").disabled=true;
	document.getElementById("arenaa2").disabled=true;
	document.getElementById("airee").disabled=true;

(function () {
	var btnreporte=document.getElementById("btn_reporte");
	var btncerrar=document.getElementById("btn-no-exportar");
    session_id=localStorage.getItem("nombre_variable");
	verificarinput =function(m){
		if(!/^([0-9])*[.]?[0-9]*$/.test(m.value))
		{
			document.getElementById(m.id).value=null;
		}
	}
	reporte2=function(){
		valores();
		location.href="Php/reporte.php?formato="+formato+"&diseño="+diseño+"&nombre="+nombrepdf+"&usuario="+usuario+"&lugar="+lugar+"&longitud="+long.value+"&ancho="+anch.value+"&altura="+altu.value+"&horizontal="+hori.value+"&vertical="+vert.value+"&desperdicio="+desp.value+"&valorsoga1="+valorsoga1+"&valorcabeza1="+valorcabeza1+"&valorcanto1="+valorcanto1+"&desperdicio2="+m_de.value+"&msoga1="+msoga1+"&msoga2="+msoga2+"&mcabeza1="+mcabeza1+"&mcabeza2="+mcabeza2+"&mcanto1="+mcanto1+"&mcanto2="+mcanto2+"&mezclaa="+mezc.value+"&cementoo="+ceme.value+"&arenaa="+aren.value+"&aguaa="+agua.value+"&arenaa2="+are2.value+"&airee="+aire.value+"&aguacemento="+agce.value+"&ladrillo_soga="+sogal.value+"&ladrillo_cabeza="+cabezal.value+"&ladrillo_canto="+cantol.value+"&resultcemento="+resultcemento+"&resultarena="+resultarena+"&sumaredondeo="+sumaredondeo+"&resulrendcemento12="+resulrendcemento12+"&resulrendarena12="+resulrendarena12+"&resulrendagua12="+resulrendagua12+"&sumaresul12="+sumaresul12+"&aireresult12="+aireresult12+"&totalresult12="+totalresult12+"&soga_cemento="+sogac.value+"&soga_arena="+sogaar.value+"&soga_agua="+sogaag.value+"&cabeza_cemento="+cabezac.value+"&cabeza_arena="+cabezaar.value+"&cabeza_agua="+cabezaag.value+"&canto_cemento="+cantoc.value+"&canto_arena="+cantoar.value+"&canto_agua="+cantoag.value;
		//location.href="ingresopresupuestario.php?proced="+cproce=+d;
		
	}
	var jjj=document.getElementById('btn-exportar');
	jjj.addEventListener('click',reporte2);

	pestañas=function(){
		        var linksParent = $('.cabecera');
				var pestanas = $(".cantidad,.mezcla");
				var leyenda =$('.leyenda');
				linksParent.eq(0).addClass('activar-c');
				pestanas.eq(0).addClass('activar-p');
				document.getElementById('nombre').focus();
				linksParent.on('click',function(){
					var t = $(this);
					var i = linksParent.index(t);
					$('.cabecera').removeClass('activar-c');
					t.addClass('activar-c');
					$(".cantidad,.mezcla,.imagen").removeClass('activar-p');
					pestanas.eq(i).addClass('activar-p');
					if (i==1) {
						$('.leyenda').removeClass('activar-l');
						leyenda.eq(1).addClass('activar-l');
					}else{
						leyenda.eq(1).removeClass('activar-l');
						leyenda.eq(0).addClass('activar-l');
					}
				});

	}
reporte=function(){
	var fechaHora = new Date();
                var horas = fechaHora.getHours();
                var minutos = fechaHora.getMinutes();
                var segundos = fechaHora.getSeconds();
 
                var sufijo = ' a.m.';
                if(horas > 12) {
                    horas = horas - 12;
                    sufijo = ' p.m.';
                }
 
                if(horas < 10) { horas = '0' + horas; }
                if(minutos < 10) { minutos = '0' + minutos; }
                document.getElementById("hora").innerHTML = horas+':'+minutos+sufijo;
                document.getElementById("hora2").innerHTML = horas+':'+minutos+sufijo;
                
                var dia=fechaHora.getDate();
                var mes=fechaHora.getMonth();
                if(mes<10){mes=mes+1; mes="0"+mes;}
                if(dia<10){ dia="0"+dia;}
                document.getElementById("fecha").innerHTML=dia + "/" + mes + "/" + fechaHora.getFullYear();
                document.getElementById("fecha2").innerHTML=dia + "/" + mes + "/" + fechaHora.getFullYear();
			
	    var bot2=$('.cant1').clone();
	    var bot3=$('.cant2').clone();
	    var bot4=$('.cant30,.cant3').clone();
	    var bot5=$('.mezcla1').clone();
        var bot6=$('.mezcla2').clone();
	    var bot7=$('.mezcla3').clone();
	    var bot8=$('.leyenda').clone();
	    $('.bot2').html(bot2);
	    $('.bot3').html(bot3);
	    $('.bot4').html(bot4);
	    $('.bot5').html(bot5);
        $('.bot6').html(bot6);
        $('.bot7').html(bot7);
        $('.bot8').html(bot8);
		 $('#btn_reporte').removeClass('color').addClass('newcolor');
			$("#map").addClass("abrir-r");
			btncerrar.addEventListener("click",function(){
				$('.bot2,.bot3,.bot4,.bot5,.bot6,.bot7,.bot8').empty();
			$('#btn_reporte').removeClass('newcolor').addClass('color');
			$("#map").removeClass("abrir-r");
			});
		//creamos la funcion mostrar lista que realizara una consulta a la base de datos para extraer los archivos ya guardados
	}
  btnreporte.addEventListener("click",reporte);


	var meLargo;
    function mequedo(){
      clearTimeout(meLargo);
      largarse();
    }
    function largarse(){
      meLargo = setTimeout("location.href='Php/salir.php'", 600000);//5000=5segundossss
    }
    window.onmousemove = mequedo;
    window.onkeydown = mequedo;

    
	mostarlista =function(){
		largarse();
        $('.preload').hide();
		$("#btneditar").hide();
		$("#btneliminar").hide();
		$("#btn_reporte").hide();
		//por el metodo ajax ehjecutamos el archivo "recibir.php"
			$.ajax({
						type:'POST',
						url:'Php/recibir.php',
						data: "id_usuario="+session_id,
						success: function(datos){//recibimos los datos obtenidos en una variable "dataJson"
							var dataJson = eval(datos);
							$("#usuario").html( dataJson[0][28]+" ");
							$("#apellido").html("   "+dataJson[0][29]);
							var name=dataJson[0][1];
							if(name!=null){
							 for (var i = 0; i <dataJson.length; i++) {
							 	//creamos la listas con los datos obtenidos
							 	$("#lista")
								.append
								(
									$('<tr>').addClass('filas')
									.append
									(
										$('<td>').addClass('enumeracion')
										.append
										(
											$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',i+1)
										)
									)
									.append
									(
										$('<td>').addClass('desplegar')
										.append
										(
											$('<a>').text(dataJson[i][1])
											.append 
											(
												$('<span>').addClass('icon-down-open')
											)
											.append 
											(
												$('<span>').addClass('icon-up-open')
											)
										)
									)
								);
						//se encarga de obtener la tabla en una variable y las listas con las clases desplegar
						  }
						}
						  if ($("#lista >tbody >tr").hasClass('filas')){
                              $("#content").hide();
							}
							else{
                                $("#content").show();
							}
						tablas= $('.result');
						posicion= $('.desplegar');
						$('.icon-up-open').hide();	
						  //obtenemos el valor de la lista presionada y luego agregamos una clase a la tabla creadas		
						  posicion.on('click',function(){						 
						  	if(b===0){ 
						  	$("#btneditar").show();
							$("#btneliminar").show();
							$("#btn_reporte").show();
					      	var t = $(this);
						     i= posicion.index(t);
						    if (c!=i&&c>-1) {
						    	$('.icon-up-open').hide();
						    	$('.icon-down-open').show();
                            	$(".result").remove();
                            	e=0;
                            }
                            id_datos=dataJson[i][0];						    
						    posicion.eq(i)
						    .append
						    (
						     $('<table>').addClass('result')/*ÿ al momento de crear la lista la tabla lo coloco a qui basicamente la tabla se esta copiando, vuelvo a crearle la clase result porque en el codigo de arriba solo trae la tabla mas no su clase lo supe cuando lo inspeccioné*/
											.append
											(
												$('<tr>')
												.append
												(
													$('<td>').addClass('description').text("Cantidad de Ladrillos")
												)
												.append
												(
													$('<td>').text("Und")
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][16])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][20])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][24])
													)
												)
											)
											.append
											(
											$('<tr>')
												.append
												(
													$('<td>').addClass('description').text("Cemento")
												)
												.append
												(
													$('<td>').text("Bolsas")
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][17])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][21])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][25])
													)
												))

										 .append
										 (
											$('<tr>')
												.append
												(
													$('<td>').addClass('description').text("Arena")
												)
												.append
												(
													$('<td>').text("m3")
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][18])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][22])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][26])
													)
												)
												)
										 .append
										 (
											$('<tr>')
												.append
												(
													$('<td>').addClass('description').text("Agua")
												)
												.append
												(
													$('<td>').text("m3")
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][19])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][23])
													)
												)
												.append
												(
													$('<td>')
													.append
													(
														$('<input>').attr('type', 'text').attr('disabled', 'disabled').attr('value',dataJson[i][27])
													)
												)
											)			
							)
                            tablas= $('.result');				   
						    tablas.eq(0).slideToggle( 40,function() {
						    	if(e==0)
						    	{
					      			$('.icon-down-open').eq(i).hide();
					      			$('.icon-up-open').eq(i).show();
					      			e++;
                                    btnreporte.addEventListener("click",reporte);
							     	btneditar.addEventListener("click",editarTarea);
							      	btneliminar.addEventListener("click",eliminarTarea);
							      	for (var y = 0 ; y <= 1; y++) {
							      	document.getElementById("nombre").value=dataJson[i][1];
								 	document.getElementById("longitud").value=dataJson[i][2];
								 	document.getElementById("ancho").value=dataJson[i][3];
								 	document.getElementById("altura").value=dataJson[i][4];
								 	document.getElementById("horizontal").value=dataJson[i][5];
								 	document.getElementById("vertical").value=dataJson[i][6];
								 	document.getElementById("desperdicio").value=dataJson[i][7];
								 	document.getElementById("desperdicio2").value=dataJson[i][8];
								 	document.getElementById("mezclaa").value=dataJson[i][9];
								 	document.getElementById("cementoo").value=dataJson[i][10];
								 	document.getElementById("arenaa").value=dataJson[i][11];
								 	document.getElementById("aguaa").value=dataJson[i][12];
								 	document.getElementById("arenaa2").value=dataJson[i][13];
								 	document.getElementById("airee").value=dataJson[i][14];
								 	document.getElementById("aguacemento").value=dataJson[i][15];
								 	
							      		}
							        operaciones();
								 	decimal();
					      		}else{
					      			$('.icon-down-open').eq(i).show();
					      			$('.icon-up-open').eq(i).hide();
					      			$("#btneditar").hide();
		                            $("#btneliminar").hide();
		                            $("#btn_reporte").hide();
					      			borrarinput();
					      			operaciones();
					      			e=0;
					      		}
					      		
			     			 });
						    
						    c=i;
					      	
						 					     } });			  
						},
					})	;
	}

	//variables
	var tareaInput = document.getElementById("nombre"),
		btnAgregar = document.getElementById("btn-agregar"),
		btnCancelar = document.getElementById("btn-cancelar"),
		btnnuevo = document.getElementById("btnnuevo"),
		btneditar = document.getElementById("btneditar"),
		btneliminar = document.getElementById("btneliminar");
		document.getElementById("btn-agregar").disabled=true;
		document.getElementById("cantidad").disabled=true;
		document.getElementById("btnnuevo").disabled=false;

    //creamos la funcion "enviar" encargada de recibir los valores de los ínputs y enviarlos a la base de datos por medio de una consula
	enviar =function(){
		valores();
		$.ajax({
			type:'POST',
			url:'Php/enviar.php',
			dataType: "json",
			data: "id_usuario="+session_id+"&nombre="+tareaInput.value+"&longitud="+long.value+"&ancho="+anch.value+"&altura="+altu.value+"&horizontal="+hori.value+"&vertical="+vert.value+"&desperdicio="+desp.value+"&desperdicio2="+m_de.value+"&mezclaa="+mezc.value+"&cementoo="+ceme.value+"&arenaa="+aren.value+"&aguaa="+agua.value+"&arenaa2="+are2.value+"&airee="+aire.value+"&aguacemento="+agce.value+"&ladrillo_soga="+sogal.value+"&ladrillo_cabeza="+cabezal.value+"&ladrillo_canto="+cantol.value+"&soga_cemento="+sogac.value+"&soga_arena="+sogaar.value+"&soga_agua="+sogaag.value+"&cabeza_cemento="+cabezac.value+"&cabeza_arena="+cabezaar.value+"&cabeza_agua="+cabezaag.value+"&canto_cemento="+cantoc.value+"&canto_arena="+cantoar.value+"&canto_agua="+cantoag.value,
		})

	}
   //creamos la funcion "agregarTarea" que se encargara de verificar que los datos obtenidos sean correctos
agregarTarea = function () {	
		if(b===1)
			{	
				var tarea = tareaInput.value;
			if (tarea.length == 0|| /^\s+$/.test(tarea)) {
						tareaInput.setAttribute("placeholder", "Escribe un Nombre válido");
						return false;
					}			
				enviar2();
				$('.filas').remove();
                $(".preload").show();
                $("#content").hide();
				 reiniciar= setTimeout(mostarlista, 1000);
				 cancelarTarea();				
				return false;
			}else{
				var tarea = tareaInput.value;
				if (tarea.length == 0|| /^\s+$/.test(tarea)) {
						tareaInput.setAttribute("placeholder", "Escribe un Nombre válido");
						return false;
					}
				enviar();
                $('.filas').remove();
                $(".preload").show();
                $("#content").hide();
				 reiniciar= setTimeout(mostarlista, 1000);
				 cancelarTarea();
				return false;
			}
			location.reload();
	};
nuevo =function(){
	   $('#btnnuevo').removeClass('color').addClass('newcolor');
	    document.getElementById("c_mezcla").disabled=false;
		$('.icon-up-open').hide();
    	$('.icon-down-open').show();
    	e=0;
	    btnAgregar.addEventListener("click", agregarTarea); 
	    btnCancelar.addEventListener("click",cancelarTarea);

	    $("#btneditar").hide();
		$("#btneliminar").hide();
		$("#btn_reporte").hide();
	     b=3;
         for (var i = 0; i <=7; i++) {
            bloqueo.eq(i).removeAttr("disabled");
          }
        tablas.slideUp(40);
        bloqueo.eq(1).attr("disabled","disabled");
        pestañas();
		borrarinput();		
		document.getElementById("mezclaa").value="5";
	 	document.getElementById("cementoo").value="3150";
	 	document.getElementById("arenaa").value="2700";
	 	document.getElementById("aguaa").value="1000";
	 	document.getElementById("arenaa2").value="1600";
	 	document.getElementById("airee").value="1";
		btnnuevo.removeEventListener("click",nuevo);
		//ejecutamos la funcion "Operaciones" cada 1 segundo para que podamos obtener los datos en tiempo real
		 var temporizador=setInterval(function(){operaciones()},100); // 10000ms = 10s
		//activamos el boton de agregar para poder crear el nuevo archivo
		document.getElementById("btn-agregar").disabled=false;
		 //bloqueamo el boton "nuevo para que no exista inconveniente"
}
cancelarTarea = function(){
	    $('.icon-up-open').hide();
    	$('.icon-down-open').show();
    	e=0;

    	$('#btnnuevo,#btneditar').removeClass('newcolor').addClass('color');
	    $("#btneditar").hide();
		$("#btneliminar").hide();
		$("#btn_reporte").hide();
		tablas.slideUp(40);
		borrarinput();
		for (var i = 0; i <=8; i++) {
    	    bloqueo.eq(i).attr("disabled","disabled");
        }
        		$('.cabecera').removeClass('activar-c');
				$('.cabecera').eq(0).addClass('activar-c');
				document.getElementById("c_mezcla").disabled=true;
				$(".mezcla").removeClass('activar-p');
				$(".cantidad").addClass('activar-p');
				$('.leyenda').removeClass('activar-l');
				$('.leyenda').eq(0).addClass('activar-l');
        	btnnuevo.addEventListener("click",nuevo);
        	btneditar.removeEventListener("click",editarTarea);
        	btneliminar.removeEventListener("click",eliminarTarea);
        	b=0;
            btnCancelar.removeEventListener("click",cancelarTarea);
            btnAgregar.removeEventListener("click", agregarTarea);	
            btnreporte.removeEventListener("click",reporte);
        };
editarTarea = function(){
	 $('#btneditar').removeClass('color').addClass('newcolor');
		document.getElementById("c_mezcla").disabled=false;
		btnAgregar.addEventListener("click", agregarTarea); 
		btnCancelar.addEventListener("click",cancelarTarea);
		btnnuevo.removeEventListener("click",nuevo);
		btneditar.removeEventListener("click",editarTarea);
		btneliminar.removeEventListener("click",eliminarTarea);
		btnreporte.removeEventListener("click",reporte);
        for (var i = 0; i <=7; i++) {
    	            bloqueo.eq(i).removeAttr("disabled");
              }
        pestañas();
		document.getElementById("btn-agregar").disabled=false;
		var temporizador=setInterval(function(){operaciones()},100);
		b=1;
	}
eliminarTarea = function(){
	$(".result").remove();
		enviar3();
		$('.filas').remove();
                $(".preload").show();
                $("#content").hide();
				 reiniciar= setTimeout(mostarlista, 1000);
				 cancelarTarea();				
				return false;
	}

//creamos funciones que nos serviran para reducir el codigo
borrarinput= function(){
 	$('.cantidad').find('input').val("");
 	$('.mezcla').find('input').val("");
 	operaciones();
    }
 valores=function(){
			long=document.getElementById("longitud"),
			anch=document.getElementById("ancho"),
			altu=document.getElementById("altura"),
			hori=document.getElementById("horizontal"),
			vert=document.getElementById("vertical"),
			desp=document.getElementById("desperdicio"),
			m_de=document.getElementById("desperdicio2"),
			mezc=document.getElementById("mezclaa"),
			ceme=document.getElementById("cementoo"),
			aren=document.getElementById("arenaa"),
			agua=document.getElementById("aguaa"),
			are2=document.getElementById("arenaa2"),
			aire=document.getElementById("airee"),
			agce=document.getElementById("aguacemento"),
			sogal=document.getElementById("valor-soga2"),
			sogac=document.getElementById("resultadosoga1"),
			sogaar=document.getElementById("resultadosoga2"),
			sogaag=document.getElementById("resultadosoga3"),
			cabezal=document.getElementById("valor-cabeza2"),
			cabezac=document.getElementById("resultadocabeza1"),
			cabezaar=document.getElementById("resultadocabeza2"),
			cabezaag=document.getElementById("resultadocabeza3"),
			cantol=document.getElementById("valor-canto2"),
			cantoc=document.getElementById("resultadocanto1"),
			cantoar=document.getElementById("resultadocanto2"),
			cantoag=document.getElementById("resultadocanto3");
			diseño=document.getElementById("diseño").value;
			formato=document.getElementById("formato").value;
			nombrepdf=document.getElementById("nombrepdf").value;
			usuario=document.getElementById("usuario").value;
			lugar=document.getElementById("lugar").value;
			valorsoga1=document.getElementById("valor-soga1").value;
			valorcabeza1=document.getElementById("valor-cabeza1").value;
			valorcanto1=document.getElementById("valor-canto1").value;
			msoga1=document.getElementById("m-soga1").value;
			mcabeza1=document.getElementById("m-cabeza1").value;
			mcanto1=document.getElementById("m-canto1").value;
			msoga2=document.getElementById("m-soga2").value;
			mcabeza2=document.getElementById("m-cabeza2").value;
			mcanto2=document.getElementById("m-canto2").value;
			resultcemento=document.getElementById("resultcemento").value;
			resultarena=document.getElementById("resultarena").value;
			sumaredondeo=document.getElementById("sumaredondeo").value;
			rendcemento1=document.getElementById("rendcemento1").value;
			rendcemento2=document.getElementById("rendcemento2").value;
			rendarena1=document.getElementById("rendarena1").value;
			rendarena2=document.getElementById("rendarena2").value;
			rendagua1=document.getElementById("rendagua1").value;
			rendagua2=document.getElementById("rendagua2").value;
			rendagua3=document.getElementById("rendagua3").value;
			resulrendcemento12=document.getElementById("resulrendcemento12").value;
			resulrendarena12=document.getElementById("resulrendarena12").value;
			resulrendagua12=document.getElementById("resulrendagua12").value;
			sumaresul12=document.getElementById("sumaresul12").value;
			aireresult12=document.getElementById("aireresult12").value;
			totalresult12=document.getElementById("totalresult12").value;

    }
comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega nombre");
	};
enviar2 =function(){
		valores();
		$.ajax({
			type:'POST',
			url:'Php/editar.php',
			dataType: "json",
			data: "number="+id_datos+"&nombre="+tareaInput.value+"&longitud="+long.value+"&ancho="+anch.value+"&altura="+altu.value+"&horizontal="+hori.value+"&vertical="+vert.value+"&desperdicio="+desp.value+"&desperdicio2="+m_de.value+"&mezclaa="+mezc.value+"&cementoo="+ceme.value+"&arenaa="+aren.value+"&aguaa="+agua.value+"&arenaa2="+are2.value+"&airee="+aire.value+"&aguacemento="+agce.value+"&ladrillo_soga="+sogal.value+"&ladrillo_cabeza="+cabezal.value+"&ladrillo_canto="+cantol.value+"&soga_cemento="+sogac.value+"&soga_arena="+sogaar.value+"&soga_agua="+sogaag.value+"&cabeza_cemento="+cabezac.value+"&cabeza_arena="+cabezaar.value+"&cabeza_agua="+cabezaag.value+"&canto_cemento="+cantoc.value+"&canto_arena="+cantoar.value+"&canto_agua="+cantoag.value,
		})
	}
enviar3 =function(){
		$.ajax({
			type:'POST',
			url:'Php/eliminar.php',
			dataType: "json",
			data: "number="+id_datos,
		})

	}

	//eventos
    
	//agregar tarea
	tareaInput.addEventListener("click", comprobarInput);
	btnnuevo.addEventListener("click",nuevo);

}());