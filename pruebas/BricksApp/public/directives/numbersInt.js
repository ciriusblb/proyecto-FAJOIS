(function(){
    'use strict';
    angular.module('bricksApp')
      .directive('numbersInt', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attr, ngModelCtrl) {
                    function fromUser(text) {
                        if (text) {
                            var transformedInput = text.replace(/[^0-9]/g, '');
                            if (transformedInput !== text) {
                                ngModelCtrl.$setViewValue(transformedInput);
                                ngModelCtrl.$render();
                            }else{
                                if(parseInt(text)<parseInt(attr.min)|| parseInt(text)>parseInt(attr.max)  ){

                                    if (parseFloat(text)>parseInt(attr.max)) {
                                        $('#'+attr.name).attr("data-content", "No mas de "+attr.max+" cm");
                                    }   
                                    if (parseFloat(text)<parseInt(attr.min)) {
                                        $('#'+attr.name).attr("data-content", "No menos de "+attr.min+" cm");
                                    }
                                    $('#'+attr.name).popover("show");

                                  ngModelCtrl.$setValidity('error', false);
                                  $('#'+attr.name).removeClass('has-success');
                                  $('#'+attr.name).addClass('has-error');
                                  $('#not-'+attr.name).html("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span> ");
                                }else{
                                    ngModelCtrl.$setValidity('error', true);
                                    $('#'+attr.name).popover('destroy');
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