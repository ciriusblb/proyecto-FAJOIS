var app = angular.module('app', []);

app.controller('Ctrl', ['$scope','$http', function($scope,$http){
	
	var numero = 10;
	$scope.ruta = '';

  $scope.tabs = {
    view : {key:1},
    select : tab=>{
      $scope.tabs.view = tab;
      document.getElementById('pdfV').src = tab.binary;
    },
    list:[
      {key: 1, denomination: "reporte 1"},
      {key: 2, denomination: "reporte 2"},
      {key: 3, denomination: "reporte 3"},
      {key: 4, denomination: "reporte 4"},
      {key: 5, denomination: "reporte 5"},
    ]

  }
	$scope.datos = {};
	$scope.datos.nombre = 'FAJOIS';
	$scope.datos.apellidos = 'SA';
  var contador = 1,contador_cab=1;

  //TIME
  var date = new Date();
  $scope.FromDate = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();
  if(date.getHours() + '-' + ('0' + (date.getMinutes())).slice(-2)<12)
  {
     $scope.FromTime = date.getHours() + ':' + ('0' + (date.getMinutes())).slice(-2) +'A.M.';
  }
  else
  {
    $scope.FromTime = (date.getHours()-12) + ':' + ('0' + (date.getMinutes())).slice(-2) +'P.M.';
  }

  $scope.cabecera = {

    detalle:[
      {titulo:'GOBIERNO REGIONAL DE MADRE DE DIOS',state:0,submit:true},
      {titulo:'Gerencia Regional de Infraestructura',state:0,submit:true},
      {titulo:'Sub Gerencias de Estudios de Infraestructura',state:0,submit:true}],
    
    titulo_principal:'RESUMEN DEL PRESUPUESTO',
    titles:[
    {text:'Construcción de vivienda',submit:true},
    {text:'Estructuras',submit:true},
    {text:'Akira Toriyama',submit:true},
    {text:'Tambopata - Tambopata - Madre de Dios',submit:true},
    {text:'30 de Abril del 2016',submit:true},
    ],
    tiempo:[
      {text:$scope.FromTime,submit:true},
      {text:$scope.FromDate,submit:true},
    ],
    numero:contador_cab    
  };

   $scope.firmas = [
     {tipo:1, detalle:[
        {name:'Akira Toriyama',state:0},
        {name:'Ing. Goku',state:0},
        {name:'CIP: 123456',state:0}
      ], numero:contador}
   ];

	 $scope.checkboxModel = {
   detalle:[   
       {value : true},
       {value : true},
       ]
    };
   $scope.reportes={
    detalle:[
    {key:1,type:"resumen 1",value:false},
    {key:2,type:"resumen 2",value:false},
    {key:3,type:"insumo",value:false},
    {key:4,type:"analisis",value:true},
    {key:5,type:"formula",value:false},
    {key:5,type:"programacion",value:false},

    ]
   }

  tipo_firma='texto'
  
	$scope.enviar = function() {
		$scope.ruta = '';
    
		$http.post('/pdf',{datos : $scope.cabecera}). 
          success(function(data, status, headers, config){   
          	console.log(data);
          	if(data.state == 'success'){
          		$scope.ruta = '/'+data.name;
          	}
          });
	}

  $scope.cambiar = function() {
    this.d.state = 1;
  }
  $scope.cambiar2 = function() {
    this.d.state = 0;
  }

  $scope.plus = function() {
    alert("hola");
    contador++;
    var  temporal= {tipo:1, detalle:[ 
        {name:'Akira Toriyama',state:0},
        {name:'Ing. Goku',state:0},
        {name:'CIP: 123456',state:0}
      ], numero:contador};
    
    $scope.firmas.push(temporal);
  }
  $scope.agregar = function() {
    contador++;
    var  temporal= {tipo:2, detalle:[ 
        {name:'Akira Toriyama',state:0},
        {name:'Ing. Goku',state:0},
        {name:'CIP: 123456',state:0}
      ], numero:contador};
    
    $scope.firmas.push(temporal);
  }

  $scope.pdfs = (list, indice)=>{

    if (list.length > indice) {
      if (list[indice].value==true) {
        $scope.cabecera.type = list[indice].type;
        $http.post('/pdf', $scope.cabecera).
        success(function(data, status, headers, config) {
          // console.log(document.getElementById('pdfV'));
          
          // document.getElementById('pdfV').src = data;
         

          // list[indice].binary = data;
          $scope.tabs.list[list[indice].key - 1].binary = data;

          $scope.pdfs(list, indice+1)
        }).
        error(function(data, status, headers, config) {
          console.log('ERROR', data);
        });
      }
      else
         $scope.pdfs(list, indice+1)
    }else{
      document.getElementById('pdfV').src = $scope.tabs.list[$scope.tabs.view.key - 1].binary;

    }
  }

  $scope.generate = function() {
    $scope.cabecera.c_title = "PROBANDO!";
    $scope.cabecera.c_precio = 1000;
    $scope.cabecera.firmas = $scope.firmas;
    $scope.cabecera.reportes = $scope.reportes;
    $scope.cabecera.checkboxModel = $scope.checkboxModel;

    $scope.pdfs($scope.reportes.detalle, 0);

   $http.post('/pdf', $scope.cabecera).
    success(function(data, status, headers, config) {
      document.getElementById('pdfV').src = data;
    }).
    error(function(data, status, headers, config) {
      console.logs('ERROR', data);
    });
  }

/*
  $scope.plus_cab = function() {
    contador_cab++;
    var temporal = {titulo:'Ingrese descripcion',state:1}
    $scope.cabecera.detalle.push(temporal);
  }
*/

/*

  $scope.remove_cabecera = function() {
    var index = this.$index;  
    $scope.cabecera.detalle[index].splice(1,1,1);
    alert("holaa");
      }*/

  $scope.remove_firma = function() {
    var index = this.$index;
  
    $scope.firmas.splice(index,1);
    contador=contador-1;
  }

}]);


app.directive('embedSrc', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var current = element;
      scope.$watch(function() { return attrs.embedSrc; }, function () {
        var clone = element
                      .clone()
                      .attr('src', attrs.embedSrc);
        current.replaceWith(clone);
        current = clone;
      });
    }
  };
})