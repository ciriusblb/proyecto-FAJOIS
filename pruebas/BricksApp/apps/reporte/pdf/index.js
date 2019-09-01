
var pdfMakePrinter = require('pdfmake');

var dataPDF={};

dataPDF.createPDFBinary =function(pdfDoc,callback){
console.log(pdfDoc);
let datos=pdfDoc;

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
					[{image: './apps/reporte/pdf/linea.jpg',lineWidth: 2,width: 100,style:'centrado', margin:[1,1,1,1]}],		
					[ datos_f[i].detalle[0].name],
					[ datos_f[i].detalle[1].name],
					[ datos_f[i].detalle[2].name],
				]
			},
			layout: 'noBorders'
		});
	}else{
		firmas.push({image: './apps/reporte/pdf/firmaImg.jpg' ,width: 70,style:'centrado', margin:[1,1,1,1]});
	}
}
// FIN FIRMAS

//Inicio titulos
let titulos_p=[];
for (var i = 0; i < 3; i++) {
	if(datos.detalle[i].submit==true)
		titulos_p.push([{ text: datos.detalle[i].titulo, style:['fs12','centrado']}]);
}
titulos_p.push([{ text: ''}]);
//Fin titulos

// INICIO LOGOS
let datos_l=datos.checkboxModel;
let logos=[];
let tiempo=[];
for (var i = 0; i < 2; i++) {
	if(datos_l.detalle[i].value== true)
		logos.push([{image: './apps/reporte/pdf/angry.png',width: 50,style:'centrado', margin:[1,1,1,1]}]);
    else
		logos.push([{text: '', width: 50,style:'centrado', margin:[1,1,1,1]}]);
   
    if(datos.tiempo[i].submit==true)    
    	tiempo.push([ datos.tiempo[i].text]);    
    else
    	tiempo.push(['']);    
}
// FIN LOGOS

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



console.log("esta bien");
let d_User=datos.dataUser;
let d_result=datos.result;
let contenidos_r=[];
contenidos_r[0]=[
	{

		style: 'tableExample',
		color: '#2A333C',
		table: {
				widths: [ 40,160,40,100,50,60],
				headerRows: 1,
				body : 
					[
					        [{text:'',colSpan:6},{},{},{},{},{}],
							['',{text:'L : Longitud del Ladrillo',colSpan:2},{},{text: d_User.longitud,style:['derecha'],colSpan:2},{},{text:'cm'}],
							['',{text:'A : Ancho del Ladrillo',colSpan:2},{},{text: d_User.ancho,style:['derecha'],colSpan:2},{},{text:'cm'}],
							['',{text:'H : Altura del Ladrillo',colSpan:2},{},{text: d_User.altura,style:['derecha'],colSpan:2},{},{text:'cm'}],
							['',{text:'Jh: Espesor de la junta Horizontal',colSpan:2},{},{text: d_User.espesor_horizontal,style:['derecha'],colSpan:2},{},{text:'cm'}],
							['',{text:'Jv: Espesor de la junta Vertical',colSpan:2},{},{text: d_User.espesor_vertical,style:['derecha'],colSpan:2},{},{text:'cm'}],
							['',{text:'Porcentaje de Desperdicioo',colSpan:2},{},{text: d_User.cantidad_desperdicio,style:['derecha'],colSpan:2},{},{text:'cm'}],
							['Soga',{text:'=        largo por alto     ='},{text:d_result.c_soga[0],style:['derecha']},{text:'Und',style:['izquierda']},{text:d_result.c_soga[1],style:['derecha']},'Und'],
							['Cabeza','=       ancho por alto     =',{text:d_result.c_cabeza[0],style:['derecha']},{text:'Und',style:['izquierda']},{text:d_result.c_cabeza[1],style:['derecha']},'Und'],
							['Canto','=       largo por alto       =',{text:d_result.c_canto[0],style:['derecha']},{text:'Und',style:['izquierda']},{text:d_result.c_canto[1],style:['derecha']},'Und'],
							[{text:'',colSpan:6,rowSpan:3},{},{},{},{},{}],[],[],
							[{text:'Volumen de la mezcla en m3 por m2 de muro' ,colSpan:6},{},{},{},{},{}],
							[{  table:{
								 widths: [ 80,20,80,100,60],
								 headerRows: 1,
								 body : 
									[
									  [{text:'% de desperdicio',colSpan:2},{},{text:d_User.mezcla_desperdicio,style:['derecha']},'%',''],
									  ['Soga','=',{text:d_result.m_soga[0],style:['derecha']},{text:d_result.m_soga[1],style:['derecha']},'m3/m2'],
									  ['Cabeza','=',{text:d_result.m_cabeza[0],style:['derecha']},{text:d_result.m_cabeza[1],style:['derecha']},'m3/m2'],
									  ['Canto','=',{text:d_result.m_canto[0],style:['derecha']},{text:d_result.m_canto[1],style:['derecha']},'m3/m2']
									],		
								},layout: 'noBorders',colSpan:6
							},{},{},{},{},{}],
							[{text:'',colSpan:6,rowSpan:2}],[],
							[{text:'Nota',style:['negrita'],colSpan:6},{},{},{},{},{}],
							['',{text:'Para la determinación de v,m m olumen de mezcla por m3 en el componente "n" = Número de ladrillos por m2, se utilizo la cantidad de ladrillos sin desperdicio',colSpan:5},{},{},{},{}],
							[{  table:{
								 widths: [ 60,60,40,100,60],
								 headerRows: 1,
								 body : 
									[
									   [{text:'Cemento - Arena -Agua(m2 de muro)',colSpan:5},{},{},{},{}],
									   [{text:'Mezcla',colSpan:2},{},'1:',{text:d_User.mezcla,style:['derecha']},''],
									   [{text:'Densidad - Peso unitario',colSpan:5},{},{},{},{}],
									   ['',{text:'Cemento',colSpan:2},{},{text:d_User.densidad_cemento,style:['derecha']},'kg/m3'],
									   ['',{text:'Arena',colSpan:2},{},{text:d_User.densidad_arena,style:['derecha']},'kg/m3'],
									   ['',{text:'Agua',colSpan:2},{},{text:d_User.densidad_agua,style:['derecha']},'kg/m3'],
									   [{text:'Peso específico',colSpan:5},{},{},{},{}],
									   ['',{text:'Arena',colSpan:2},{},{text:d_User.peso_arena,style:['derecha']},'kg/m3'],
									   [{text:'% de aire incorporado:',colSpan:3},{},{},{text:d_User.aire,style:['derecha']},''],
									   [{text:'Relación de Agua/cemento:',colSpan:3},{},{},{text:d_result.agua_cemento,style:['derecha']},'%']

									],		
								},layout: 'noBorders',colSpan:6,pageBreak:'after'
							},{},{},{},{},{}],
							[{  table:{
								 widths: [ 60,80,40,40,80,60],
								 headerRows: 1,
								 body : 
									[
									  [{text:'Analisis',colSpan:6},{},{},{},{},{}],
									  ['',{text:'Cemento '},'1','p3 =',{text:d_result.analisis[0],style:['derecha']},'kg'],
									  ['',{text:'Arena'},'5','p3 =',{text:d_result.analisis[1],style:['derecha']},'kg'],
									  ['','','','',{text:d_result.analisis[2],style:['derecha']},'kg'],
									],		
								},layout: 'noBorders',colSpan:6
							},{},{},{},{},{}],
							[{text:'',colSpan:6,rowSpan:3}],[],[],
							[{  table:{
								 widths: [80,200,100,40],
								 headerRows: 1,
								 body : 
									[
									  [{text:'Rendimiento de la mezcla',colSpan:4},{},{},{}],
									  ['Cemento',{text:d_result.analisis[0]+' kg/'+d_User.densidad_cemento+' kg/m3'},{text:d_result.rendimiento[0],style:['derecha']},'m3'],
									  ['Arena',{text:d_result.analisis[1]+' kg/'+ d_User.densidad_arena+' kg/m3'},{text:d_result.rendimiento[1],style:['derecha']},'m3'],
									  ['Agua',{text:'('+d_result.analisis[0]+' kg x '+d_result.agua_cemento+')/'+d_User.densidad_agua+' kg/m3'},{text:d_result.rendimiento[2],style:['derecha']},'m3'],
									  ['','',{text:d_result.rendimiento[3],style:['derecha']},'m3'],
									  [{text:'Aire Incorporado',colSpan:2},{},{text:d_result.rendimiento[4],style:['derecha']},'m3'],
									  [{text:'Total',colSpan:2,style:['negrita']},{},{text:d_result.rendimiento[5],style:['derecha','negrita']},'m3'],
									],		
								},layout: 'noBorders',colSpan:6
							},{},{},{},{},{}],
							[{text:'',colSpan:6,rowSpan:3}],[],[],
							['',{table:{
								 widths: [100,100,100,100],
								 headerRows: 1,
								 body : 
									[
									  [{text:'Ladrillo',style:['negrita','centrado'],fillColor:'#F3F3F3'},{text:'Cemento bolsas',style:['negrita','centrado'],fillColor:'#F3F3F3'},{text:'Arena m3',style:['negrita','centrado'],fillColor:'#F3F3F3'},{text:'Agua m3',style:['negrita','centrado'],fillColor:'#F3F3F3'}],
									  [{text:'Soga',style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.cemento[0],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.cemento[1],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.cemento[2],style:['centrado'],fillColor:'#F3F3F3'}],
									  [{text:'Cabeza',style:['centrado']},{text:d_result.arena[0],style:['centrado']},{text:d_result.arena[1],style:['centrado']},{text:d_result.arena[2],style:['centrado']}],
									  [{text:'Canto',style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.agua[0],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.agua[1],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.agua[2],style:['centrado'],fillColor:'#F3F3F3'}],
									],		
								},colSpan:5,layout:'lightHorizontalLines'
							},{},{},{},{}]
						    //57
					],							
				},layout: 'noBorders'
	} 
];

contenidos_r[1]=[
	{
		columns: [
						[
							{
						        style: 'tableExample',
								color: '#2A333C',
								table: {
										widths: [ 40,140,60,30,60,30],
										headerRows: 1,
										body : 
											[
													['',{text:'L : Longitud del Ladrillo',colSpan:2},{},{text: d_User.longitud,style:['derecha'],colSpan:2},{},{text:'cm'}],
													['',{text:'A : Ancho del Ladrillo',colSpan:2},{},{text: d_User.ancho,style:['derecha'],colSpan:2},{},{text:'cm'}],
													['',{text:'H : Altura del Ladrillo',colSpan:2},{},{text: d_User.altura,style:['derecha'],colSpan:2},{},{text:'cm'}],
													['',{text:'Jh: Espesor de la junta Horizontal',colSpan:2},{},{text: d_User.espesor_horizontal,style:['derecha'],colSpan:2},{},{text:'cm'}],
													['',{text:'Jv: Espesor de la junta Vertical',colSpan:2},{},{text: d_User.espesor_vertical,style:['derecha'],colSpan:2},{},{text:'cm'}],
													['',{text:'Porcentaje de Desperdicioo',colSpan:2},{},{text: d_User.cantidad_desperdicio,style:['derecha'],colSpan:2},{},{text:'cm'}],
													['Soga',{text:'=        largo por alto     ='},{text:d_result.c_soga[0],style:['derecha']},{text:'Und',style:['izquierda']},{text:d_result.c_soga[1],style:['derecha']},'Und'],
													['Cabeza','=       ancho por alto     =',{text:d_result.c_cabeza[0],style:['derecha']},{text:'Und',style:['izquierda']},{text:d_result.c_cabeza[1],style:['derecha']},'Und'],
													['Canto','=       largo por alto       =',{text:d_result.c_canto[0],style:['derecha']},{text:'Und',style:['izquierda']},{text:d_result.c_canto[0],style:['derecha']},'Und'],
													[{text:'Volumen de la mezcla en m3 por m2 de muro' ,colSpan:6},{},{},{},{},{}]
											]
										},layout: 'noBorders'
							},
							{
								style: 'tableExample',
								color: '#2A333C',
								table:{
											 widths: [ 60,20,60,60,40],
											 headerRows: 1,
											 body : 
												[
												  [{text:'% de desperdicio',colSpan:2},{},{text:d_User.mezcla_desperdicio,style:['derecha']},'%',''],
												  ['Soga','=',{text:d_result.m_soga[0],style:['derecha']},{text:d_result.m_soga[1],style:['derecha']},{text:'m3/m2'}],
												  ['Cabeza','=',{text:d_result.m_cabeza[0],style:['derecha']},{text:d_result.m_cabeza[1],style:['derecha']},'m3/m2'],
												  ['Canto','=',{text:d_result.m_canto[0],style:['derecha']},{text:d_result.m_canto[1],style:['derecha']},'m3/m2']
												]		
										},layout: 'noBorders'
							}
						],{
							width:10,
							canvas: [{
											type: 'rect',
											x: 1,
											y: 1,
											w: 0,
											h: 260,
											r: 0,
											lineWidth: 2
										},
									]
						},				
						[	
								{
												style: 'tableExample',
												color: '#2A333C',
												 table:{
														 widths: [ 60,60,40,100,60],
														 headerRows: 1,
														 body : 
															[
															   [{text:'Cemento - Arena -Agua(m2 de muro)',colSpan:5},{},{},{},{}],
															   [{text:'Mezcla',colSpan:2},{},'1:',{text:d_User.mezcla,style:['derecha']},''],
															   [{text:'Densidad - Peso unitario',colSpan:5},{},{},{},{}],
															   ['',{text:'Cemento',colSpan:2},{},{text:d_User.densidad_cemento,style:['derecha']},'kg/m3'],
															   ['',{text:'Arena',colSpan:2},{},{text:d_User.densidad_arena,style:['derecha']},'kg/m3'],
															   ['',{text:'Agua',colSpan:2},{},{text:d_User.densidad_agua,style:['derecha']},'kg/m3'],
															   [{text:'Peso específico',colSpan:5},{},{},{},{}],
															   ['',{text:'Arena',colSpan:2},{},{text:d_User.peso_arena,style:['derecha']},'kg/m3'],
															   [{text:'% de aire incorporado:',colSpan:3},{},{},{text:d_User.aire,style:['derecha']},''],
															   [{text:'Relación de Agua/cemento:',colSpan:3},{},{},{text:d_result.agua_cemento,style:['derecha']},'%']

															],		
														},layout: 'noBorders'
								
								},
								{
									style: 'tableExample',
									color: '#2A333C',
									table:{
										 widths: [ 60,60,20,30,80,30],
										 headerRows: 1,
										 body : 
											[
											  [{text:'Analisis',colSpan:6},{},{},{},{},{}],
											  ['',{text:'Cemento '},'1','p3 =',{text:d_result.analisis[0],style:['derecha']},'kg'],
											  ['',{text:'Arena'},'5','p3 =',{text:d_result.analisis[1],style:['derecha']},'kg'],
											  ['','','','',{text:d_result.analisis[2],style:['derecha']},'kg'],
											],		
										},layout: 'noBorders'
								},			
						]
		]
	},
	{
			columns:[
				[
						{
									style: 'tableExample',
									color: '#2A333C',
									table:{
									 widths: [80,200,80,30],
									 body : 
										[
										  [{text:'Rendimiento de la mezcla',colSpan:4},{},{},{}],
										  ['Cemento',{text:d_result.analisis[0]+' kg/'+d_User.densidad_cemento+' kg/m3'},{text:d_result.rendimiento[0],style:['derecha']},'m3'],
										  ['Arena',{text:d_result.analisis[1]+' kg/'+ d_User.densidad_arena+' kg/m3'},{text:d_result.rendimiento[1],style:['derecha']},'m3'],
										  ['Agua',{text:'('+d_result.analisis[0]+' kg x '+d_result.agua_cemento+')/'+d_User.densidad_agua+' kg/m3'},{text:d_result.rendimiento[2],style:['derecha']},'m3'],
										  ['','',{text:d_result.rendimiento[3],style:['derecha']},'m3'],
										  [{text:'Aire Incorporado',colSpan:2},{},{text:d_result.rendimiento[4],style:['derecha']},'m3'],
										  [{text:'Total',colSpan:2,style:['negrita']},{},{text:d_result.rendimiento[5],style:['derecha','negrita']},'m3'],
										],		
									},layout: 'noBorders',
								},
								{
									style: 'tableExample',
									color: '#2A333C',
									table:{
											 widths: [100,100,100,100],
											 headerRows: 1,
											 body : 
												[
												  [{text:'Ladrillo',style:['negrita','centrado'],fillColor:'#F3F3F3'},{text:'Cemento bolsas',style:['negrita','centrado'],fillColor:'#F3F3F3'},{text:'Arena m3',style:['negrita','centrado'],fillColor:'#F3F3F3'},{text:'Agua m3',style:['negrita','centrado'],fillColor:'#F3F3F3'}],
												  [{text:'Soga',style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.cemento[0],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.cemento[1],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.cemento[2],style:['centrado'],fillColor:'#F3F3F3'}],
												  [{text:'Cabeza',style:['centrado']},{text:d_result.arena[0],style:['centrado']},{text:d_result.arena[1],style:['centrado']},{text:d_result.arena[2],style:['centrado']}],
												  [{text:'Canto',style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.agua[0],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.agua[1],style:['centrado'],fillColor:'#F3F3F3'},{text:d_result.agua[2],style:['centrado'],fillColor:'#F3F3F3'}],
												],		
											},layout:'lightHorizontalLines'
								}
				]
			]
	}
							
];

//Pagina Orientacion//
let cuerpo=contenidos_r[0];;
 var d_PagOrientacion=datos.diseno;
 switch(d_PagOrientacion)
 {
 	case 'portrait' : 
 			cuerpo=contenidos_r[0];
 	break;
 	case 'landscape': 
 	        cuerpo=contenidos_r[1];
 	break;
 	default:
 		 d_PagOrientacion='portrait';
 	break;
 }
// fin orientacion//


// INICIO DE TITULOS 
let titulos_c=['Nombre del Proyecto','Sub Presupuesto','Usuario','lugar','Fecha'];
let cabeza=[];
cabeza.push([{ text:'BricksApp',colSpan:5,fillColor: '#555',color:'#fff', style:['negrita','fs11','centrado','margin_titulo','campo_total']},{},{},{},{}]);
for (var i = 0; i <4; i++) {
	if(datos.titles[i].submit== true)
	{
		cabeza.push([{ text: titulos_c[i],colSpan:2,style:['margin_right','fs12','negrita','izquierda'] },{},{ text:': '+datos.titles[i].text, style:['fs11','izquierda'],colSpan: 3 },{},{}]);
	}
}

// FIN DE TITULOS
	//Reportess 

	var dd = {
		header: function() {

		        return [
			        {
							style: 'tableExample',
							
							table: 
							{
								widths: [ '25%','50%','25%'],
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
												},
												layout: 'noBorders'
											}
										],
										logos[1],
									],
								],
							},
							layout: 'noBorders'
			        },
			        {
							style: 'tableExample',
							color: '#2A333C',
							table: {

								widths: [ '20%','20%','20%','20%','20%'],
								headerRows: 1,
								body:cabeza
						        
							},
							layout: 'noBorders'
						}

		        ];
		        
	    },

		content: cuerpo,

		footer: function(){
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
				{image: './apps/reporte/pdf/linea_fajois.png',style:['centrado','campo_total'], margin:[1,1,1,50]},
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


		pageMargins: [40, 180,100,150],
		//['izquierda','arriba','derecha','abaj0']
		
		styles: {
			header: {
				fillColor:'#F3F3F3',
				margin: [0, 0, 0, 10],
			},
			tableExample: {
				margin: [0, 0, 0, 5],

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
			columnGap: 1,
			fontSize:11,
		},pageSize: 'A4',pageOrientation: d_PagOrientacion,	
	}
//portrait  vertical
//landscape horizontal


	pdfDoc = dd;
	var fontDescriptors = {
		Roboto: {
            normal: './apps/reporte/pdf/fonts/Roboto-Regular.ttf',
            bold: './apps/reporte/pdf/fonts/Roboto-Medium.ttf',
            italics: './apps/reporte/pdf/fonts/Roboto-Italic.ttf',
            bolditalics: './apps/reporte/pdf/fonts/Roboto-Italic.ttf'
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
		callback(result);
	});


	doc.end();

}

module.exports=dataPDF;