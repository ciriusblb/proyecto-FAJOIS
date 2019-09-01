
var data = {};

data.titulos = function() {
	let titulos = [];
	let limit = 50;
	titulos.push({
		nombre_titulo : 'GOBIERNO REGIONAL DE MADRE DE DIOS GOBIERNO REGIONAL DE MADRE DE DIOS GOBIERNO REGIONAL DE MADRE DE DIOS',
		orden_titulo: 0,
		visible_titulo: true
	});

	titulos.push({
		nombre_titulo : 'GERENCIA REGIONAL DE INFRAESTRUCTURA ',
		orden_titulo: 1,
		visible_titulo: true
	});

	titulos.push({
		nombre_titulo : 'SUBGERENCIA DE ESTUDIOS DE INFRAESTRUCTURA',
		orden_titulo: 2,
		visible_titulo: true
	});

	// ordenar 
	// 
	
	for (var i = 0; i < titulos.length; i++) {
		if (!titulos[i].visible_titulo) {
			titulos[i].nombre_titulo = '';
		}

		if (titulos[i].nombre_titulo.length > limit) {
			var t = titulos[i].nombre_titulo;
			t = t.substr(0,limit)+'...';
			titulos[i].nombre_titulo = t;
		}
	}

 // return ['GOBIERNO REGIONAL DE MADRE DE DIOS','GERENCIA REGIONAL DE INFRAESTRUCTURA','SUBGERENCIA DE ESTUDIOS DE INFRAESTRUCTURA'];
   return titulos;
};



module.exports = data;