'use strict';
var express=require('express'),	
  	router = express.Router(),
    sesionUsuario = require('./model').sesionUsuario,
    getEmail = require('./model').getEmail,
    insertUsuario = require('./model').insertUsuario,
    sendEmail = require('./emailCtrl');


  router.route('/sesion/')
    .get(function(req,res){
      var user=req.query;
      sesionUsuario(user,function(error,data){
        res.send(data);
      });
    })

  router.route('/registro/')
    .post(function(req,res){
      insertUsuario(req.body,function(error,data){
        res.send(data);
      });
    });

  router.route('/email/')
    .get(function(req,res){
      getEmail(req.query.email,function(error,data){
        res.json(data);
      });
    });

  router.route('/sendEmail/')
    .get(function(req,res){
      sendEmail(req.query.email,function(error,data){
        res.json(data);
      });
    })

	module.exports=router;
