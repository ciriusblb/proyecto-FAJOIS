(function(){
	"use strict";
	angular.module("bricksApp")
		.controller("ItemsCtrl",ItemsCtrl );
	function ItemsCtrl($scope,DateResource,$http,$state,$interval,$cookieStore,$location,Idle,$uibModal,Keepalive){
		var me = this;

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
      
me.close=function(){
  alert("hola");
}



    me.view=0;
    $location.path('/bricksApp');
      var usr = $cookieStore.get('usuario');
    me.usuario={
      names:usr.names,
      last_names:usr.last_names,
      email:usr.email
    }
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
		   	},
        result = {
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
		me.pest=0;

    me.leyenda1=[
      {
        sigla: "asd",
        signi:"hola1"
      },
      {
        sigla: "asd",
        signi:"hola2"
      },
      {
        sigla: "asd",
        signi:"hola3"
      },
      {
        sigla: "asd",
        signi:"hola4"
      },
      {
        sigla: "asd",
        signi:"hola5"
      }
      ];

		DateResource.query({email:usr.email},function(data){
			 me.itemData=data;
       me.operacionesRes=me.operaciones(data);
       me.items=me.operacionesRes.resultItem;
       me.itemsOpera=me.operacionesRes.resultOpera;
			 me.itemSearch="";

			 me.navItems=Math.ceil(me.items.length/7);
			 me.navItems= new Array(me.navItems);
			 me.itemEdit=nuevo;
       me.itemResult=result;
		});	

		me.guardar=function(){
      me.stop();
                if(me.itemEdit.id_data==0)
                {
                  //nuevo
                  me.itemEdit.email=usr.email;
                  console.log("me.itemEdit ",me.itemEdit);
                    DateResource.save(me.itemEdit)
                      .$promise.then(function(user) {
                        me.itemEdit.id_data=user.resultId;
                        //actualizar arreglo que contiene los datos de la tabla
                        me.itemData.push(me.itemEdit);//contiene todo los datos extraidos
                        me.aux2=me.operaciones([me.itemEdit]);
                        me.aux1=me.aux2.resultItem;
                        if(me.items.length>0)
                        {
                         me.aux1[0].item=me.items[me.items.length-1].item +1;
                        }

                        me.items.push(me.aux1[0]);
                        me.itemEdit=nuevo;
                        me.itemsOpera.push(me.aux2.resultOpera[0]);
                        me.navItems=Math.ceil(me.items.length/7);
                        me.navItems= new Array(me.navItems); 
                        //fin actualizar
                      }); 

                }else{
                  //editar
                  
                    DateResource.update(me.itemEdit, function(data) {
                          console.log(data);
                     });

                    me.aux1=me.operaciones([me.itemEdit]);
                    me.aux1.resultItem[0].item=me.items[me.position].item;

                    me.itemData[me.position]=me.itemEdit;
                    me.itemsOpera[me.position]=me.aux1.resultOpera[0];
                    me.items[me.position]=me.aux1.resultItem[0];
                }

                //redirigimos al usuario
                // $state.go("home");
        };
    me.eliminar = function(){
      console.log(me.itemEdit.id_data);

     DateResource.remove({id:me.itemEdit.id_data})
      .$promise.then(function(user) {
        console.log("removeuser ",user);
        me.items.splice(me.position, 1);
        me.itemData.splice(me.position, 1);
        me.navItems=Math.ceil(me.items.length/7);
        me.navItems= new Array(me.navItems);
      }); 
    };

		//limite y inicio
    me.user = function(){
      me.view=!me.view;
    };
    me.start = function(){
      me.promise=$interval(function(){
          me.itemResult=me.operaciones([me.itemEdit]).resultOpera[0];
         },5000);
    }; 
    me.stop = function(){
      $interval.cancel(me.promise);
       $location.path('/bricksApp');
    };
		me.indexItems=function(idx){
      
			me.positionNav=idx;
			me.finLim=(idx+1)*7;			
			me.iniLim=me.finLim-7;
			me.prueba="hola";
		};
		me.indexItems(0);


		//pestaña y leyenda
	    me.navTab=function(m){
	      me.pest=m;
	    }	
		

		me.cambiar = function(m){
      console.log(m);
			me.position=m;
			me.items[m].state=!me.items[m].state;
			if(me.items[m].state==1)
			{
        me.itemEdit=me.itemData[m];
        me.itemResult=me.itemsOpera[m];
			}else{
        $interval.cancel(me.promise); 
        nuevo = {
          id_data:0,
          descripcion :"",
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
				 me.itemEdit=nuevo;
         me.itemResult=result;
         // if(!$("#filas div").hasClass('in')){
         //   $location.path('/bricksApp');
         // }
			}
			
		}
    me.cancelar=function(){
         $location.path('/bricksApp');
    }
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
	 me.operaciones = function(array){
			 var resultItem=[],
             resultOpera=[];
				for (var i = 0; i < array.length; i++) {

					var	soga1 = (10000/(( parseFloat(array[i].longitud)+parseFloat(array[i].espesor_horizontal))*(parseFloat(array[i].altura)+parseFloat(array[i].espesor_vertical) ))),
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
					switch(parseInt(array[i].mezcla))
						{
							case 1:
								aguacemento=0.29;
								break;
							case 2:
								aguacemento=0.43;
								break;
							case 3:
								aguacemento=0.57;
								break;
							case 4:
								aguacemento=0.72;
								break;
							case 5:
								aguacemento=0.8;
								break;
							case 6:
								aguacemento=1;
								break;
							case 7:
								aguacemento=1.14;
								break;
							case 8:
								aguacemento=1.29;
								break;
							default:
							    aguacemento=0.29;
							    break;
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
					item:i+1,
					descripcion:array[i].descripcion,
          email:array[i].email,
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
 
	}
}());