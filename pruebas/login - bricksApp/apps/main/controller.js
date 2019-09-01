'use strict';
var express=require('express'),	
	router = express.Router(),
	    getDatas = require('./model').getDatas,
    newData = require('./model').newData,
    editData = require('./model').editData,
    removeData = require('./model').removeData;
      // isLoggedIn = require('../user/middlewares').isLoggedIn;



router.route('/bricksApp/')
   .get(function(req,res){
    var email=req.query.email;
       getDatas(email,function(error,data){
           res.send(data);
        });

   });



router.route('/remove/')
   .delete(function(req,res){
      removeData(req.query.id,function(error,data){
           res.send(data);
        });
   });

router.route('/new/')
  .post(function(req,res){
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
   
	module.exports=router;