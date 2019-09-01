
(function(){
	'use strict';
	 angular.module('bricksApp')
	  .controller("PdfCtrl", PdfCtrl);
	  function PdfCtrl($http,DateResource){

	  	var me = this;
	  	me.indexFormato=2;
	  	
	  	me.data=DateResource.datas;

	  	console.log("asdasdasdasdasdasdasdasdasdasdasd ",me.data);
	  	var contador=1;

   		var date = new Date();
		  me.FromDate = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();
		  if(date.getHours() + '-' + ('0' + (date.getMinutes())).slice(-2)<12)
		  {
		     me.FromTime = date.getHours() + ':' + ('0' + (date.getMinutes())).slice(-2) +'A.M.';
		  }
		  else
		  {
		    me.FromTime = (date.getHours()-12) + ':' + ('0' + (date.getMinutes())).slice(-2) +'P.M.';
		  }

	  	  var datos=$('#cantidad').html();
	  	  $('#pdfCantidad').html(datos);
		  me.cabecera = {
		    detalle:[
		      {titulo:'GOBIERNO REGIONAL DE MADRE DE DIOS',state:0,submit:true},
		      {titulo:'Gerencia Regional de Infraestructura',state:0,submit:true},
		      {titulo:'Sub Gerencias de Estudios de Infraestructura',state:0,submit:true}],
		    titulo_principal:'RESUMEN DEL PRESUPUESTO',
		    titles:[
		    {text:'Construcción de vivienda',submit:true},
		    {text:'Akira Toriyama',submit:true},
		    {text:'Tambopata - Tambopata - Madre de Dios',submit:true},
		    {text:'30 de Abril del 2016',submit:true},
		    ],
		    tiempo:[
		      {text:me.FromTime,submit:true},
		      {text:me.FromDate,submit:true},
		    ],
		    diseno:'portrait',
		    tipo:'pdf'
		  };
		  me.checkboxModel = {
			   detalle:[   
			       {value : true},
			       {value : true},
			       ]
			    };
	      me.firmas = [
		     {tipo:1, detalle:[
		        {name:'Akira Toriyama',state:0},
		        {name:'Ing. Goku',state:0},
		        {name:'CIP: 123456',state:0}
		      ], numero:contador}
		   ];



		  me.createPdf=function(){
		   me.cabecera.firmas=me.firmas;
		   me.cabecera.checkboxModel=me.checkboxModel;
		   me.cabecera.dataUser=me.data[0];
		   me.cabecera.result=me.data[1];
		    $http.post('/reporte/',me.cabecera).
		    then(function(datas) {
		    	console.log("reporte",datas);
		    	var mimesType=['application/msword','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/pdf'];
    			var blob = new Blob([me.s2ab(window.atob(datas.data))], {
					    type: mimesType[me.indexFormato]
					});
				var href = URL.createObjectURL(blob);
    			window.open(href);
    			// application/msword
		        });
		  }



		me.s2ab=function(s) {
		  var buf = new ArrayBuffer(s.length);
		  var view = new Uint8Array(buf);
		  for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		  return buf;
		}
     function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'type:application/vnd.ms-excel/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

		  me.formato=function($index){
		  	me.indexFormato=$index;
		  	var formatos=['doc','xls','pdf'];
		  	me.cabecera.tipo=formatos[$index];
		  }
		  me.cambiar = function(pos,$index) {
			    me.firmas[pos-1].detalle[$index].state=1;
			  }
		  me.cambiar2 = function(pos,$index) {
			    me.firmas[pos-1].detalle[$index].state=0;
			  }

		  me.plus = function() {
			    contador++;
			    var  temporal= {tipo:1, detalle:[ 
			        {name:'Akira Toriyama',state:0},
			        {name:'Ing. Goku',state:0},
			        {name:'CIP: 123456',state:0}
			      ], numero:contador};
			    
			    me.firmas.push(temporal);
			  }
		  me.agregar = function() {
			    contador++;
			    var  temporal= {tipo:2, detalle:[ 
			        {name:'Akira Toriyama',state:0},
			        {name:'Ing. Goku',state:0},
			        {name:'CIP: 123456',state:0}
			      ], numero:contador};
			    
			    me.firmas.push(temporal);
			  }
		  me.remove_firma = function($index) {
		    me.firmas.splice($index,1);
		    contador=contador-1;
		  }

	  }
}());