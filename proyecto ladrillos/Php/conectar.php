<?php
//Realizamos la conexión a Nuestra Base de Datos "proyecto_ladrillos" para poder realizar nuestras consultas
$conexion = mysql_connect('localhost','root','') or die("No se pudo conectar a la base de datos");
mysql_select_db('proyecto_ladrillos',$conexion);
?>