(function(){
  "use strict";
  angular.module("bricksApp")
   .controller("TabsCtrl",TabsCtrl);

   
  function TabsCtrl($scope){
    var me = this;
    me.showLeyenda1=true;
    me.showLeyenda2=false;
	  $scope.tab=1;
	  $scope.setTab= function(newTab){
      if(newTab===2){
        me.showLeyenda1=!me.showLeyenda1;
        me.showLeyenda2=!me.showLeyenda2;
      }
      if(newTab===1){
        me.showLeyenda1=!me.showLeyenda1;
        me.showLeyenda2=!me.showLeyenda2;
      }
		  $scope.tab=newTab;
	  }
	  $scope.isSet=function(tabNum){
		  return $scope.tab === tabNum;
	  }
    
      me.nombre=""

      me.lista1=[
          {
              sigla:"L :",
              descripcion:"lo de ladrillo",
              id:"longitud",
              value:""
          },
          {
              sigla:"A :",
              descripcion:"Ancho del ladrillo",
              id:"ancho",
              value:""
          },
          {
              sigla:"H :",
              descripcion:"Altura del ladrillo",
              id:"altura",
              value:""
          },
          {
              sigla:"Jh:",
              descripcion:"Espesor de la junta horizontal",
              id:"horizontal",
              value:""
          },
          {
              sigla:"Jv:",
              descripcion:"Espesor de la junta vertical",
              id:"vertical",
              value:""
          },
          {
              sigla:"",
              descripcion:"Porcentaje de desperdicio",
              id:"desperdicio",
              value:""
          } 
      ];
      me.lista2=[
          {
             direccion:"Soga",
             descripcion:"largo por alto",
             id1:"cSinDesSoga",
             value1:"",
             id2:"cConDesSoga",
             value2:""
          },
          {
             direccion:"Cabeza", 
             descripcion:"ancho por alto",
             id1:"cSinDesCabeza",
             value1:"",
             id2:"cConDesCabeza",
             value2:""
          },
          {
             direccion:"Canto", 
             descripcion:"largo por ancho",
             id1:"cSinDesCanto",
             value1:"",
             id2:"cConDesCanto",
             value2:""
          }
      ];
      me.lista3=[
          {
            direccion:"Soga",
            id1:"mSinDesSoga",
            value1:"",
            id2:"mConDesSoga",
            value2:""
          },
          {
            direccion:"Cabeza",
            id1:"mSinDesCabeza",
            value1:"",
            id2:"mConDesCabeza",
            value2:""
          },
          {
            direccion:"Canto",
            id1:"mSinDesCanto",
            value1:"",
            id2:"mConDesCanto",
            value2:""
          }
      ];
      me.mDesperdicio=""
      me.datosMezcla=[
          {
            descripcion:"Mezcla",
            value:5,
            id:"mMezcla"
          },
          {
            descripcion:"Densidad - Peso unitario",
            input:false
          },
          {
            descripcion:"Cemento",
            value:3150,
            id:"mCemento",
            medida:"Kg/m3"
          },
          {
            descripcion:"Arena",
            value:2700,
            id:"mArena",
            medida:"Kg/m3"
          },
          {
            descripcion:"Agua",
            value:1000,
            id:"mAgua",
            medida:"Kg/m3"
          },
          {
            descripcion:"Peso específico",
            input:false
          },
          {
            descripcion:"Arena",
            value:1600,
            id:"mArena2",
            medida:"Kg/m3"
          },
          {
            descripcion:"% de aire incorporado",
            value:1,
            id:"mAireIncorporado",
            medida:"%"
          },
          {
            descripcion:"Relacion de Agua/Cemento",
            value:0.8,
            id:"mAguaCemento"
          }
      ];
      me.mAnalisis=[
        {value:""},
        {value:""},
        {value:""}
      ];
      me.mRendimiento=[
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""}
      ];
      me.lista4=[
          {
              direccion:"Soga",
              id1:"sogaCemento",
              value1:"",
              id2:"sogaArena",
              value2:"",
              id3:"sogaAgua",
              value3:""
          },
          {
              direccion:"Cabeza",
              id1:"cabezaCemento",
              value1:"",
              id2:"cabezaArena",
              value2:"",
              id3:"cabezaAgua",
              value3:""
          },
          {
              direccion:"Canto",
              id1:"cantoCemento",
              value1:"",
              id2:"cantoArena",
              value2:"",
              id3:"cantoAgua",
              value3:""
          }
      ];
      me.leyenda1=[
        {
            sigla:"C",
            signi:"Cantidad de ladrillos por m2"
        },
        {
            sigla:"L",
            signi:"Longitud de ladrillo (m)"
        },
        {
            sigla:"JH",
            signi:"Espesor de la junta horizontal (m)"
        },
        {
            sigla:"H",
            signi:"Altura del ladrillo"
        },
        {
            sigla:"JV",
            signi:"Espesor de la junta vertical"
        }
      ];
      me.leyenda2=[
        {
            sigla:"VM",
            signi:"Volumen de mezcla (m3/m2) en muro"
        },
        {
            sigla:"Vm",
            signi:"Volumen del muro (m2)"
        },
        {
            sigla:"n",
            signi:"Número de ladrillos por m2"
        },
        {
            sigla:"l",
            signi:"Volumen de un ladrillo (m3)"
        }
      ];
      var array2=[];
      $scope.relacion = function(num){
        console.log(num);
        switch(num)
          {
            case '1': me.datosMezcla[8].value=0.29 ; break;
            case '2': me.datosMezcla[8].value=0.43 ; break;
            case '3': me.datosMezcla[8].value=0.57 ; break;
            case '4': me.datosMezcla[8].value=0.72 ; break;
            case '5': me.datosMezcla[8].value=0.8 ; break;
            case '6': me.datosMezcla[8].value=1 ; break;
            case '7': me.datosMezcla[8].value=1.14 ; break;
            case '8': me.datosMezcla[8].value=1.29 ; break;
            default: me.datosMezcla[8].value=""; break;
          };
          $scope.mezcla();
      }
      $scope.valida = function(num,index){
        if (!(/^([0-9])*[.]?[0-9]*$/.test(num)))
            me.lista1[index].value='';
        var array1=[]; var cont=0;
        for (var i = 0; i < 6 ; i++) {
          if(me.lista1[i].value>0){
            array1[i]=parseFloat(me.lista1[i].value);
            cont++;
          }
        }
        if(cont==6){
          me.lista2[0].value1=parseFloat((10000/((array1[0]+array1[3])*(array1[2]+array1[4]))).toFixed(1));
          me.lista2[0].value2=Math.ceil((me.lista2[0].value1*array1[5]/100)+me.lista2[0].value1);
          me.lista2[1].value1=parseFloat((10000/((array1[1]+array1[3])*(array1[2]+array1[4]))).toFixed(1));
          me.lista2[1].value2=Math.ceil((me.lista2[1].value1*array1[5]/100)+me.lista2[1].value1);
          me.lista2[2].value1=parseFloat((10000/((array1[0]+array1[3])*(array1[1]+array1[4]))).toFixed(1));
          me.lista2[2].value2=Math.ceil((me.lista2[2].value1*array1[5]/100)+me.lista2[2].value1);
          me.lista3[0].value1=parseFloat(((array1[1]/100)-(me.lista2[0].value1*((array1[0]/100)*(array1[1]/100)*(array1[2]/100)))).toFixed(4));
          me.lista3[1].value1=parseFloat(((array1[0]/100)-(me.lista2[1].value1*((array1[0]/100)*(array1[1]/100)*(array1[2]/100)))).toFixed(4));
          me.lista3[2].value1=parseFloat(((array1[2]/100)-(me.lista2[2].value1*((array1[0]/100)*(array1[1]/100)*(array1[2]/100)))).toFixed(4));
        }
        else{
          for (var i = 0; i < 3; i++) {
            me.lista2[i].value1=null;
            me.lista2[i].value2=null;
            me.lista3[i].value1=null;
          }
        }  
      } 
      $scope.mValida=function(){
        if(me.mDesperdicio2>0){
          me.lista3[0].value2=parseFloat((((me.lista3[0].value1*me.mDesperdicio2)/100)+me.lista3[0].value1).toFixed(4));
          me.lista3[1].value2=parseFloat((((me.lista3[1].value1*me.mDesperdicio2)/100)+me.lista3[1].value1).toFixed(4));
          me.lista3[2].value2=parseFloat((((me.lista3[2].value1*me.mDesperdicio2)/100)+me.lista3[2].value1).toFixed(4));
          $scope.mezcla();
        }else $scope.vacio();
      }
      $scope.decimal= function(){
        for(var i=0; i<6; i++){
            if(me.lista1[i].value>0){
               me.lista1[i].value=(parseFloat(me.lista1[i].value)).toFixed(2);
            }
        }        
      }
      $scope.salto0=function($event,id){
          var keyCode = $event.which || $event.keyCode;
          if(keyCode===13 || keyCode===40)
              $("#"+id).focus();
      }
      $scope.salto=function($event,index){
          var keyCode = $event.which || $event.keyCode;
          if(keyCode===13 || keyCode===40){
            if(index==5) index=0;
            else index++;
            $("#"+me.lista1[index].id).focus();
          }
          if(keyCode===38){
            if(index==0) index=5;
            else index--;
            $("#"+me.lista1[index].id).focus();
          }   
      }
      $scope.salto1=function($event,index){
          var keyCode = $event.which || $event.keyCode;
          if(keyCode===13 || keyCode===40){
            if(index==8) index=0;
            else
              if(index==4 || index==0) index=index+2;
              else index++;
            $("#"+me.datosMezcla[index].id).focus();
          }
          if(keyCode===38){
            if(index==0) index=8;
            else
              if(index==6 || index==2) index=index-2;
              else index--;
            $("#"+me.datosMezcla[index].id).focus();
          }   
      }
      $scope.mezcla=function(){
        var i=0, j=0; var cont=0;
        while(i<9){
          if(me.datosMezcla[i].value>0){
            array2[j]=parseFloat(me.datosMezcla[i].value);
            cont++;
          }
          j++;
          if(i==0) i=2;
          else
            if(i==4) i=6;
            else i++;
        }
        console.log(array2);
        if(cont==7){
          // analisis
          me.mAnalisis[0].value=42.5;
          me.mAnalisis[1].value=parseFloat(((array2[0]*array2[4])/35.315).toFixed(1));
          me.mAnalisis[2].value=parseFloat((me.mAnalisis[0].value+me.mAnalisis[1].value).toFixed(1));
          // rendimiendo
          me.mRendimiento[0].value=me.mAnalisis[0].value;
          me.mRendimiento[1].value=array2[1];
          me.mRendimiento[2].value=parseFloat((me.mAnalisis[0].value/array2[1]).toFixed(4));
          me.mRendimiento[3].value=me.mAnalisis[1].value;
          me.mRendimiento[4].value=array2[2];
          me.mRendimiento[5].value=parseFloat((me.mAnalisis[1].value/array2[2]).toFixed(4));  
          me.mRendimiento[6].value=me.mAnalisis[0].value;
          me.mRendimiento[7].value=array2[6];
          me.mRendimiento[8].value=array2[3];
          me.mRendimiento[9].value=parseFloat(((me.mAnalisis[0].value*array2[6])/array2[3]).toFixed(4));
          me.mRendimiento[10].value=parseFloat((me.mRendimiento[2].value+me.mRendimiento[5].value+me.mRendimiento[9].value).toFixed(4));
          me.mRendimiento[11].value=parseFloat(((me.mRendimiento[10].value*array2[5])/100).toFixed(4));
          me.mRendimiento[12].value=parseFloat((me.mRendimiento[10].value+me.mRendimiento[11].value).toFixed(4)); 
          // analisis de costos unitarios
          for (var i = 0; i < 3; i++) {
            me.lista4[i].value1=(me.lista3[i].value2/me.mRendimiento[12].value).toFixed(4);
            me.lista4[i].value2=(((array2[0]/35.315)*me.lista4[i].value1)).toFixed(4);
            me.lista4[i].value3=((me.mAnalisis[0].value*me.lista4[i].value1*array2[6])/1000).toFixed(4);  
          }
        }
        else{
          $scope.vacio();
        }
      }
      $scope.vacio=function(){
        for (var i = 0; i < 3; i++) {
            me.lista4[i].value1=null;
            me.lista4[i].value2=null;
            me.lista4[i].value3=null;
            me.mAnalisis[i].value=null;
          }
          for (var i = 0; i < 13; i++) {
            me.mRendimiento[i].value=null;
          }
      }
      me.guardar=function(){
        toastr.success('Guardado exitósamente')
      }
      me.cancelar=function(){
        toastr.info('Proyecto nuevo cancelado')
      }
  }
 }());