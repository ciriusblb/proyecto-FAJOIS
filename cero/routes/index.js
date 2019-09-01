var express = require('express');
var router = express.Router();
var data = require('./data.js');
var pdfMakePrinter = require('pdfmake/src/printer');




function createPdfBinary(pdfDoc, callback) {
 // playground requires you to assign document definition to a variable called dd

	//var titulo = ['GOBIERNO REGIONAL DE MADRE DE DIOS','GERENCIA REGIONAL DE INFRAESTRUCTURA','SUBGERENCIA DE ESTUDIOS DE INFRAESTRUCTURA'];
	console.log(pdfDoc);
	let datos = pdfDoc;

	// console.log(datos.c_title);
	var titulo = data.titulos();
	let nombre_proyecto = pdfDoc.titles[0].text;
	let espacio = 15;
	let resto = nombre_proyecto.length%75;
	let rows = parseInt(nombre_proyecto.length/75);
	if (resto > 0) {
		rows++;
	}
	//INICIO TITULOS DE CABECERA PRINCIPAL
    let titulos_p=[];
	for (var i = 0; i < 3; i++) {
		if(datos.detalle[i].submit==true)
			titulos_p.push([{ text: datos.detalle[i].titulo, style:['fs11','centrado']}]);
	}
    //FIN TITULOS CABECERA PRINCIPAL


	// INICIO DE TITULOS 
	let titulos_c=['Nombre del Proyecto','Sub Presupuesto','Usuario','lugar','Fecha'];
	let cabeza=[];
	let t_contador=0;
	let t_total;
	
	// FIN DE TITULOS
	for (var i = 0; i <5; i++) {
		if(datos.titles[i].submit== true)
		{
			t_contador=t_contador+1;
			cabeza.push([{ text: titulos_c[i],style:['fs10','negrita','izquierda'] },{text:': '},{text:datos.titles[i].text, style:['fs10','izquierda'],colSpan: 3},{},{}]);
		}
	}
	t_total= 46 -( t_contador+Math.ceil(t_contador/2));



	// INICIO FIRMAS
	let t_f = datos.firmas.length;
	let datos_f=datos.firmas;
	let a_f = 90/t_f;
	let firmas = [];
	for (var i = 0; i<t_f; i++) {
		if (datos_f[i].tipo==1) {
			firmas.push({
				width: 70,style:'centrado', margin:[1,1,1,1],
				table: {
					headerRows: 1,widths:'100%',			
					body: [	
						[{image: 'linea.jpg',lineWidth: 2,width: 100,style:'centrado', margin:[1,1,1,1]}],		
						[ datos_f[i].detalle[0].name],
						[ datos_f[i].detalle[1].name],
						[ datos_f[i].detalle[2].name],
					]
				},
				layout: 'noBorders'
			});
		}else{
			firmas.push({image: 'firma.jpg',width: 70,style:'centrado', margin:[1,1,1,1]});
		}

	}

	// FIN FIRMAS



	// INICIO LOGOS Y TIEMPO
	let datos_l=datos.checkboxModel;
	let logos=[];
	let tiempo=[];
	for (var i = 0; i < 2; i++) {
		if(datos_l.detalle[i].value== true)
			logos.push([{image: 'angry.png',width: 50,style:'centrado'}]);
	    else
			logos.push([{text: '', width: 50,style:'centrado'}]);
	   
	    if(datos.tiempo[i].submit==true)    
	    	tiempo.push([ datos.tiempo[i].text]);    
	    else
	    	tiempo.push(['']);    
	}


	firmas.push(
	 	{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: tiempo			
			},
			layout: 'noBorders'
		}
	 );

	// FIN 




	//FUNCION QUE DETERMINA CUANTAS LINEAS SE AGREAN DE MAS
	function tamaño(array)
	{
		let aux;
		let resul=0;
		let resultados=[]; 
		for (var i = 0; i < array.length; i++) 
		{
			let resul1=[];
			for (var j = 0; j < array[i].length; j++) 
	        {

				 if(array[i][j].length/71 > 1)
				  {
	                aux=parseInt(array[i][j].length/71);
		               if (array[i][j].length/71>aux) {
		               	resul=resul+parseInt(array[i][j].length/71);
		               }else{
		               	 resul=resul+parseInt(array[i][j].length/71)-1;
		               }
				  }	
				  if(j==2)
				  {
				  	resul1.push(resul);
				  }
			}
				resul1.push(resul);		 
				  resultados.push(resul1);
				  resul=0;
				  console.log('vemos',resultados);
		}
		return resultados;
	}
	//fin FUNCION TAMAÑO



	//INICIO DEL CUERPO DE REPORTE ANALISIS Y PRECIOS UNITARIOS
	let contador=0;
	let co=[];
	let prueba=[];

	prueba=[ ['Trazo y replanteo en redes de agua fluviales en la ciudad de puertooooos','starcraft es lo maximssssss ver que puede pasar','veremos accionnnnnnns','que pasajghhhhhh mucho '],['comprobamos que funciones todo y vemos que salte la linea cont','dsdss','dsdas','dsadsadsa'],['holaaa estamos aaqui','dsadsadasd dds','sdadsa','sadsadas'] ];

	let prueba2=[80,20,40]
	let r = tamaño(prueba);

	let sobrante=0;
	for (var i = 0; i <  prueba.length; i++) 
	{
		let fila=[];
		let cabecera=[];
		let espacio=[];
		cabecera.push(
					[{text:'01.01.01.',style:['fs5','centrado','tableHeader'],fillColor: '#c1bebe'},{text:prueba[i][0],colSpan:1,style:['fs7','tableHeader'],fillColor: '#c1bebe'},{text:'',colSpan:5,fillColor:'#c1bebe'},{},{},{},{}],
					[{text:'',fillColor: '#c1bebe'},{text:'Especificación:   '+prueba[i][1],style:['fs7'],fillColor: '#c1bebe'},{text:'106.11 m2',fillColor:'#c1bebe',style:['fs18','derecha'],colSpan:5,rowSpan:2},{},{},{},{}],
					[{text:'',fillColor: '#c1bebe'},{text:'Rendimiento:   '+prueba[i][2],style:['fs7'],fillColor: '#c1bebe'},{text:'',colSpan:5,fillColor: '#c1bebe'},{},{},{},{}],
				    [   {text: '', style: ['tableHeader','negrita'], colSpan: 1,},
				        {text: 'Descripción', style: ['tableHeader','negrita'], colSpan: 1,},
					    {text: 'Und', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
						{text: 'Cuadrilla', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
						{text: 'Cantidad', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
						{text: 'Precio S/.', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
						{text: 'Parcial S/.', style: ['tableHeader','centrado','negrita'], colSpan: 1,}]								
			);
		sobrante=0;
		contador=contador+prueba2[i]+r[i][1];
		if(contador>t_total){
			if(prueba2[i]+r[i][1]>t_total)
			{
						    if(i>0)
							{
								co.push([ {text: '',pageBreak:'after'}]);
							}
							sobrante=prueba2[i]+r[i][1];
							let aux=4+r[i][0];
							let aux2=0;
							while(sobrante>t_total)
							{
								fila=[];
								fila.push([ {text:'01.01.01.',style:['fs5','centrado','tableHeader'],fillColor: '#c1bebe'},{text:prueba[i][0],colSpan:1,fillColor: '#c1bebe',style:['fs7','tableHeader']},{text:'',colSpan:5,fillColor:'#c1bebe'},{},{},{},{}],
									[{text:'',fillColor: '#c1bebe'},{text:'Especificación:  '+prueba[i][1],style:['fs7'],fillColor: '#c1bebe'},{text:'106.11 m2',fillColor:'#c1bebe',style:['fs18','derecha'],colSpan:5,rowSpan:2},{},{},{},{}],
									[{text:'',fillColor: '#c1bebe'},{text:'Rendimiento:  '+prueba[i][2],style:['fs7'],fillColor: '#c1bebe'},{text:'',colSpan:5,fillColor: '#c1bebe'},{},{},{},{}],
								    [   {text: '', style: ['tableHeader','negrita'], colSpan: 1,},
								        {text: 'Descripción', style: ['tableHeader','negrita'], colSpan: 1,},
									    {text: 'Und', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
										{text: 'Cuadrilla', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
										{text: 'Cantidad', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
										{text: 'Precio S/.', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
										{text: 'Parcial S/.', style: ['tableHeader','centrado','negrita'], colSpan: 1,}]	
									);
								for (var j =aux; j <t_total+aux2; j++) {
									  fila.push(['  ',{text:'Operario 			',style:['fs7'],alignment: 'justify'},{text:'hh ',style:['derecha']},{text:'111.0000',style:['derecha']},{text:'000.0178',style:['derecha']},{text:'16000.94',style:['derecha']},{text:'1279.00',style:['derecha']}]);
								}
								aux=j;
								aux2=t_total-r[i][0]-4;

								co.push([{
												style: 'tableExample',
												color: '#2A333C',

												table: {
														widths: [ 40,226,12,30,40,40,60],
														headerRows: 1,
														body: fila
														,														
														},
														layout: {
												hLineWidth: function (i, node) {
													return ( (i === 0 || i === node.table.body.length )? 1 : 1 &&( i!=0 || i!=node.table.body.length )? 0 : 0 );
												},
												vLineWidth: function (i, node) {
													return (i === 0 || i === node.table.widths.length ? 1: 1 && i!=0 || i!=node.table.widths.length ? 0 : 0 );
												},
												hLineColor: function (i, node) {
													return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
												},
												vLineColor: function (i, node) {
													return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
												}
											},pageBreak:'after'
											 }]);
								sobrante=sobrante- t_total+4+r[i][0];
							}
							contador=sobrante;
							console.log('contador:',contador);
							fila=[];			
							fila.push(cabecera[0],cabecera[1],cabecera[2],cabecera[3]);
								for (var j = aux; j <prueba2[i]+r[i][1]; j++) {
									  fila.push(['  ',{text:'Operario 			',style:['fs7']},{text:'hh ',style:['derecha']},{text:'111.0000',style:['derecha']},{text:'000.0178',style:['derecha']},{text:'16000.94',style:['derecha']},{text:'12789456789.00',style:['derecha']}]);

								}
								
								co.push([{
												style: 'tableExample',
												color: '#2A333C',

												table: {
														widths: [ 40,226,12,30,40,40,60],
														headerRows: 1,
														body: fila
														,
														
														},
														layout: {
												hLineWidth: function (i, node) {
													return ( (i === 0 || i === node.table.body.length )? 1 : 1 &&( i!=0 || i!=node.table.body.length )? 0 : 0 );
												},
												vLineWidth: function (i, node) {
													return (i === 0 || i === node.table.widths.length ? 1: 1 && i!=0 || i!=node.table.widths.length ? 0 : 0 );
												},
												hLineColor: function (i, node) {
													return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
												},
												vLineColor: function (i, node) {
													return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
												}
											}


								}]);

								if(contador<t_total-1){
									co.push([ {text: '  '}],['  ']);
									contador=contador+2;
								}
				            
			}else{

	            contador=prueba2[i]+r[i][1];
				fila.push(cabecera[0],cabecera[1],cabecera[2],cabecera[3]);
				for (var j = 4+r[i][0]; j < prueba2[i]+r[1][1]; j++) {

								fila.push(['  ',{text:'Operario 			',style:['fs7']},{text:'hh ',style:['derecha']},{text:'111.0000',style:['derecha']},{text:'000.0178',style:['derecha']},{text:'16000.94',style:['derecha']},{text:'12789456789.00',style:['derecha']}]);

							
						}
			    co.push([{
						style: 'tableExample',
						color: '#2A333C',

						table: {
								widths: [ 40,226,12,30,40,40,60],
								headerRows: 1,
								body:fila,								
								},
								layout: {
												hLineWidth: function (i, node) {
													return ( (i === 0 || i === node.table.body.length )? 1 : 1 &&( i!=0 || i!=node.table.body.length )? 0 : 0 );
												},
												vLineWidth: function (i, node) {
													return (i === 0 || i === node.table.widths.length ? 1: 1 && i!=0 || i!=node.table.widths.length ? 0 : 0 );
												},
												hLineColor: function (i, node) {
													return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
												},
												vLineColor: function (i, node) {
													return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
												}
											},pageBreak:'before'
					}]);

			    				if(contador<t_total-1){
								co.push([ {text: '  '}],['  ']);

									contador=contador+2;
								}
	               
	           }

		  }else{
				fila.push(cabecera[0],cabecera[1],cabecera[2],cabecera[3]);

				for (var j = 4+r[i][0]; j < prueba2[i]+r[i][1]; j++) {

						fila.push(['  ',{text:'Operario 			',style:['fs7']},{text:'hh ',style:['derecha']},{text:'111.0000',style:['derecha']},{text:'000.0178',style:['derecha']},{text:'16000.94',style:['derecha']},{text:'12789456789.00',style:['derecha']}]);
							
				}
				co.push([{
							style: 'tableExample',
							color: '#2A333C',
							table: {
									widths: [ 40,226,12,30,40,40,60],
									headerRows: 1,
									body: fila,
									},layout: {
												hLineWidth: function (i, node) {
													return ( (i === 0 || i === node.table.body.length )? 1 : 1 &&( i!=0 || i!=node.table.body.length )? 0 : 0 );
												},
												vLineWidth: function (i, node) {
													return (i === 0 || i === node.table.widths.length ? 1: 1 && i!=0 || i!=node.table.widths.length ? 0 : 0 );
												},
												hLineColor: function (i, node) {
													return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
												},
												vLineColor: function (i, node) {
													return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
												}
											}
						}]);  

			   	if(contador<t_total-1){
								co.push([ {text: '  '}],['  ']);

									contador=contador+2;
								}    
	      	}
	      	

	}
	//FIN INICIO DE ANALISIS Y PRECIOS UNITARIOS




	//CUERPOS DE TODOS LOS REPORTES
	let contenidos_r=[];
		// let fila5=[];
		// 		for (var j = 0; j< t_total; j++) {
		// 			fila5.push(['01.01.00','Campamento','Gib',{text:'1.00',style:['derecha']},{text:'20.00',style:['derecha']},{text:'20.00',style:['derecha']}]);

		// 			}

	contenidos_r[0]=
                [
					{
						style: 'tableExample',
						color: '#2A333C',

						table: {
								widths: [ 40,222,20,60,60,60],
								headerRows: 1,
								body : 	[
											[	{text: 'ITEM', style: ['tableHeader','negrita'], colSpan: 1,},
												{text: 'DESCRIPCION', style: ['tableHeader','negrita'], colSpan: 1,},
												{text: 'UND', style: ['tableHeader','negrita'] ,colSpan: 1,},
												{text: 'METRADO', style: ['tableHeader','negrita'],style:['derecha'], colSpan: 1,},
												{text: 'PRECIO S/', style: ['tableHeader','negrita'],style:['derecha'], colSpan: 1,},
												{text: 'PARCIAL S/', style: ['tableHeader','negrita'],style:['derecha'], colSpan: 1,}
											],
											['01.00.00','OBRAS PRELIMINARES','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'	71.00',style:['derecha'],fillColor: '#c1bebe'}],
											['01.01.00','Campamento','Gib',{text:'1.00',style:['derecha']},{text:'20.00',style:['derecha']},{text:'20.00',style:['derecha']}],
											['01.02.00','Almacen','Gib',{text:'1.00',style:['derecha']},{text:'15.00',style:['derecha']},{text:'15.00',style:['derecha']}],
											['01.03.00','Transportes de materias','Gib',{text:'1.00',style:['derecha']},{text:'36.00',style:['derecha']},{text:'36.00',style:['derecha']}],
											[{text:'',colSpan:6,rowSpan:3},{},{},{},{},{}],[],[],
											['02.00.00','TRABAJOS PRELIMINARES','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'19.00',style:['derecha']}],
											['02.01.00','Limpieza de terreno manual','m2',{text:'2.00',style:['derecha']},{text:'45.00',style:['derecha']},{text:'90.00',style:['derecha']}],
											['02.02.00','Trazo y replanteo','m2',{text:'3.00',style:['derecha']},{text:'12.00',style:['derecha']},{text:'36.00',style:['derecha']}],
											['02.03.00','Replanteo de la obra durante el trabajo','m2',{text:'4.00',style:['derecha']},{text:'16.00',style:['derecha']},{text:'64.00',style:['derecha']}],
											[{text:'',colSpan:6,rowSpan:3},{},{},{},{},{}],[],[],
											['03.00.00','OBRAS DE CONCRETO SIMPLE','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'158.00',style:['derecha']}],
											['03.01.00','Salado f´c=100kg/cm2 ','m2',{text:'5.00',style:['derecha']},{text:'10.00',style:['derecha']},{text:'50.00',style:['derecha']}],
											['03.02.00','Cimientos corridos f´c=175 kg/cm2','m3',{text:'9.00',style:['derecha']},{text:'12.00',style:['derecha']},{text:'108.00',style:['derecha']}],
											[{text:'',colSpan:6,rowSpan:3},{},{},{},{},{}],[],[],
											['04.00.00','OBRAS DE CONCRETO ARMADO','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'',style:['derecha']}],
											['04.01.00','ZAPATAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'442.00',style:['derecha']}],
											['04.01.01','Zapatas de concreto    f´c=210 kg/cm2','m3',{text:'5.00',style:['derecha']},{text:'66.00',style:['derecha']},{text:'330.00',style:['derecha']}],
											['04.01.02','Zapatas de acero grado f´y=4200 gk/cm2','kg',{text:'2.00',style:['derecha']},{text:'56.00',style:['derecha']},{text:'112.00',style:['derecha']}],
											[{text:'',colSpan:6,rowSpan:3},{},{},{},{},{}],[],[],
											['04.02.00','COLUMNAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'271.00',style:['derecha']}],
											['04.02.01','Columnas acero grado  f´y=4200 gk/cm2','kg',{text:'4.00',style:['derecha']},{text:'22.00',style:['derecha']},{text:'89.00',style:['derecha']}],
											['04.02.02','Columnas encofrado y desencofrado','m2',{text:'3.00',style:['derecha']},{text:'13.00',style:['derecha']},{text:'39.00',style:['derecha']}],
											['04.02.03','Columnas de concreto f´c=210 kg/cm2','m3',{text:'8.00',style:['derecha']},{text:'18.00',style:['derecha']},{text:'144.00',style:['derecha']}],
											[{text:'',colSpan:6,rowSpan:3},{},{},{},{},{}],[],[],
											['04.03.00','VIGAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'276.00',style:['derecha']}],
											['04.03.01','Vigas acero grado  f´y=4200 gk/cm2','kg',{text:'2.00',style:['derecha']},{text:'66.00',style:['derecha']},{text:'112.00',style:['derecha']}],
											['04.03.02','Vigas encofrado y desencofrado','m2',{text:'7.00',style:['derecha']},{text:'14.00',style:['derecha']},{text:'98.00',style:['derecha']}],
											['04.03.03','Vigas de concreto f´c=210 kg/cm2','m3',{text:'6.00',style:['derecha']},{text:'11.00',style:['derecha']},{text:'66.00',style:['derecha']}],
											[{text:'',colSpan:6,rowSpan:3},{},{},{},{},{}],[],[],
											['04.04.00','LOSAS ALIGERADAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'282.00',style:['derecha']}],
											['04.04.01','Losas aligeradas acero grado  f´y=4200 gk/cm2','kg',{text:'8.00',style:['derecha']},{text:'11.00',style:['derecha']},{text:'88.00',style:['derecha']}],
											['04.04.02','Losas aligeradas encofrado y desencofrado','m2',{text:'6.00',style:['derecha']},{text:'16.00',style:['derecha']},{text:'96.00',style:['derecha']}],
											['04.04.03','Losas aligeradas de concreto f´c=210 kg/cm2','m3',{text:'7.00',style:['derecha']},{text:'14.00',style:['derecha']},{text:'98.00',style:['derecha']}],
											[{text:'',colSpan:6,rowSpan:2},{},{},{},{},{}],[],
										    ['',{text:'TOTAL COSTO DIRECTO',style: ['tableHeader','negrita']},'',{text:''},{text:''},{text:'1690.00',style:['tableHeader','negrita','derecha']}],
										    //57
									],								
								},layout: 'noBorders'
					} 
				];

	contenidos_r[1]=[
					{
						style: 'tableExample',
						color: '#2A333C',

						table: {
								widths: [ 60,225,20,55,50,50],
								headerRows: 1,
								body: [
											[	{text: 'ITEM', style: ['tableHeader','negrita'], colSpan: 1,},
												{text: 'DESCRIPCION', style: ['tableHeader','negrita'], colSpan: 1,},
												{text: 'UND', style: ['tableHeader','negrita'], colSpan: 1,},
												{text: 'METRADO', style: ['tableHeader','negrita'], colSpan: 1,},
												{text: 'PRECIO', style: ['tableHeader','negrita'], colSpan: 1,},
												{text: 'PARCIAL', style: ['tableHeader','negrita'], colSpan: 1,}
											],
											['01','ESTRUCTURAS','',{text:'123456789.00',fillColor: '#c1bebe',style:['derecha']},{text:'123456789.00',style:['derecha']},{text:'123456789.89',style:['derecha'],fillColor: '#c1bebe'}],
											['01.01','   MOVIMIENTO DE TIERRAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'8834.39',style:['derecha']}],
											['01.01.01','      EXCAVACION DE ZANJAS','m3',{text:'50.54',style:['derecha']},{text:'30.34',style:['derecha']},{text:'1533.38',style:['derecha']}],
											['01.01.02','      RELLENO Y COMPACTADO CON MATERIAL PROPIO','m3',{text:'26.66',style:['derecha']},{text:'54.5',style:['derecha']},{text:'1452.97',style:['derecha']}],
											['01.01.03.01.03.01.03.01.03','      ACARREO DE MATERIAL EXCEDENTE','m3',{text:'27.46',style:['derecha']},{text:'17.71',style:['derecha']},{text:'486.32',style:['derecha']}],
											['01.01.04','      RELLENO Y COMPACTADO CON MATERIAL DE PRESTAMO EN PISOS','m3',{text:'34.37',style:['derecha']},{text:'156',style:['derecha']},{text:'5361.72',style:['derecha']}],
											['01.02','   OBRAS DE CONCRETO SIMPLE','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'8926.27',style:['derecha']}],
											['01.02.01','      SOLADO DE 2" fc=100 kg/cm2','m2',{text:'14',style:['derecha']},{text:'30.4',style:['derecha']},{text:'425.6',style:['derecha']}],
											['01.02.02','      CIMIENTO CORRIDO fc=140 kg/cm2','m3',{text:'20.88',style:['derecha']},{text:'407.12',style:['derecha']},{text:'8500.67',style:['derecha']}],
											['01.03','   OBRAS DE CONCRETO ARMADO','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'38778.14',style:['derecha']}],
											['01.03.01','      ZAPATAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'3012.42',style:['derecha']}],
											['01.03.01.01','         ZAPATAS, ACERO GRADO 60 - fy=4200 kg/cm2','kg',{text:'121.38',style:['derecha']},{text:'4.64',style:['derecha']},{text:'563.2',style:['derecha']}],
											['01.03.01.02','         ZAPATAS, CONCRETO fc=210kg/cm2','m3',{text:'5.6',style:['derecha']},{text:'437.36',style:['derecha']},{text:'2449.22',style:['derecha']}],
											['01.03.02','      SOBRECIMIENTO','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'10076.51',style:['derecha']}],
											['01.03.02.01','         SOBRECIMIENTOS, ACERO GRADO 60 - fy=4200 kg/cm2','kg',{text:'334.98',style:['derecha']},{text:'4.64',style:['derecha']},{text:'1554.31',style:['derecha']}],
											['01.03.02.02','         SOBRECIMIENTOS, ENCOFRADO Y DESENCOFRADO','m2',{text:'116.31',style:['derecha']},{text:'38.33',style:['derecha']},{text:'4458.16',style:['derecha']}],
											['01.03.02.03','         SOBRECIMIENTOS, CONCRETO fc=175kg/cm2','m3',{text:'8.72',style:['derecha']},{text:'466.06',style:['derecha']},{text:'4064.04',style:['derecha']}],
											['01.04','   ESTRUCTURA DE MADERA','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'44314.09',style:['derecha']}],
											['01.04.01','      TIJERAL DE MADERA TIPO 01','und',{text:'4',style:['derecha']},{text:'1085.68',style:['derecha']},{text:'4342.72',style:['derecha']}],
											['01.04.02','      VIGA DE MADERA TIPO 01','und',{text:'2',style:['derecha']},{text:'361.59',style:['derecha']},{text:'723.18',style:['derecha']}],
											['01.04.03','      VIGA DE MADERA 2"x6"','m',{text:'35',style:['derecha']},{text:'22.45',style:['derecha']},{text:'785.75',style:['derecha']}],
											['01.04.04','      ENTRAMADO DE MADERA TORNILLO DE 2"X2" (CIELORASO)','m',{text:'330',style:['derecha']},{text:'10.03',style:['derecha']},{text:'3309.9',style:['derecha']}],
											['01.04.05','      PROTECCION DE BORDE CON MADERA TORNILLO DE 1/2"  (INCLUYE PINTADO)','m2',{text:'8.4',style:['derecha']},{text:'54.53',style:['derecha']},{text:'458.05',style:['derecha']}],
											['01.04.11','      CANALETA PREFABRICADA DE PLANCHA METALICA GALVANIZADA DE e= 0.30mm (segun diseño)','m',{text:'39.5',style:['derecha']},{text:'57.61',style:['derecha']},{text:'2275.6',style:['derecha']}],
											['01','ESTRUCTURAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'100852.89',style:['derecha']}],
											['01.01','   MOVIMIENTO DE TIERRAS','',{text:'',style:['derecha']},{text:'',style:['derecha']},{text:'8834.39',style:['derecha']}],
											['01.01.01','      EXCAVACION DE ZANJAS','m3',{text:'50.54',style:['derecha']},{text:'30.34',style:['derecha']},{text:'1533.38',style:['derecha']}],
											['01.01.02','      RELLENO Y COMPACTADO CON MATERIAL PROPIO','m3',{text:'26.66',style:['derecha']},{text:'54.5',style:['derecha']},{text:'1452.97',style:['derecha']}],
											['01.01.03','      ACARREO DE MATERIAL EXCEDENTE','m3',{text:'27.46',style:['derecha']},{text:'17.71',style:['derecha']},{text:'486.32',style:['derecha']}],
										],
								
								},
								layout: 'noBorders',
					PageOrientation : ' paisaje ' ,  saltoPag : ' antes ' } ];

	contenidos_r[2]=[{
		style: 'tableExample',
		color: '#2A333C',

		table: {
				widths: [ 60,'auto','*','*','*',60],
				headerRows: 1,
				body: [
					[	{text: 'ITEM', style: ['tableHeader','negrita'], colSpan: 1,},
						{text: 'DESCRIPCION', style: ['tableHeader','negrita'], colSpan: 1,},
						{text: 'UND', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
						{text: 'CANTIDAD', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
						{text: 'PRECIO S/', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
						{text: 'PARCIAL S/', style: ['tableHeader','negrita'], colSpan: 1,}
					],
					['','MANO DE OBRA','',{text:'',style:['derecha','negrita']},{text:'',style:['derecha']},{text:'380.00',style:['derecha']}],
					['01.','   Operario',{text:'hh',style:['derecha']},{text:'12.00',style:['derecha']},{text:'15.00',style:['derecha']},{text:'180.00',style:['derecha']}],
					['02.','      Oficial',{text:'hh',style:['derecha']},{text:'10.00',style:['derecha']},{text:'15.00',style:['derecha']},{text:'150.00',style:['derecha']}],
					['03.','      Peon',{text:'hh',style:['derecha']},{text:'5.00',style:['derecha']},{text:'10.00',style:['derecha']},{text:'50.00',style:['derecha']}],
					['','      MATERIALES','',{text:'',style:['derecha','negrita']},{text:'',style:['derecha']},{text:'430.00',style:['derecha']}],
					['01.','      Cemento portland IP tipo rumi',{text:'bls',style:['derecha']},{text:'12.00',style:['derecha']},{text:'15.00',style:['derecha']},{text:'180.00',style:['derecha']}],
					['02.','   Acero grado 60 fy=4200km/cm2',{text:'kg',style:['derecha']},{text:'10.00',style:['derecha']},{text:'15.00',style:['derecha']},{text:'150.00',style:['derecha']}],
					['03.','      Tuberia pvc sap 4¨',{text:'Und',style:['derecha']},{text:'5.00',style:['derecha']},{text:'10.00',style:['derecha']},{text:'50.00',style:['derecha']}],
					['04.','      Clavos para madera con cabeza de 3¨',{text:'Und',style:['derecha']},{text:'5.00',style:['derecha']},{text:'10.00',style:['derecha']},{text:'50.00',style:['derecha']}],
					['','   EQUIPOS','',{text:'',style:['derecha','negrita']},{text:'',style:['derecha']},{text:'430.00',style:['derecha']}],
					['01.','      Mezcladora de concreto',{text:'he',style:['derecha']},{text:'12.00',style:['derecha']},{text:'15.00',style:['derecha']},{text:'180.00',style:['derecha']}],
					['02.','         Vibradora de concreto 1hp',{text:'he',style:['derecha']},{text:'10.00',style:['derecha']},{text:'15.00',style:['derecha']},{text:'150.00',style:['derecha']}],
					['03.','         Camion volquete de 10m3',{text:'hm',style:['derecha']},{text:'5.00',style:['derecha']},{text:'10.00',style:['derecha']},{text:'50.00',style:['derecha']}],
					['04.','      Cargador frontal',{text:'hm',style:['derecha']},{text:'5.00',style:['derecha']},{text:'10.00',style:['derecha']},{text:'50.00',style:['derecha']}],
					['','         HERRAMIENTAS','',{text:'',style:['derecha','negrita']},{text:'',style:['derecha']},{text:'11.40',style:['derecha']}],
					['01.','         Herramientas manueales',{text:'%',style:['derecha']},{text:'',style:['derecha']},{text:'11.40',style:['derecha']},{text:'11.40',style:['derecha']}],
					['','   SUB CONTRATOS','',{text:'',style:['derecha','negrita']},{text:'',style:['derecha']},{text:'100.00',style:['derecha']}],
					['01.','      Mano de obra s/c',{text:'glb',style:['derecha']},{text:'10',style:['derecha']},{text:'10',style:['derecha']},{text:'100.00',style:['derecha']}],
					],
				
				},
				layout: 'noBorders'
	}];	

	contenidos_r[4]=[{
		style: 'tableExample',
		color: '#2A333C',

		table: {
				widths: [ 20,20,'auto','*','*','*','*','*'],
				headerRows: 1,
				body: [
						[	{text: 'ITEM', style: ['tableHeader','negrita'], colSpan: 1,},
						    {text: 'OM', style: ['tableHeader','negrita'], colSpan: 1,},
							{text: 'DESCRIPCION', style: ['tableHeader','negrita'], colSpan: 1,},
							{text: '% INICIAL', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
							{text: '% ACUMULADO', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
							{text: 'FACTOR', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
							{text: '%', style: ['tableHeader','derecha','negrita'], colSpan: 1,},
							{text: 'IU', style: ['tableHeader','derecha','negrita'], colSpan: 1,}
						],
						['   ','  ','          									 ',{text:'100.000',style:['derecha']},{text:'100.000',style:['derecha']},{text:'1.000',style:['derecha']},{text:'       ',style:['derecha']},{text:'   ',style:['derecha']}],
						['1. ','01','Mano de obra Incl. Leyes sociales			 ',{text:'27.632 ',style:['derecha']},{text:'27.632 ',style:['derecha']},{text:'0.276',style:['derecha']},{text:'100.000',style:['derecha']},{text:'MO ',style:['derecha']}],
						['2. ','02','Agregado fino 							     ',{text:'6.942  ',style:['derecha']},{text:'27.632 ',style:['derecha']},{text:'0.276',style:['derecha']},{text:'100.000',style:['derecha']},{text:'AF ',style:['derecha']}],
						['3. ','  ','- Agregado grueso							 ',{text:'0.558  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'     ',style:['derecha']},{text:'		',style:['derecha']},{text:'AG ',style:['derecha']}],
						['4. ','03','Cemento portland tipo I 					 ',{text:'6.538  ',style:['derecha']},{text:'6.538  ',style:['derecha']},{text:'0.134',style:['derecha']},{text:'62.950 ',style:['derecha']},{text:'CP ',style:['derecha']}],
						['5. ','03','Madera nacional para encofrada y carpinteria',{text:'3.848  ',style:['derecha']},{text:'6.538  ',style:['derecha']},{text:'0.134',style:['derecha']},{text:'62.950 ',style:['derecha']},{text:'MN ',style:['derecha']}],
						['6. ','04','Dolar                                       ',{text:'11.118 ',style:['derecha']},{text:'16.538 ',style:['derecha']},{text:'0.134',style:['derecha']},{text:'62.950 ',style:['derecha']},{text:'D  ',style:['derecha']}],
						['7. ','  ','- Pintura latex                             ',{text:'0.001  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'PL ',style:['derecha']}],
						['8. ','  ','- Plancha de poliuretano                    ',{text:'0.068  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'PP ',style:['derecha']}],
						['9. ','  ','- Tuberia de acero negro y/o galvanizado    ',{text:'0.388  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'TG ',style:['derecha']}],
						['10.','  ','- Tuberia de pvc para agua                  ',{text:'0.103  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'TA ',style:['derecha']}],
						['11.','  ','- Gasolina                          		 ',{text:'0.081  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'GU ',style:['derecha']}],
						['12.','  ','- Herramienta manual						 ',{text:'1.025  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'HM ',style:['derecha']}],
						['13.','  ','- Asfalto									 ',{text:'0.041  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'A  ',style:['derecha']}],
						['14.','  ','- Acero de construccion listo				 ',{text:'0.162  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'AL ',style:['derecha']}],
						['15.','  ','- Acera de construcción corrugado			 ',{text:'0.077  ',style:['derecha']},{text:'       ',style:['derecha']},{text:'	 ',style:['derecha']},{text:' 		',style:['derecha']},{text:'AC ',style:['derecha']}],
						['16.','05','Maquinaria y equipo nacional				 ',{text:'14.132 ',style:['derecha']},{text:'14.132 ',style:['derecha']},{text:'0.234',style:['derecha']},{text:'60.432 ',style:['derecha']},{text:'MEN',style:['derecha']}],
						['17.','05','Maquinaria y equipo incorporado			 ',{text:'9.253  ',style:['derecha']},{text:'9.253  ',style:['derecha']},{text:'0.234',style:['derecha']},{text:'60.432 ',style:['derecha']},{text:'MEI',style:['derecha']}],
						['18.','06','Indice general de precios al consumidor	 ',{text:'18.033 ',style:['derecha']},{text:'9.253  ',style:['derecha']},{text:'0.234',style:['derecha']},{text:'60.432 ',style:['derecha']},{text:'GU ',style:['derecha']}],
					],
				},
				layout: 'noBorders'
	}];

	//FIN DE LOS REPORTES
	

	//LISTA DE TITULOS DE REORTES
	let cuerpo =  contenidos_r[0];
	let titulos=['RESUMEN GENERAL DE PRESUPUESTO','RESUMEN DE PRESUPUESTO','LISTA Y PRECIOS DE INSUMOS UNITARIOS','ANÁLISIS DE PRECIOS UNITARIOS','FÓRMULA POLINÓMICA','TIEMPOS DE PROGRAMACIÓN'];
	let childtitle=titulos[0];
	//FIN LISTAS


	//INICIO DE VERIFICAR QUE TIPO DE REPORTE SE HA SELECCIONADO 
	switch(datos.type){
		case "resumen 1":   cuerpo =   contenidos_r[0]; childtitle= titulos[0]; break;
		case "resumen 2":   cuerpo =   contenidos_r[1]; childtitle= titulos[1]; break;
		case "insumo":      cuerpo =   contenidos_r[2]; childtitle= titulos[2]; break;
		case "analisis":    cuerpo =   co; childtitle= titulos[3]; break;
		case "formula":    cuerpo =   contenidos_r[4]; childtitle= titulos[4]; break;
		default:  cuerpo =  contenidos_r[0]; break;
	}
		cabeza.unshift([{ text:childtitle ,colSpan:5,fillColor: '#c1bebe', style:['negrita','fs15','centrado','margin_titulo',  'tableHeader']},{},{},{},{}]);

	
	// FIN DE INICIO DE REPORTE

	//CUERPO DE PDF 
	var dd = {
		header: function() {
				let datos_l=datos.checkboxModel;
				let logos=[];
				let tiempo=[];
				for (var i = 0; i < 2; i++) {
					if(datos_l.detalle[i].value== true)
						logos.push([{image: 'angry.png',width: 50,style:'centrado'}]);
				    else
						logos.push([{text: '', width: 50,style:'centrado'}]);
				   
				    if(datos.tiempo[i].submit==true)    
				    	tiempo.push([ datos.tiempo[i].text]);    
				    else
				    	tiempo.push(['']);    
				}

		        return [
			        {
							style: 'tableCabeza',
							
							table: 
							{
								widths: [ 58,372,58],
								headerRows: 1,
								body: 
								[	
									[
										logos[0],
										[
											{
												table: {
													widths: '100%',
													body: titulos_p
												},layout: 'noBorders'

											}
										],
										logos[1],
									],
								],
							},layout: 'noBorders'

			        },
			        {
							style: 'tableCabeza1',
							color: '#2A333C',
							table: {
								widths: [ 100,50,70,121,131],
								headerRows: 1,
								body:cabeza
						        
							},layout: 'noBorders'
						}

		        ];
		        
	    },

		content: cuerpo,

		footer: function(currentPage,pageCount){
			let t_f = datos.firmas.length;
			let datos_f=datos.firmas;
			let a_f = 90/t_f;
			let firmas = [];
			for (var i = 0; i<t_f; i++) {
				if (datos_f[i].tipo==1) {
					firmas.push({
						width: 70,style:'centrado', margin:[1,1,1,1],
						table: {
							headerRows: 1,widths:'100%',			
							body: [	
								[{image: 'linea.jpg',lineWidth: 2,width: 100,style:'centrado', margin:[1,30,1,1]}],		
								[ datos_f[i].detalle[0].name],
								[ datos_f[i].detalle[1].name],
								[ datos_f[i].detalle[2].name],
							]
						},
						layout: 'noBorders'
					});
				}else{
					firmas.push({image: 'firma.jpg',width: 70,style:'centrado', margin:[1,1,1,1]});
				}

			}


			let tiempo=[];
				for (var i = 0; i < 2; i++) {
				    if(datos.tiempo[i].submit==true)    
				    	tiempo.push([ datos.tiempo[i].text]);    
				    else
				    	tiempo.push(['']);    
				}
		tiempo.push([{text:currentPage.toString()+'-'+pageCount}]);

				firmas.push(
	 	{
	 		margin:[0,40,0,0],
			table: {
				headerRows: 1,
				body: tiempo			
			},
			layout: 'noBorders'
		}
	 );

			return [

				{
						style: 'tableExample', 
						table: {
								widths: [ '30%','30%','30%','10%'],
								headerRows: 1,
								body: [
										[{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader'}, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
								]
						},
						layout: 'headerLineOnly'
				},
				{image: 'linea_fajois.png',width: 550,style:'centrado', margin:[1,0,1,20]},
				{
					table: 
						{
							widths: [ a_f+'%',a_f+'%',a_f+'%','10%'],
							headerRows: 1,
							body: 
								[
									firmas
								]	
							},
							layout: 'noBorders'
				},
			]
		},	
		pageMargins: [60,130+(t_contador*17),30,140],
		
		styles: {
			header: {
				margin: [0, 0, 0, 10],
			},
			tableExample: {
				margin: [0, 5, 0, 0],
			},
			tableCabeza:{
				margin:[60,40,0,0],
			},
			tableCabeza1:{
				margin:[60,5,0,0],
			},
			tableHeader: {
				bold: true,
				color: 'black'
			},
			margin_right:{
				margin: [40,0, 0, 0],
			},
			margin_header:{
				margin: [0,20,0,0],
			},
			negrita:{
				bold:true,
			},
			// TAMAÑO DE FUENTES
			fs7:{fontSize:7,},fs8:{fontSize:8,},fs9:{fontSize:9,},fs10:{fontSize:10,},fs11:{fontSize:11,},fs12:{fontSize:12,},
			fs13:{fontSize:13,},fs14:{fontSize:14,},fs15:{fontSize:15,},fs16:{fontSize:16,},fs17:{fontSize:17,},fs18:{fontSize:18,},
			//ALINEACION DE TEXTO
			centrado:{alignment:'center',},derecha:{alignment:'right',},izquierda:{alignment:'left',},

			campo_total:{
				width:'100%',	
			},
			margin_titulo:{
				margin: [0, 5, 0, 5],
			}
		},
		defaultStyle: {
			fontSize: 7
		},pageSize: 'A4',
	}
	//FIN DE CUERPO DE PDF


	pdfDoc = dd;
	var fontDescriptors = {
		Roboto: {
		  normal: __dirname+'/../node_modules/pdfmake/test-env/tests/fonts/Roboto-Regular.ttf',
		  bold: __dirname+'/../node_modules/pdfmake/test-env/tests/fonts/Roboto-Medium.ttf',
		  italics: __dirname+'/../node_modules/pdfmake/test-env/tests/fonts/Roboto-Italic.ttf',
		  ghotics: __dirname+'/../node_modules/pdfmake/test-env/tests/fonts/ghotic/GOTHICBI.ttf',
		  bolditalics: __dirname+'/../node_modules/pdfmake/test-env/tests/fonts/Roboto-Italic.ttf',

		}
	};

	var printer = new pdfMakePrinter(fontDescriptors);


	var doc = printer.createPdfKitDocument(pdfDoc);
	var chunks = [];
	var result;

	doc.on('data', function (chunk) {
		chunks.push(chunk);
	});
	doc.on('end', function () {
		result = Buffer.concat(chunks);
		// r.push('data:application/pdf;base64,' + result.toString('base64'));
		callback('data:application/pdf;base64,' + result.toString('base64'));
	});

	doc.end();


}

router.post('/pdf', function (req, res) {
  createPdfBinary(req.body, function(binary) {
    res.contentType('application/pdf');
    res.send(binary);
  }, function(error) {
    res.send('ERROR:' + error);
  });

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


function cal_res(){
	
}

module.exports = router;



