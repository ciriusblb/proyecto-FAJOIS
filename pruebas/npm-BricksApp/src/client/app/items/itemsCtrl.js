(function(){
	"use strict";
	angular.module("bricksApp")
		.controller("ItemsCtrl", ItemsCtrl);
	function ItemsCtrl(){
		var me = this;
		
		me.items=[
			{
				item:1,
				descripcion:"Ladrillo de arcilla de 24 x 24 x 9",
				// datos:["Cantidad de ladrillos","Cemento","Arena","Agua"],
				// und:["Un23d","Bolsas","m3","m3"],
				cantidad:["10","20","30"],
				cemento:["40","50","60"],
				arena:["70","80","90"],
				agua:["100","110","120"],
				state:0
			},
			{
				item:2,
				descripcion:"Ladrillo de arcilla 24 x 12 x 10",
				// datos:["Cantidad de ladrillos","Cemento","Arena","Agua"],
				// Und:["Un2d","Bolsas","m3","m3"],
				cantidad:["100","20","30"],
				cemento:["40","55","60"],
				arena:["70","80","90"],
				agua:["100","116","120"],
				state:0	
			},
			{
				item:3,
				descripcion:"Ladrillo de arcilla 20 x 12 x 12",
				// datos:["Cantidad de ladrillos","Cemento","Arena","Agua"],
				// Und:["Und","Bolsas","m3","m3"],
				cantidad:["10","20","34"],
				cemento:["40","50","60"],
				arena:["37","80","90"],
				agua:["100","110","120"],
				state:0
			}
		];	
        
		me.cambiar = function(){
			alert("click");
			if(this.i.state==0){
				this.i.state=1;
			}else{
				this.i.state=0;
			}
		}
	}
}());