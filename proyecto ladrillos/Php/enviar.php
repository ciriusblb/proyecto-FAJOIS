<?php
//archivo php que recibe los datos obtenidos por javascript para guardarlos en la base de datos mediante una consulta

  include_once 'conectar.php';
  //convertimos los datos obtenidos en los tipos de datos que se especificaron en la base de datos
	$nombre= $_POST['nombre'];
	$id_usuario=$_POST['id_usuario'];
	$longitud= (float)$_POST['longitud'];
	$ancho= (float)$_POST['ancho'];
	$altura= (float)$_POST['altura'];
	$horizontal= (float)$_POST['horizontal'];
	$vertical= (float)$_POST['vertical'];
	$desperdicio= (float)$_POST['desperdicio'];
	$desperdicio2= (float)$_POST['desperdicio2'];
	$mezclaa= (int)$_POST['mezclaa'];
	$cementoo= (int)$_POST['cementoo'];
	$arenaa= (int)$_POST['arenaa'];
	$aguaa= (int)$_POST['aguaa'];
	$arenaa2= (int)$_POST['arenaa2'];
	$airee= (int)$_POST['airee'];
	$aguacemento= (float)$_POST['aguacemento'];
	
	$ladrillo_soga= (int)$_POST['ladrillo_soga'];
	$ladrillo_cabeza= (int)$_POST['ladrillo_cabeza'];
	$ladrillo_canto= (int)$_POST['ladrillo_canto'];

	$soga_cemento= (float)$_POST['soga_cemento'];
	$soga_arena= (float)$_POST['soga_arena'];
	$soga_agua= (float)$_POST['soga_agua'];


	$cabeza_cemento= (float)$_POST['cabeza_cemento'];
	$cabeza_arena= (float)$_POST['cabeza_arena'];
	$cabeza_agua= (float)$_POST['cabeza_agua'];

	$canto_cemento= (float)$_POST['canto_cemento'];
	$canto_arena= (float)$_POST['canto_arena'];
	$canto_agua= (float)$_POST['canto_agua'];

	//guardamos los datos mediante consultas
	$insertardatos=mysql_query("INSERT INTO datos(id_usuario,nombre_datos,longitud,ancho,altura,espesor_horizontal,espesor_vertical,desperdicio,v_desperdicio,mezcla,cemento,arena,agua,peso_arena,aire,agua_cemento) VALUES('$id_usuario','$nombre','$longitud','$ancho','$altura','$horizontal','$vertical','$desperdicio','$desperdicio2','$mezclaa','$cementoo','$arenaa','$aguaa','$arenaa2','$airee','$aguacemento')");

	$consultaid=mysql_query("SELECT id_nombre FROM datos");

	//obtenemos el id del ultimo valor ingresado para relacionar las tablas mediante el id
	while ($resultado=mysql_fetch_array($consultaid) ) {
		$id=$resultado[0];
	}
	
//insertamos los demas datos con el id ya obtenido
    $insertarsoga=mysql_query("INSERT INTO soga VALUES('$id','$ladrillo_soga','$soga_cemento','$soga_arena','$soga_agua')");

    $insertarcabeza=mysql_query("INSERT INTO cabeza VALUES('$id','$ladrillo_cabeza','$cabeza_cemento','$cabeza_arena','$cabeza_agua')");

    $insertarcanto=mysql_query("INSERT INTO canto VALUES('$id','$ladrillo_canto','$canto_cemento','$canto_arena','$canto_agua')");


?>