(function(){

    decimal= function(num){
      for(var i=0; i<6; i++){
          if(num>0){
              document.getElementById("longitud").value=num.toFixed(2);
          }
      }
  }
    
}());