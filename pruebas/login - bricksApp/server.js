'use strict';

var express=require('express'),	
	server = express(),
	swig = require('swig'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	port=process.env.PORT || 8000;
   


	server.use(bodyParser.urlencoded({extended:false}));
		server.use(bodyParser.json());
	server.use(cookieParser());
	


	
	server.engine('html',swig.renderFile);
	server.set('view engine', 'html');
	server.set('views', __dirname + '/public/views');
	swig.setDefaults({cache: false});
	
	server.use(express.static(__dirname + '/public'));

	server.listen(port, function(){
		console.log("servidor escuchando al puerto "+ port);
	});

	require('./routers')(server);
