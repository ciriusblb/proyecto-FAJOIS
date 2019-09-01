<?php 

include_once 'conectar.php';
$usuario= $_POST['usuario'];
$contrasena= $_POST['contrasena'];
$contrasena=md5($contrasena);
$consulta=mysql_query("SELECT correo,contrasena FROM usuarios where correo='$usuario' ");
$fila=mysql_fetch_array($consulta);
$array=array();
$array[]=array($fila[0],$fila[1],$contrasena);
echo '' . json_encode($array) . '';


?>