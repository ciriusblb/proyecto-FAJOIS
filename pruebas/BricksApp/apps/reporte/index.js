'use strict';
var reporte={};
var pdf=require('./pdf/index.js').createPDFBinary,	
	word=require('./word/index.js').WORD,
	excel=require('./excel/index.js').EXCEL;

reporte.createReporte=function(pdfData,callback){
	let datos=pdfData;
	let d_tipo=pdfData.tipo;
	switch(d_tipo){
		case 'pdf':
			pdf(datos,function(res){
				callback(res);
			});
		break;
		case 'doc':
			word(datos,function(res){		  
				callback(res);
			} );
		break;
		case 'xls':
			excel(datos,function(res){
				callback(res);
			});
		break;
	}
}
module.exports=reporte;