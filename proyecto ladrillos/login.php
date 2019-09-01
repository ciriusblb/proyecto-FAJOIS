<?php
session_start();

//Comprobamos si ya existe una Session Realizada para redireccionarlo al contenido
if(isset($_SESSION['usuario']))
{
  header("location:maqueta.php");
}
?>

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
        <title>LogeoLadrillos</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">
        <link rel="stylesheet" href="CSS/login.css">
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body > 
    <header class="cabeza">
       <form  method="POST"  name="fvalida" action="Php/validar.php" onsubmit="return iniciar()">
          <h1>Ladrillo en Muros</h1>
          <div>
          <span  class="bub5"></span>
           <input type="text" placeholder="&#128273; Correo electrónico" name="usuario" id="usuario" onkeypress="borrar()">
           <span class="bub6"></span>
           <input type="password" placeholder="&#128273; Contraseña" name="clave" id="clave"  onkeypress="borrar()" autocomplete="off">
           <input type="submit" id="btningresar" name="btnsesion"  value=" Ingresar "  >
           <label id="abrirregistro"> Registrar Cuenta</label>
           </div>
       </form>
    </header>
    <main class="cuerpo">
<section id="seccion1" class="desplegar1">

            <h2>¿Cuántos ladrillos entran en un metro cuadrado de muro?</h2>
            <p>Nuestra respuesta será  tenemos que conocer las dimensiones de los ladrillos a apilar, la forma como se van a apilar (de cabeza o de soga), y el ancho de la junta del mortero.</p>
            <p>Con estos datos podemos usar esta fórmula.</p>
            <h3>Ejemplo:</h3>
            <p>para nuestro ladrillo King Kong de medidas (24cm*14cm*9cm) que los apilaremos de cabeza, con un espesor de junta de mortero de 1.5 cm ¿Cuántos ladrillos entran en un metro cuadrado de muro?</p> 
            <h3>Usando la formula</h3>
            <div><img src="Imagenes/formula0.jpg"></div>
            <p>Numero de ladrillos = 1/((0.24+0.015)*(0.09+0.015))=37.35 unidades Unid/m2.</p>
            <p>El número de ladrillos King kong apilados de cabeza con una junta de 1.5 cm  en un metros cuadrado de muro es 38 ladrillos.</p>
            <p>Ahora podremos responder la pregunta del número de ladrillos (de cualquier tipo y con cualquier espesor de junta) apilados en un muro. Tema muy usado en las obras de construcción y como no  en nuestros metrados de obra y presupuestos.</p>
        </section>
        <section id="seccion2"  class="desplegar2" onsubmit="return registrar();">
            <form  method="POST" name="fvalida2" action="" class="form-registro" name="registrar" >
            <div class="bub1">¿Cuál es tu Nombre ?</div>
            <div class="bub2">¿Cuál estu Apellido?</div>
            <div class="bub3"></div>
            <div class="bub4">Escriba una contraseña que sea mayor o igual a seis digitos</div>
                <h2 class="form-titulo">Registrar una cuenta</h2>
                <div class="contenedor-input">
                    <input class="input-100" type="text" id="nombre" name="nombre" onkeypress="borrar()" autocomplete="off" >
                     <label class="label-100">Nombre</label>

                    <input class="input-100" autocomplete="off" type="text" id="apellidos" onkeypress="borrar()" name="apellidos" >
                     <label class="label-100">Apellidos</label>

                    <input class="input-100" autocomplete="off" type="text"  id="correo" onkeypress="borrar()" name="correo" >
                     <label class="label-100">Correo</label>

                    <input class="input-100" onkeypress="borrar()" autocomplete="off"  type="password" id="clave2" name="clave" >
                     <label class="label-100">Contraseña</label>
                    <input type="submit"  value="Registrar" id="btnregistrar" class="btn-enviar">
        </div>
            </form>
        </section>
    </main> 
    <script src="JS/login.js"></script>
</body>
</html>