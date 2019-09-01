<?php
include_once 'conectar.php';
$nombre=$_POST['nombre'];
$apellido=$_POST['apellidos'];
$correo=$_POST['correo'];
$contrasena=md5($_POST['contrasena']);
$array=array();
$correcto="correcto";
$incorrecto="incorrecto";
$verificar=mysql_query("SELECT*FROM usuarios where correo='$correo' ");
if(mysql_num_rows($verificar)>0)
{
	$array[]=array($incorrecto);

}else{
	
		$array[]=array($correcto);
    $consulta=mysql_query("INSERT INTO usuarios(nombre,apellido,correo,contrasena) VALUES ('$nombre','$apellido','$correo','$contrasena')" );
}
echo '' . json_encode($array) . '';

?>