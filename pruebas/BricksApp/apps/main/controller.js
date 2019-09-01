'use strict';
var express=require('express'),	
	  router = express.Router(),
	  getDatas = require('./model').getDatas,
    newData = require('./model').newData,
    editData = require('./model').editData,
    removeData = require('./model').removeData,
    createReporte = require('../reporte/index').createReporte;



  router.route('/bricksApp/')
    .get(function(req,res){
      var email=req.query.email;
      console.log("emailemailemail ",email);
      getDatas(email,function(error,data){
        res.send(data);
      });
    });

  router.route('/remove/')
    .delete(function(req,res){
    var userData = req.query[0];
      removeData(userData,function(error,data){
        res.json(data);
      });
    });

  router.route('/new/')
    .post(function(req,res){
      console.log(req.body);
      newData(req.body,function(error,data){
        res.send(data);
      });
    });

  router.route('/edit/')
    .put(function(req,res){
      editData(req.body,function(error,data){
        res.send(data);
      });
    });

 router.route('/reporte/')
    .post(function (req, res) {
        createReporte(req.body, function(binary) {
          console.log(binary);
          // res.attachment('report.xlsx');
          // res.send(binary);  
          res.setHeader('Content-Type','application/vnd.openxmlformates');
          // res.setHeader("Content-Disposition","attachment;filename="+"todo.xlsx");

          res.attachment('reporte.xlsx');
          res.send(binary.toString('base64'));

          }, function(error) {
            res.end('ERROR:' + error);
        });

      });
    
	module.exports=router;