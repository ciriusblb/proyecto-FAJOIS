'use strict';
var mysql = require('../../config/mysql');
var bcrypt = require('bcrypt-nodejs');

var connection=mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'bricksapp',
   port: 3306
});

var dataModels ={};

dataModels.sesionUsuario =function(userData,callback){
    if(connection)
	{	
		var sql ='SELECT * FROM users WHERE email='+connection.escape(userData.email)+'';
		connection.query(sql, function(error, row) 
		{
			if(error)
			{
				throw error;
			}
			else
			{	
				if(row[0]){
					bcrypt.compare(userData.password, row[0].password, function(err, res) {
						if(res) callback(null,row[0]);
						else callback(null,undefined);
					});
				}else callback(null,undefined);
			}
		});
	}
};

dataModels.getEmail =function(emailUser,callback){
    if(connection)
	{	
		var sql = 'SELECT email from users where email='+connection.escape(emailUser)+'';
		connection.query(sql, function(error, row) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row[0]);
			}
		});
	}
};
dataModels.insertUsuario =function(userData,callback){
    if(connection)
	{	
		var salt = bcrypt.genSaltSync(10);
		var passwordToSave = bcrypt.hashSync(userData.password, salt);
		var sql = 'INSERT INTO users(names, last_names, email, password) VALUES('+connection.escape(userData.names)+','+connection.escape(userData.last_name)+
	    ','+connection.escape(userData.email)+','+connection.escape(passwordToSave)+')';
		connection.query(sql, function(error, row) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, "registrado");
			}
		});
	}
};
module.exports =dataModels;