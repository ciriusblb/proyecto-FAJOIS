<?php  
session_start();
 //Llamamos a Nuestra Conexión de nuestra base de datos
 include_once 'conectar.php'; 

 //Iniciamos una Sesssion en nuestra Página

 //Tomamos los valores de los input con el método POST
      $user= $_POST['usuario'];
      echo $user;
//Realizamos una consulta para verificar que exista sus datos en nuestra base de Datos
      $consulta=mysql_query("SELECT correo FROM usuarios where correo='$user'  "); 
//Tomamos los resultados de la consulta en forma de un array
      $fila=mysql_fetch_array($consulta);
	  $_SESSION["usuario"]= $fila[0];
	  header("location:../maqueta.php");                

?>