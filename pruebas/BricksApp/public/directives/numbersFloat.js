(function(){
    'use strict';
     angular.module('bricksApp')
      .directive('numbersFloat', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attr, ngModelCtrl) {
                    function fromUser(text) {
                        if (text) {
                            var transformedInput = text.replace(/[^0-9\.]/g, '');
                            var vemos=transformedInput.split('.');
                            if(text=="")
                            {
                                $('#'+attr.name).removeClass('has-success');
                            }
                            if(vemos.length>=2){
                                transformedInput= vemos[0].concat('.'+vemos[1].substring(0,2) );
                            }
                            if (transformedInput !== text) {
                                ngModelCtrl.$setViewValue(transformedInput);
                                ngModelCtrl.$render();
                            }else{
                                    if( parseFloat(text)>parseInt(attr.max)||parseFloat(text)<1){

                                        if (parseFloat(text)>parseInt(attr.max)) {
                                            console.log(attr.name);
                                          $('#'+attr.name).attr("data-content", "No mas de "+attr.max+" cm");
                                        }
                                        if (parseFloat(text)<1) {
                                          $('#'+attr.name).attr("data-content", "No menos de 0 cm");
                                        }
                                        $('#'+attr.name).popover("show");
                                        
                                        ngModelCtrl.$setValidity('error', false);
                                          
                                        $('#'+attr.name).addClass('has-error');
                                        $('#not-'+attr.name).html(" <span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span> ");
                                    }else{
                                        $('#'+attr.name).popover('destroy');
                                        ngModelCtrl.$setValidity('error', true);
                                        $('#'+attr.name).removeClass('has-error');
                                        $('#'+attr.name).addClass('has-success');
                                        $('#not-'+attr.name).html("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span> ");
                                    }
                            }
                            return transformedInput;
                        }else{
                            $('#'+attr.name).addClass('has-error');
                            $('#not-'+attr.name).html("");
                        }
                        return undefined;
                    }            
                    ngModelCtrl.$parsers.push(fromUser);
                }
            };
        });


}());