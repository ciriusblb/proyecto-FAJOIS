<?php
    include_once 'conectar.php';
    $number=(int)$_POST['number'];
    /*$editar=("SELECT * FROM datos WHERE id_nombre='$id_nombre'");*/

 $eliminardatos= mysql_query("DELETE FROM datos WHERE id_nombre='$number'");
  $eliminarsoga= mysql_query("DELETE FROM soga WHERE id_soga='$number'");
  $eliminarcabeza= mysql_query("DELETE FROM cabeza WHERE id_cabeza='$number'");
  $eliminarcanto= mysql_query("DELETE FROM canto WHERE id_canto='$number'");

 ?>