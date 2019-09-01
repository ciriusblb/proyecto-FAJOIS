(function(){
	"use strict";
	angular.module("bricksApp")
		.controller("ItemsCtrl",ItemsCtrl );
	function ItemsCtrl($scope,DateResource,$http,$state,$interval,$cookieStore,$location,Idle,$uibModal,Keepalive){
		var me = this;

    // $location.path('/bricksApp');//redireccionamiento por defecto
    //inicio de controlador de tiempo de sesion
    function closeModals() {
      if ($scope.warning) {
        $scope.warning.close();
        $scope.warning = null;
      }
      if ($scope.timedout) {
        $scope.timedout.close();
        $scope.timedout = null;
      }
    }

    $scope.$on('IdleStart', function() {
      closeModals();
      $scope.warning = $uibModal.open({
        templateUrl: 'warning-dialog.html',
        windowClass: 'modal-warning'
      });
    });

    $scope.$on('IdleEnd', function() {
      closeModals();
      $scope.start();
    });

    $scope.$on('IdleTimeout', function() {
      closeModals();
      $scope.timedout = $uibModal.open({
        templateUrl: 'timedout-dialog.html',
        windowClass: 'modal-danger'
      });
      $scope.stop();
      me.salir();
    });

    $scope.start = function() {
      console.log('start');
      closeModals();
      Idle.watch();
    };

    $scope.stop = function() {
      console.log('stop');
      closeModals();
      Idle.unwatch();
    };
     //fin de controlador de tiempo de sesion


    me.view=0;
    me.pest=0;
    me.pestOper="nuevo";
    me.check=[];
    me.checked=[];



    //inicio de obtención de usuario logueado
    var usr = $cookieStore.get('usuario');
    me.usuario={
      names:usr.names,
      last_names:usr.last_names,
      email:usr.email
    }
    //fin de obtención de usuario logueado

    //obtenemos todos los registros de usuario logueado 
    DateResource.query({email:usr.email},function(data){
      me.itemData=data;
       console.log("vemoss",data);
       actualizar();
       console.log("itemData  : ",me.itemData);

       me.operacionesRes=me.operaciones(data);
       me.items=me.operacionesRes.resultItem;
       me.itemsOpera=me.operacionesRes.resultOpera;
       me.itemSearch="";

       me.navItems=Math.ceil(me.items.length/7);
       me.navItems= new Array(me.navItems);
       me.select=false;
       me.activarForm=false;
       me.indexItems(0);

       console.log(me.items);
       nuevo();
    }); 
    //fin

    me.cancelar=function(form){
      me.stop();
      $state.go("bricksApp/");
      me.activarForm=false;
      nuevo();
      if (me.position!=null) {
        me.itemData[me.position].state=0;
      }
      
    }

    //inicio de la función del boton guardar, nuevo como edicion
    me.guardar=function(bricksForm){
                me.stop();
                if(me.itemEdit.id_data==0)
                {
                  //nuevo
                    DateResource.save(me.itemEdit)
                      .$promise.then(function(user) {
                        console.log(user);
                          me.itemEdit.id_data=user.resultId;
                          //actualizar arreglo que contiene los datos de la tabla
                          me.itemData.push(me.itemEdit);//contiene todo los datos extraido
                          me.itemData[me.itemData.length-1].item=me.itemData.length;
                          me.itemData[me.itemData.length-1].state=0;
                          me.navItems=Math.ceil(me.itemData.length/7);
                          var aux=me.navItems;
                          me.navItems= new Array(me.navItems); 
                          me.indexItems(aux-1);
                          me.position=me.itemData.length-1;
                          nuevo();
                          //fin actualizar
                      }); 
                }else{
                  //editar
                    DateResource.update(me.itemEdit, function(data) {
                          console.log(data);
                          console.log(me.position);
                          me.itemData[me.position]=me.itemEdit;
                          me.itemData[me.position].item=me.position+1;
                          me.itemData[me.position].state=0;
                          nuevo();
                     });;
                }
                me.activarForm=false;


                //redirigimos al usuario
        };



    //inicio función eliminar

    me.eliminar = function(){

                  swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                  }).then(function () {
                              if (me.checked.length>0) {
                                    for (var i = 0; i < me.checked.length; i++) {
                                      console.log("me.checked.length ",me.checked);
                                      DateResource.remove([me.checked[i].id],function(user) {
                                      }); 
                                       console.log(me.checked[i].pos);
                                         for (var j = 0; j < me.itemData.length; j++) {
                                           if (me.itemData[j].id_data==me.checked[i].id) {
                                            var index=j;
                                            me.itemData.splice(index, 1);
                                           }
                                         }   
                                    }
                                    actualizar();
                                    me.navItems=Math.ceil(me.itemData.length/7);
                                    var aux=me.navItems;
                                    me.navItems= new Array(me.navItems);
                                    me.indexItems(0);
                                    me.position=null;
                                    me.checked=[];
                                }else{
                                        DateResource.remove([me.itemEdit.id_data])
                                          .$promise.then(function(user) {
                                              console.log("remove ",user);
                                              me.itemData.splice(me.position, 1);
                                              console.log("objeto de editar",me.itemEdit);
                                              actualizar();
                                              nuevo();
                                              me.navItems=Math.ceil(me.itemData.length/7);
                                              var aux=me.navItems;
                                              me.navItems= new Array(me.navItems);
                                              if (aux==me.positionNav&&me.positionNav>0) {
                                                me.indexItems(aux-1);
                                              }
                                              me.position=null;
                                        }); 
                                }
                          swal(
                                  'Deleted!',
                                  'Your file has been deleted.',
                                  'success',
                            );
                  }, function (dismiss) {
                    // dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                    if (dismiss === 'cancel') {
                      swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                      )
                    }
                  })

    };
    //fin función eliminar

    function reporte(){
        DateResource.datas=[me.itemEdit,me.itemResult];
      }

    me.cambiar = function(m){
      me.itemData[m].state=!me.itemData[m].state;
      if(me.itemData[m].state==1)
      {
        me.position=m;
        me.itemEdit=me.itemData[m];
        me.converFloat();
        me.operacionesRes=me.operaciones([me.itemEdit]);
        me.items=me.operacionesRes.resultItem;
        me.itemsOpera=me.operacionesRes.resultOpera;
        me.itemResult=me.itemsOpera[0];
        reporte();
        
      }else{
         me.position=null;
          $interval.cancel(me.promise); 
         nuevo();
      }     
    }


     me.see=function(id,pos){
    me.position=null;
    me.check[pos]== !me.check[pos];
    if(me.check[pos]==true){
      me.checked.push({
        id:id,
        pos:pos
      });
    }else{
      for (var i =0; i < me.checked.length; i++) {
        if(me.checked[i].id==id){
          me.checked.splice(i, 1);
        }
      }
    }
  }

    me.tools=function(){
          me.select=!me.select;
          if (me.select==false) {
            me.iniciarCheck();
          }
    }

    //inicio funcion nuevo
    function nuevo(){
        var nuevo = {
        id_data:0,
        descripcion :"",
        email:usr.email,
        longitud:'',
        ancho:'',
        aire:1,
        altura:'',
        cantidad_desperdicio:'',
        densidad_agua:1000,
        densidad_arena:2700,
        densidad_cemento:3150,
        espesor_horizontal:'',
        espesor_vertical:'',
        mezcla:5,
        mezcla_desperdicio:10,
        peso_arena:1600
      };
      var result = {
        c_soga:[0,0],
        c_cabeza:[0,0],
        c_canto:[0,0],
        m_soga:[0,0],
        m_cabeza:[0,0],
        m_canto:[0,0],
        analisis:[0,0,0],
        rendimiento:[0,0,0,0,0,0],
        cemento:[0,0,0],
        arena:[0,0,0],
        agua:[0,0,0],
        agua_cemento:0.8
      };
      me.itemEdit=nuevo;
      me.itemResult=result;
    }
    //fin función nuevo

    



    //inicio función actualizar
    function actualizar(){
      for (var i = 0; i < me.itemData.length; i++) {
        me.itemData[i].state=0;
        me.itemData[i].item=i+1;
        me.check[i]=false;
      }
    }
    //fin función actualizar


      me.iniciarCheck=function(){
    me.checked=[];
    for (var i = 0; i < me.itemData.length; i++) {
      me.check[i]=false;
    }
  }


		//limite y inicio
    me.user = function(){
      me.view=!me.view;
    };

    //
     me.start = function(index){
      me.promise=$interval(function(){
          me.itemResult=me.operaciones([me.itemEdit]).resultOpera[0];
          console.log(me.itemResult);
         },2000);
      me.activarForm=true;
      var pestOperacion=['nuevo','editar','eliminar','reporte'];
      me.pestOper=pestOperacion[index];
      
    }; 
    //

    //inicio boton cancelar
     me.stop = function(){
      $interval.cancel(me.promise);

    };
    //fin boton cancelar

   me.indexItems=function(idx){
        if(idx>=0&&idx< me.navItems.length){
                me.positionNav=idx;
                me.finLim=parseInt((idx+1)*7);      
                me.iniLim=parseInt(me.finLim-7);
                if(me.position!=null&&me.itemData[me.position].state==1){ me.cambiar(me.position);}
                me.position=null;
                
        }
    };
		// me.indexItems(0);

		//pestaña y leyenda
	  me.navTab=function(m){
	    me.pest=m;
	  }	

   
    //inicio cerrar sesion
    me.salir=function(){
      $scope.userConectado.names="";
      $scope.userConectado.last_names="";
      $scope.userConectado.email="";
      $scope.userConectado.conectado="";
      console.log("mainCtrl ",$scope.userConectado);
      $cookieStore.remove("estaConectado");
      $cookieStore.remove("usuario");
      $state.go("login");
    }
    //fin cerrar sesion

    me.decimales=function(value){
      if (parseFloat(me.itemEdit[value])) {
        me.itemEdit[value]=parseFloat(me.itemEdit[value]).toFixed(2);
      }
    }

    me.converFloat= function(){
    var aux=['longitud','ancho','altura','cantidad_desperdicio','mezcla_desperdicio','espesor_horizontal','espesor_vertical'];
      for (var i = 0; i <aux.length; i++) {
        me.itemEdit[aux[i]]=parseFloat(me.itemEdit[aux[i]]).toFixed(2);
      }
    }

    me.saltar1 = function(event,idx){
      var k=null;
      (event.keyCode)?k=event.keyCode:k=event.which;
      if(k==13 || k==40)
        $("#"+me.lista1[idx+1]+">input").focus();
      if(k==38)
        $("#"+me.lista1[idx-1]+">input").focus();
    }

    me.saltar2 = function(event,idx){
      var k=null;
      (event.keyCode)?k=event.keyCode:k=event.which;
      if(k==13 || k==40)
        $("#"+me.lista2[idx+1]+">input").focus();
      if(k==38)
        $("#"+me.lista2[idx-1]+">input").focus();
    }

    me.operaciones = function(array){
      var resultItem=[],
          resultOpera=[];
      for (var i = 0; i < array.length; i++) {
        var soga1 = (10000/(( parseFloat(array[i].longitud)+parseFloat(array[i].espesor_horizontal))*(parseFloat(array[i].altura)+parseFloat(array[i].espesor_vertical) ))),
            cabeza1= (10000/(( parseFloat(array[i].ancho)+ parseFloat(array[i].espesor_horizontal))*(parseFloat(array[i].altura)+ parseFloat(array[i].espesor_vertical) ))),
            canto1 = (10000/((parseFloat(array[i].longitud)+parseFloat(array[i].espesor_horizontal))*(parseFloat(array[i].ancho)+parseFloat(array[i].espesor_vertical) ) )),
            soga2 = (soga1*parseFloat(array[i].cantidad_desperdicio)/100)+soga1,
            cabeza2 = (cabeza1*parseFloat(array[i].cantidad_desperdicio)/100)+cabeza1,
            canto2 =  (canto1*parseFloat(array[i].cantidad_desperdicio)/100)+canto1;

        var soga3=( (parseFloat(array[i].ancho)/100)-(soga1*( (parseFloat(array[i].longitud)/100)*(parseFloat(array[i].ancho)/100)*(parseFloat(array[i].altura)/100) ))), 
            cabeza3=( (parseFloat(array[i].longitud)/100)-(cabeza1*( (parseFloat(array[i].longitud)/100)*(parseFloat(array[i].ancho)/100)*(parseFloat(array[i].altura)/100) ))),
            canto3=( (parseFloat(array[i].altura)/100)-(canto1*( (parseFloat(array[i].longitud)/100)*(parseFloat(array[i].ancho)/100)*(parseFloat(array[i].altura)/100) )) );

        var canto4=( ((canto3*parseFloat(array[i].mezcla_desperdicio) )/100)+canto3 ),
            soga4=( ( (soga3*parseFloat(array[i].mezcla_desperdicio))/100)+soga3),
            cabeza4=( ((cabeza3*parseFloat(array[i].mezcla_desperdicio))/100)+cabeza3 ),
            aguacemento=0.8;

        switch(parseInt(array[i].mezcla)){
          case 1: aguacemento=0.29; break;
          case 2: aguacemento=0.43; break;
          case 3: aguacemento=0.57; break;
          case 4: aguacemento=0.72; break;
          case 5: aguacemento=0.8; break;
          case 6: aguacemento=1; break;
          case 7: aguacemento=1.14; break;
          case 8: aguacemento=1.29; break;
          default: aguacemento=0.29; break;
        } 

        var redondeocemento=42.5,
            redondeoarena=(parseInt(array[i].mezcla)*parseInt(array[i].peso_arena) )/35.315,
            sumaredondeo=redondeoarena+redondeocemento,

            resultrendcemento12=redondeocemento/parseInt(array[i].densidad_cemento),
            resultrendarena12=redondeoarena/parseInt(array[i].densidad_arena),
            resultrendagua12=(redondeocemento*aguacemento)/parseInt(array[i].densidad_agua),
            sumaresult12=(resultrendcemento12+resultrendarena12+resultrendagua12),
            aireresult12=(sumaresult12*parseInt(array[i].aire) )/100,
            totalresult12=(sumaresult12+aireresult12),

            resultadosoga1=(soga4/totalresult12),
            resultadosoga2=(parseInt(array[i].mezcla)/35.315)*resultadosoga1,
            resultadosoga3=(redondeocemento*resultadosoga1*aguacemento)/1000,
            resultadocabeza1=(cabeza4/totalresult12),
            resultadocabeza2=(parseInt(array[i].mezcla)/35.315)*resultadocabeza1,
            resultadocabeza3=(redondeocemento*resultadocabeza1*aguacemento)/1000,
            resultadocanto1=(canto4/totalresult12),
            resultadocanto2=(parseInt(array[i].mezcla)/35.315)*resultadocanto1,
            resultadocanto3=(redondeocemento*resultadocanto1*aguacemento)/1000;
          
        var aux ={
              cantidad:[Math.ceil(soga2),Math.ceil(cabeza2),Math.ceil(canto2)],
              cemento:[resultadosoga1.toFixed(4),resultadocabeza1.toFixed(4),resultadocanto1.toFixed(4)],
              arena:[resultadosoga2.toFixed(4),resultadocabeza2.toFixed(4),resultadocanto2.toFixed(4)],
              agua:[resultadosoga3.toFixed(4),resultadocabeza3.toFixed(4),resultadocanto3.toFixed(4)],
              state:0
        },
            aux1 = {
              c_soga:[soga1.toFixed(1),Math.ceil(soga2)],
              c_cabeza:[cabeza1.toFixed(1),Math.ceil(cabeza2)],
              c_canto:[canto1.toFixed(1),Math.ceil(canto2)],
              m_soga:[soga3.toFixed(4),soga4.toFixed(4)],
              m_cabeza:[cabeza3.toFixed(4),cabeza4.toFixed(4)],
              m_canto:[canto3.toFixed(4),canto4.toFixed(4)],
              analisis:[redondeocemento.toFixed(1),redondeoarena.toFixed(1),sumaredondeo.toFixed(1)],
              rendimiento:[resultrendcemento12.toFixed(4),resultrendarena12.toFixed(4),resultrendagua12.toFixed(4),sumaresult12.toFixed(4),aireresult12.toFixed(4),totalresult12.toFixed(4)],
              cemento:[resultadosoga1.toFixed(4),resultadocabeza1.toFixed(4),resultadocanto1.toFixed(4)],
              arena:[resultadosoga2.toFixed(4),resultadocabeza2.toFixed(4),resultadocanto2.toFixed(4)],
              agua:[resultadosoga3.toFixed(4),resultadocabeza3.toFixed(4),resultadocanto3.toFixed(4)],
              agua_cemento:aguacemento
        };
        resultOpera.push(aux1);
        resultItem.push(aux);
              
      }
      return {resultItem,resultOpera};
    }

    me.lista1=["nombre","longitud","ancho","altura","espesor_horizontal","espesor_vertical","cantidad_desperdicio"];
    me.lista2=["mezcla_desperdicio","mezcla","densidad_cemento","densidad_arena","densidad_agua","peso_arena","aire"];
    
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


	}
}());