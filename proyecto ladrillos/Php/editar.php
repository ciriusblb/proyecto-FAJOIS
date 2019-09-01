<?php
    include_once 'conectar.php';
    $number=(int)$_POST['number'];
    /*$editar=("SELECT * FROM datos WHERE id_nombre='$id_nombre'");*/
	$nombre= $_POST['nombre'];
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

 $editardatos= mysql_query("UPDATE datos SET nombre_datos='$nombre',longitud='$longitud',ancho='$ancho',altura='$altura',espesor_horizontal='$horizontal',espesor_vertical='$vertical',desperdicio='$desperdicio',v_desperdicio='$desperdicio2',mezcla='$mezclaa',cemento='$cementoo',arena='$arenaa',agua='$aguaa',peso_arena='$arenaa2',aire='$airee',agua_cemento='$aguacemento' WHERE id_nombre='$number'");

 $editarsoga=mysql_query("UPDATE soga SET soga_ladrillos='$ladrillo_soga',soga_cemento='$soga_cemento',soga_arena='$soga_arena',soga_agua='$soga_agua' WHERE id_soga='$number' ");

 $editarcabeza=mysql_query("UPDATE cabeza SET cabeza_ladrillos='$ladrillo_cabeza',cabeza_cemento='$cabeza_cemento',cabeza_arena='$cabeza_arena',cabeza_agua='$cabeza_agua' WHERE id_cabeza='$number' ");

 $editarcanto=mysql_query("UPDATE canto SET canto_ladrillos='$ladrillo_canto',canto_cemento='$canto_cemento',canto_arena='$canto_arena',canto_agua='$canto_agua' WHERE id_canto='$number' ");




 ?>