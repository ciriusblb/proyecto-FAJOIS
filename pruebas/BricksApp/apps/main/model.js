'use strict';
var mysql = require('../../config/mysql');

var connection=mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'bricksapp',
   port: 3306
});



var dataModels ={};
dataModels.getDatas =function(email,callback){
    if(connection)
	{
		console.log(" emodelmail",email);
		var sql ='SELECT * FROM data WHERE email_data='+connection.escape(email)+' ';
		connection.query(sql, function(error, row) 
		{
			console.log(row);
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
			// connection.end();
		});
	}
};

dataModels.newData= function(userData,callback){
	if (connection) {
		console.log("userData ",userData);
		var sql = 'INSERT INTO data(email_data,descripcion,longitud,ancho,altura,espesor_horizontal,espesor_vertical,cantidad_desperdicio,mezcla_desperdicio,mezcla,densidad_cemento,densidad_arena,densidad_agua,peso_arena,aire) VALUES('+connection.escape(userData.email)+','+connection.escape(userData.descripcion)+','+connection.escape(userData.longitud)+
	   ','+connection.escape(userData.ancho)+','+connection.escape(userData.altura)+','+connection.escape(userData.espesor_horizontal)+
	   ','+connection.escape(userData.espesor_vertical)+','+connection.escape(userData.cantidad_desperdicio)+','+connection.escape(userData.mezcla_desperdicio)+
	   ','+connection.escape(userData.mezcla)+','+connection.escape(userData.densidad_cemento)+','+connection.escape(userData.densidad_arena)+
	   ','+connection.escape(userData.densidad_agua)+','+connection.escape(userData.peso_arena)+','+connection.escape(userData.aire)+' )';
	   connection.query(sql,function(error,row){
	   	if(error){
	   		throw error;
	   	}else{
	   		callback(null,{"resultId":row.insertId});
	   	}
	   	// connection.end();
	   });	
	}
}

dataModels.editData = function(userData,callback){
	if (connection) {
		console.log(userData);
		var sql = 'UPDATE data SET email_data='+connection.escape(userData.email_data)+',descripcion='+connection.escape(userData.descripcion)+',longitud='+connection.escape(userData.longitud)+
	   ',ancho='+connection.escape(userData.ancho)+',altura='+connection.escape(userData.altura)+',espesor_horizontal='+connection.escape(userData.espesor_horizontal)+
	   ',espesor_vertical='+connection.escape(userData.espesor_vertical)+',cantidad_desperdicio='+connection.escape(userData.cantidad_desperdicio)+',mezcla_desperdicio='+connection.escape(userData.mezcla_desperdicio)+
	   ',mezcla='+connection.escape(userData.mezcla)+',densidad_cemento='+connection.escape(userData.densidad_cemento)+',densidad_arena='+connection.escape(userData.densidad_arena)+
	   ',densidad_agua='+connection.escape(userData.densidad_agua)+',peso_arena='+connection.escape(userData.peso_arena)+',aire='+connection.escape(userData.aire)+' WHERE id_data='+connection.escape(userData.id_data)+' ';
	   connection.query(sql,function(error,row){
	   	if (error) {
	   		throw error;
	   	}else{
	   		callback(null,"Editado");
	   	}
	   	// connection.end();
	   });
	}
}

dataModels.removeData = function(id,callback){
	if (connection) {
		
		console.log("userdataas ,-------",id);
		var sql='DELETE FROM data where id_data='+connection.escape(id)+' ';
		connection.query(sql,function(error,row){
			if (error) {
				throw error;
			}else{
				callback(null,"Eliminado");
			}
		});
		// connection.end();
	}
}
module.exports =dataModels;