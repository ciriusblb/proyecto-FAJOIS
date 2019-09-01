angular.module("bricksApp")
.directive('passValidate', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(password) {
                if (password) {
                    if ( password.length < 8 ) {
                        $('#length').removeClass('valid glyphicon-ok').addClass('invalid glyphicon-remove');
                    } else {
                        $('#length').removeClass('invalid glyphicon-remove').addClass('valid glyphicon-ok');
                    }
                    
                    //validate letter
                    if ( password.match(/[A-z]/) ) {
                        $('#letter').removeClass('invalid glyphicon-remove').addClass('valid glyphicon-ok');
                    } else {
                        $('#letter').removeClass('valid glyphicon-ok').addClass('invalid glyphicon-remove');
                    }

                    //validate capital letter
                    if ( password.match(/[A-Z]/) ) {
                        $('#capital').removeClass('invalid glyphicon-remove').addClass('valid glyphicon-ok');
                    } else {
                        $('#capital').removeClass('valid glyphicon-ok').addClass('invalid glyphicon-remove');
                    }

                    //validate number
                    if ( password.match(/\d/) ) {
                        $('#number').removeClass('invalid glyphicon-remove').addClass('valid glyphicon-ok');
                    } else {
                        $('#number').removeClass('valid glyphicon-ok').addClass('invalid glyphicon-remove');
                    }
                    
                    //validate space
                    if ( password.match(/[^a-zA-Z0-9\-\/]/) ) {
                        $('#space').removeClass('invalid glyphicon-remove').addClass('valid glyphicon-ok');
                    } else {
                        $('#space').removeClass('valid glyphicon-ok').addClass('invalid glyphicon-remove');
                    }
                     if($("#pswd_info .invalid").length>0){
                        $("#pswd_info").addClass('show');
                     }
                    if($("#pswd_info .invalid").length==0){
                        $("#pswd_info").removeClass('show');
                     }

                }else{
                    $("#pswd_info").removeClass('show');
                    $("#pswd_info ul li").removeClass('valid glyphicon-ok').addClass('invalid glyphicon-remove');
                }
                return password;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

// ng-keyup="vm.alert(vm.registro.password)"