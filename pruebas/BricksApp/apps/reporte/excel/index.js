'use strict';
var reporte={};

reporte.EXCEL=function(reporteData,callback){
var datos=reporteData;

// Require library
var xl = require('excel4node');

// Create a new instance of a Workbook class
var wb = new xl.Workbook();

// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');

// Create a reusable style
var titles = wb.createStyle({
    defaultFont: {
    	bold:true,
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    font:{
    	bold:true
    },
    alignment: {
		wrapText: true,
		horizontal: 'center'
	},
});


//Inicio titulos
let titulos_p=[];
for (var i = 0; i < 3; i++) {
	if(datos.detalle[i].submit==true)
		ws.cell(i+1,3,i+1,7,true).string(datos.detalle[i].titulo).style(titles);
}
//Fin titulos


var logos=[];
logos[0]={
    path: './apps/reporte/pdf/angry.png',
    type: 'picture',
    position: {
        type: 'twoCellAnchor',
        from: {
            col: 2,
            colOff: 0,
            row: 1,
            rowOff: 0
        },
        to: {
            col: 3,
            colOff: 0,
            row: 4,
            rowOff: 0
        }
    }
} ;
logos[1]={
    path: './apps/reporte/pdf/angry.png',
    type: 'picture',
    position: {
        type: 'twoCellAnchor',
        from: {
            col: 8,
            colOff: 0,
            row: 1,
            rowOff: 0
        },
        to: {
            col: 9,
            colOff: 0,
            row: 4,
            rowOff: 0
        }
    }
} ;


// INICIO LOGOS
let datos_l=datos.checkboxModel;
let tiempo=[];
for (var i = 0; i < 2; i++) {
	if(datos_l.detalle[i].value== true)
	{
			 ws.addImage(logos[i]);
	}

}
// FIN LOGOS
ws.cell(4,1,4,9,true).string('BricksApp').style(titles);

var data = wb.createStyle({
    defaultFont: {
    	bold:true,
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    font:{
    	bold:true
    }
});
// INICIO DE Datos Reporte 
let titulos_c=['Nombre del Proyecto','Usuario','lugar','Fecha'];
for (var i = 0; i <4; i++) {
	if(datos.titles[i].submit== true)
	{
		ws.cell(5+i,1,5+i,2,true).string(titulos_c[i]).style(data);
		ws.cell(5+i,3,5+i,6,true).string(':   '+datos.titles[i].text).style({font:{size:12}});		
	}
}
//fin datos reporte




//INICIO CUERPO DE REPORTE
var main = wb.createStyle({
    defaultFont: {
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    numberFormat: '#,##0.00; ($#,##0.00); -'
});

let d_User=datos.dataUser;
let d_result=datos.result;

ws.cell(10,1,10,3,true).string('L : Longitud del Ladrillo').style(main);ws.cell(10,5).number(parseFloat(d_User.longitud)).style(main);ws.cell(10,6).string('cm').style(main);
ws.cell(11,1,11,3,true).string('A : Ancho denumberl Ladrillo').style(main);ws.cell(11,5).number(parseFloat(d_User.ancho)).style(main);ws.cell(11,6).string('cm').style(main);
ws.cell(12,1,12,3,true).string('H : Altura del Ladrillo').style(main);ws.cell(12,5).number(parseFloat(d_User.altura)).style(main);ws.cell(12,6).string('cm').style(main);
ws.cell(13,1,13,3,true).string('Jh: Espesor de la junta Horizontal').style(main);ws.cell(13,5).number(parseFloat(d_User.espesor_horizontal)).style(main);ws.cell(13,6).string('cm').style(main);
ws.cell(14,1,14,3,true).string('Jv: Espesor de la junta Vertical').style(main);ws.cell(14,5).number(parseFloat(d_User.espesor_vertical)).style(main);ws.cell(14,6).string('cm').style(main);
ws.cell(15,1,15,3,true).string('Porcentaje de Desperdicio').style(main);ws.cell(15,5).number(parseFloat(d_User.cantidad_desperdicio)).style(main);ws.cell(15,6).string('cm').style(main);

ws.cell(17,1).string('Soga    =').style(main);ws.cell(17,2,17,3,true).string('largo por alto     =').style(main);ws.cell(17,4).formula('1/(($E$10+$E$13)/100*($E$12+$E$14)/100)').style(main);ws.cell(17,5).string('Und').style(main);
ws.cell(18,1).string('Cabeza  =').style(main);ws.cell(18,2,18,3,true).string('ancho por alto    =').style(main);ws.cell(18,4).formula('=1/(($E$11+$E$13)/100*($E$12+$E$14)/100)').style(main);ws.cell(18,5).string('Und').style(main);
ws.cell(19,1).string('Canto   =').style(main);ws.cell(19,2,19,3,true).string('largo por alto    =').style(main);ws.cell(19,4).formula('=1/(($E$10+$E$13)/100*($E$11+$E$14)/100)').style(main);ws.cell(19,5).string('Und').style(main);

var main = wb.createStyle({
    defaultFont: {
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    numberFormat: '#,##0; ($#,##0); -'
});
ws.cell(17,6).formula('=+REDONDEAR.MAS(D17*$E$15/100+D17,0)').style(main);
ws.cell(18,6).formula('=+(D18*$E$15/100+D18)').style(main);
ws.cell(19,6).formula('=+(D19*$E$15/100+D19)').style(main);




ws.cell(21,1,21,4,true).string('Volumen de la mezcla en m3 por m2 de muro').style(main);
ws.cell(22,1,22,2,true).string('% de desperdicio').style(main);ws.cell(22,5).number(parseFloat(d_User.mezcla_desperdicio)).style(main);ws.cell(22,6).string('%').style(main);
var main = wb.createStyle({
    defaultFont: {
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    numberFormat: '#,##0.0000; ($#,##0.00); -'
});
ws.cell(24,1).string('Soga').style(main);ws.cell(24,2).string('=').style(main);ws.cell(24,3).formula('=+(1*1*$E$11/100)-($D$17*($E$10/100*$E$11/100*$E$12/100))').style(main);ws.cell(24,5).formula('=+C24*$E$22/100+C24').style(main);ws.cell(24,6).string('m3/m2').style(main);
ws.cell(25,1).string('Cabeza').style(main);ws.cell(25,2).string('=').style(main);ws.cell(25,3).formula('=+(1*1*$E$10/100)-($D$18*($E$10/100*$E$11/100*$E$12/100))').style(main);ws.cell(25,5).formula('=+C25*$E$22/100+C25').style(main);ws.cell(25,6).string('m3/m2').style(main);
ws.cell(26,1).string('Canto').style(main);ws.cell(26,2).string('=').style(main);ws.cell(26,3).formula('=+(1*1*$E$12/100)-($D$19*($E$10/100*$E$11/100*$E$12/100))').style(main);ws.cell(26,5).formula('=+C26*$E$22/100+C26').style(main);ws.cell(26,6).string('m3/m2').style(main);
ws.cell(28,1).string('Nota :').style(main);
ws.cell(29,2,32,6,true).string('Para la determinación de v,m m olumen de mezcla por m3 en el componente "n" = Número de ladrillos por m2, se utilizo la cantidad de ladrillos sin desperdicio.').style({alignment: {
        wrapText: true,
        horizontal: 'center'
    },});


var main = wb.createStyle({
    defaultFont: {
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    numberFormat: '#,##0; ($#,##0); -'
});

ws.cell(10,8,10,11,true).string('Cemento - Arena -Agua(m2 de muro)').style(main);
ws.cell(11,8).string('Mezcla').style(main);ws.cell(11,11).string('1:').style(main);ws.cell(11,12).number(parseFloat(d_User.mezcla)).style(main);
ws.cell(12,8,12,11,true).string('Densidad - Peso unitario').style(main);
ws.cell(13,9).string('Cemento').style(main);ws.cell(13,12).number(parseInt(d_User.densidad_cemento)).style(main);ws.cell(13,13).string('kg/m3').style(main);
ws.cell(14,9).string('Arena').style(main);ws.cell(14,12).number(parseInt(d_User.densidad_arena)).style(main);ws.cell(14,13).string('kg/m3').style(main);
ws.cell(15,9).string('Agua').style(main);ws.cell(15,12).number(parseInt(d_User.densidad_agua)).style(main);ws.cell(15,13).string('kg/m3').style(main);
ws.cell(16,8,16,11,true).string('Peso específico').style(main);
ws.cell(17,9).string('Arena').style(main);ws.cell(17,12).number(parseInt(d_User.peso_arena)).style(main);ws.cell(17,13).string('kg/m3').style(main);
ws.cell(18,8,18,10,true).string('% de aire incorporado:').style(main);ws.cell(18,12).number(parseInt(d_User.aire)).style(main);ws.cell(18,13).string('%').style(main);
ws.cell(19,8,19,11,true).string('Relación de Agua/cemento:').style(main);ws.cell(19,12).number(parseFloat(d_result.agua_cemento)).style({numberFormat: '#,##0.00; ($#,##0.00); -'});


var main = wb.createStyle({
    defaultFont: {
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    numberFormat: '#,##0.0; ($#,##0.0); -'
});

ws.cell(21,8).string('Analisis').style(main);
ws.cell(22,9).string('Cemento').style(main);ws.cell(22,10).string('1').style(main);ws.cell(22,11).string('  p3  =').style(main);ws.cell(22,12).number(parseFloat(d_result.analisis[0]) ).style(main);ws.cell(22,13).string('kg').style(main);
ws.cell(23,9).string('Arena').style(main);ws.cell(23,10).string('5').style(main);ws.cell(23,11).string('  p3  =').style(main);ws.cell(23,12).formula('=REDONDEAR(L11*L17/35.315,1)').style(main);ws.cell(23,13).string('kg').style(main);
ws.cell(24,12).formula('=+L22+L23').style({font:{bold:true}});ws.cell(24,13).string('kg').style({font:{bold:true}});


var main = wb.createStyle({
    defaultFont: {
        size: 12,
        name: 'Calibri',
        color: 'FFFFFFFF',
    },
    numberFormat: '#,##0.0000; ($#,##0.0000); -'
});

ws.cell(26,8,26,11,true).string('Rendimiento de la mezcla').style(main);
ws.cell(27,8).string('Cemento').style(main);ws.cell(27,9,27,11,true).string(d_result.analisis[0]+' kg/'+d_User.densidad_cemento+' kg/m3').style(main);ws.cell(27,12).formula('=+REDONDEAR(L22/L13,4)').style(main);ws.cell(27,13).string('m3').style(main);
ws.cell(28,8).string('Arena').style(main);ws.cell(28,9,28,11,true).string(d_result.analisis[1]+' kg/'+ d_User.densidad_arena+' kg/m3').style(main);ws.cell(28,12).formula('=REDONDEAR(L23/L14,4)').style(main);ws.cell(28,13).string('m3').style(main);
ws.cell(29,8).string('Agua').style(main);ws.cell(29,9,29,11,true).string('('+d_result.analisis[0]+' kg x '+d_result.agua_cemento+')/'+d_User.densidad_agua+' kg/m3').style(main);ws.cell(29,12).formula('=REDONDEAR((L22*L19)/L15,4)').style(main);ws.cell(29,13).string('m3').style(main);
ws.cell(30,12).formula('=SUMA(L27:L29)').style(main);ws.cell(30,13).string('m3').style(main);
ws.cell(31,8,31,10,true).string('Aire Incorporado').style(main);ws.cell(31,12).formula('=+L30*L18/100').style(main);ws.cell(31,13).string('m3').style(main);
var main = wb.createStyle({
    font:{
        bold:true,
        size:12
    },
    numberFormat: '#,##0.0000; ($#,##0.0000); -'
});

ws.cell(32,8).string('Total').style(main);ws.cell(32,12).formula('=+L31+L30').style(main);ws.cell(32,13).string('m3').style(main);



var main = wb.createStyle({

});

ws.cell(35,4).string('Ladrillo').style(main);ws.cell(35,5,35,6,true).string('Cemento bolsas').style(main);ws.cell(35,7,35,8,true).string('Arena m3  ').style(main);ws.cell(35,9,35,10,true).string('Agua m3').style(main);
ws.cell(36,4).string('Soga').style(main);ws.cell(36,5,36,6,true).formula('=REDONDEAR(F17/$L$32,4)').style(main);ws.cell(36,7,36,8,true).formula('=REDONDEAR(($L$11/35.315)*E36,4)').style(main);ws.cell(36,9,36,10,true).formula('=REDONDEAR((($L$22*E36)*$L$19)/1000,4)').style(main);
ws.cell(37,4).string('Cabeza').style(main);ws.cell(37,5,37,6,true).formula('=REDONDEAR(F18/$L$32,4)').style(main);ws.cell(37,7,37,8,true).formula('=REDONDEAR(($L$11/35.315)*E37,4)').style(main);ws.cell(37,9,37,10,true).formula('=REDONDEAR((($L$22*E37)*$L$19)/1000,4)').style(main);
ws.cell(38,4).string('Canto').style(main);ws.cell(38,5,38,6,true).formula('=REDONDEAR(F19/$L$32,4)').style(main);ws.cell(38,7,38,8,true).formula('=REDONDEAR(($L$11/35.315)*E38,4)').style(main);ws.cell(38,9,38,10,true).formula('=REDONDEAR((($L$22*E38)*$L$19)/1000,4)').style(main);



wb.writeToBuffer().then(function (buffer) {
    console.log("buffer :",buffer);
    callback(buffer);
});
	// res.attachment('report.xlsx'); 
	// return res.send(report);
}

module.exports=reporte;