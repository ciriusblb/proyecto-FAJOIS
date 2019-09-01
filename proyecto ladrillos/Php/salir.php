<?php
session_start();

//Eliminamos o destruimos la sessión registrada y redireccionamos al inicio de la pagina que es "login.php"
if(isset($_SESSION['usuario']))
{
session_destroy();
	header("location:../login.php");
}

?>