var app = angular.module('bricksApp')
app.directive("playDisabled", function($compile){
    return function(scope, element, attrs){
        element.bind("click", function(){
            switch(attrs.name)
            {
                case 'btnGuardar':
                 $('.collapse').removeClass('in');
                 angular.element($('.rowsItem').removeAttr('disabled'));
                break;
                case 'btnNuevo':
                   angular.element($('.rowsItem').attr('disabled','disabled'));
                break;
                case 'btnEditar':
                   angular.element($('.rowsItem').attr('disabled','disabled'));
                break;
                case 'btnSelect':
                  console.log(attrs);
                  if (attrs.ngClass==false) {
                         angular.element($('.rowsItem').removeAttr('disabled'));
                    }else{
                        $('.collapse').removeClass('in');
                        angular.element($('.rowsItem').attr('disabled','disabled'));
                    }

                break;
                default:
                 angular.element($('.rowsItem').removeAttr('disabled'));
                 $('.collapse').removeClass('in');
                    console.log("vemos");
                break;
            }

            


        });
    };
});