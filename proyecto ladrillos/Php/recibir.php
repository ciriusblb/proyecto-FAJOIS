<?php
//archivo php que realiza una consulta para obtener los datos guardados en la base de datos Mysql y lo enviamos en un arreglo
include_once 'conectar.php';
 $id_usuario= $_POST['id_usuario'];
 $recibirusuario=mysql_query("SELECT*FROM usuarios where correo='$id_usuario' ");
 $usuario=mysql_fetch_array($recibirusuario);
 $recibirdatos= mysql_query("SELECT*FROM datos where id_usuario='$id_usuario' ");
 $i=0;
 $array=array();
  while ($datos=mysql_fetch_array($recibirdatos) ) { 
  	$recibirsoga=mysql_query("SELECT*FROM soga where id_soga='$datos[0]' ");
	$recibircabeza=mysql_query("SELECT*FROM cabeza where id_cabeza='$datos[0]'");
	$recibircanto=mysql_query("SELECT*FROM  canto where id_canto='$datos[0]'");
  	$soga=mysql_fetch_array($recibirsoga);
  	$cabeza=mysql_fetch_array($recibircabeza);
  	$canto=mysql_fetch_array($recibircanto);
 	$array[]= array($datos[0],$datos[2],$datos[3],$datos[4],$datos[5],$datos[6],$datos[7],$datos[8],$datos[9],$datos[10],$datos[11],$datos[12],$datos[13],$datos[14],$datos[15],$datos[16],$soga[1],$soga[2],$soga[3],$soga[4],$cabeza[1],$cabeza[2],$cabeza[3],$cabeza[4],$canto[1],$canto[2],$canto[3],$canto[4]);
 	$i++;
 }
 $array[0][28]=$usuario[1];
 $array[0][29]=$usuario[2];
	echo '' . json_encode($array) . '';


 ?>	