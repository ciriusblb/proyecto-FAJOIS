function verificar(){

	var alertas = $('.alerta');
	alertas.removeClass('abrir');

	if (longitud>100||longitud<1) {
		alertas.removeClass('abrir');     
        alertas.eq(0).addClass('abrir');
	}		
	if (ancho>100||ancho<1) {
		alertas.removeClass('abrir');   
        alertas.eq(1).addClass('abrir');
			}
	if (altura>100||altura<1) {
		alertas.removeClass('abrir');
        alertas.eq(2).addClass('abrir');
			}
	if(horizontal>5||horizontal<1)
		{
			alertas.removeClass('abrir');
			alertas.eq(3).addClass('abrir');
		}
		if(vertical>5||vertical<1)
		{
			alertas.removeClass('abrir');            
			alertas.eq(4).addClass('abrir');   
		}
		if(desperdicio>15||desperdicio<1)
		{
			alertas.removeClass('abrir');
			alertas.eq(5).addClass('abrir');
		}
		if(desperdicio2>25||desperdicio2<1)
		{
			alertas.removeClass('abrir');
			alertas.eq(6).addClass('abrir');
		}		
		if(mezclaa>8||mezclaa<1)
		{
			alertas.removeClass('abrir');
			alertas.eq(7).addClass('abrir');
		}
		if(cementoo<2500 || cementoo>4000)
		{
			alertas.removeClass('abrir');
			alertas.eq(8).addClass('abrir');
		}
		if(arenaa<1500 || arenaa>3500)
		{
			alertas.removeClass('abrir');
			alertas.eq(9).addClass('abrir');
		}
		if(aguaa<900 || aguaa>1200)
		{
			alertas.removeClass('abrir');
			alertas.eq(10).addClass('abrir');
		}
		if(arenaa2<1000 || arenaa2>2000)
		{
			alertas.removeClass('abrir');
			alertas.eq(11).addClass('abrir');
		}
		if(airee>10)
		{
			alertas.removeClass('abrir');
			alertas.eq(12).addClass('abrir');
		}

		switch(parseInt(document.getElementById("mezclaa").value))
			{
				case 1:
					document.getElementById("aguacemento").value=0.29;
					break;
				case 2:
					document.getElementById("aguacemento").value=0.43;
					break;
				case 3:
					document.getElementById("aguacemento").value=0.57;
					break;
				case 4:
					document.getElementById("aguacemento").value=0.72;
					break;
				case 5:
					document.getElementById("aguacemento").value=0.8;
					break;
				case 6:
					document.getElementById("aguacemento").value=1;
					break;
				case 7:
					document.getElementById("aguacemento").value=1.14;
					break;
				case 8:
					document.getElementById("aguacemento").value=1.29;
					break;
				default:
				    document.getElementById("aguacemento").value="";
				    break;
			}   

}