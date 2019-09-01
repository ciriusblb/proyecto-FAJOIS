'use strict';
var router_user=require('../apps/user/controller');
var router_main=require('../apps/main/controller');
var routers=function(server){
	server.use('/',router_user);
	server.use('/',router_main);
};
module.exports=routers;