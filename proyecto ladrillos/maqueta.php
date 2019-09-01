<?php
session_start();
if(isset($_SESSION['usuario']))
{
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta  http-equiv="Content-Type" content="text/html:charset=utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">
	<link rel="stylesheet"  href="CSS/estilos.css">
	<link rel="stylesheet" href="CSS/fontello.css">
	<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <link rel="stylesheet"  href="CSS/exportar.css">
    <link rel="stylesheet" href="CSS/loader.css">
  <script src="JS/jspdf.min.js"></script>
  
</head> 
<body class="contenido" onkeyup="saltar(event,'cantidad')" onload="mostarlista()" id="todo">
<header class="contenedor">
    <section class="titulo" >
      <img class="logo"  src="Imagenes/logo.png">
	    <h1 class="ladrillo">Ladrillo en muros</h1>
    </section>
<a class="cerrar"   href="Php/salir.php">CERRAR SESIÓN</a>
      <div class="usuario" >
      <label class="icon-user"></label> 
        <label id="usuario"></label>
       <label id="apellido"></label>
      </div> 
</header>
<section class="todo">
<section class="seccion">
      <div class="buscador">
        <input class="icon-search" type="text" id="busqueda" placeholder="&#128269; Buscar..." maxlength="50" autocomplete="off" onKeyUp="doSearch()">
      </div>
      <div id="resultadoBusqueda">
        <div class="subseccion">
		      <div class="muestra1">
      				<div class="contenido1"><label class="nav1">Item</label></div>
      				<div class="contenido4"><label class="nav1">Descripción</label></div>
              <div class="contenido1"><label class="nav1">Und</label></div>
		     </div>
    		  <div class="muestra2">
                   <div class="submuestra1">
                       <div class="contenido2"><label class="nav2">Posición</label></div>
                   </div>
                    <div class="submuestra2">
                        <div class=""><label class="nav2">Soga</label></div>
                        <div class="contenido3"><label class="nav2">Cabeza</label></div>
                        <div class=""><label class="nav2">Canto</label></div>
                   </div>       
		     </div>
	     </div>
      <div class="tareas">

              <div class="wrap">
                 <table class="lista" id="lista">
                 <div id="preload" class="preload">
                    <div class="loader-frame">
                        <div class="loader1" id="loader1"></div>
                        <div class="loader2" id="loader2"></div>
                    </div>
                </div>
                 <div id="content" class="content">No Hay Registros Guardados</div>
                 </table>
              </div>  
    </div>
         </div> 
         <div class="leyendas">   
    <div class="leyenda activar-l">
       <div class="formula1">
           <h3>Formula:</h3>
           <img src="Imagenes/Captura.PNG" alt="">
       </div>
       <div class="datos1">
           <pre>
    C    =  Cantidad de ladrillos por m2
    L    =  Longitud de ladrillos (m)
    Jh   =  Espesor de la junta horizontal (m)
    H    =  Altura de ladrillo (m)
    JV   =  Espesor de la junta vertical (m) 
           </pre>
       </div>
    </div>  

    <div class="leyenda">
       <div class="formula1">
           <h3>Formula:</h3>
           <img src="Imagenes/Captura5.PNG" alt="">
       </div>
       <div class="datos1">
           <pre>
    VM	=	Volumen de mezcla (m3/m2) en muro		
    Vm	=	Volumen del muro (m2)		
    n	=	Número de ladrillos por m2		
    L	=	Volumen de un ladrillo (m3)		
 
           </pre>
       </div>
    </div>
    </div>  
    </section>

<section class="menu">
       <div class="botones1">
      <button class="color icon-doc-new" id="btnnuevo" >  </button>

      <button  class="color icon-pencil" id="btneditar" ></button>

      <button  class="color icon-trash-empty" id="btneliminar">  </button>
    <button  class="color icon-file-pdf" id="btn_reporte" ></button>
   </div>
	 <div class="navegar">
	    <li><button class="cabecera activar-c">Cantidad</button></li>
	 	<li><button class="cabecera" id="c_mezcla">Mezcla</button></li>
	 </div>
<div class="pestanasc">

     <div class="cantidad activar-p" id="cantidad" >

        <label style="margin-left: 32px;" >Nombre :</label>
        <input style=" width: 56%; background: #fff; margin-left: 0px;" type="search" name="nombre" id="nombre" minlength="8" maxlength="50" autocomplete="off"  onkeyup="saltar(event,'longitud')">
        <input type="number" id="limite">
       <div class="cant1">
        <ul>
          <li>L &nbsp;: Longitud del Ladrillo</li>
          <li>A : Ancho del Ladrillo</li>
          <li>H : Altura del Ladrillo</li>
          <li>Jh: Espesor de la junta Horizontal</li> 
          <li>Jv: Espesor de la junta Vertical</li>
          <li>Porcentaje de Desperdicio</li>            
      </ul>
       </div>
       <div class="cant2">
          <ul>
          <li><input type="text"  name="longitud" id="longitud" onkeyup="verificarinput(this);" onkeydown="saltar(event,'ancho')" autocomplete="off"> cm<div class="alerta" id="alerta">No mas de 100cm</div></li>
          <li><input type="text"  name="ancho" id="ancho" onkeyup="verificarinput(this);" onkeydown="saltar(event,'altura')"> cm<div class="alerta" id="alerta">No mas de 100cm</div></li>
          <li><input type="text"  name="altura" id="altura" onkeyup="verificarinput(this);" onkeydown="saltar(event,'horizontal')"> cm<div class="alerta">No mas de 100cm</div></li>  
          <li><input type="text"  name="horizontal" id="horizontal" onkeyup="verificarinput(this);" onkeydown="saltar(event,'vertical')"> cm<div class="alerta">No mas de 5cm<div ></li>
          <li><input type="text"  name="vertical" id="vertical" onkeyup="verificarinput(this);" onkeydown="saltar(event,'desperdicio')"> cm<div class="alerta"><div >No mas de 5cm</li>
          <li><input type="text"  name="desperdicio" id="desperdicio" onkeyup="verificarinput(this);" onkeydown="saltar(event,'mezcla')"> %<div class="alerta">No mas del 15%<div ></li>
          </ul>     
       </div>
      <div class="cant30"><p>Sin desperdicio + %desperdicio</p></div>
        <div class="cant3">
         <ul>
            <li>Soga</li>
            <li>Cabeza</li>
            <li>Canto</li> 
        </ul>
        <ul>
          <li>= largo por alto</li>
          <li>= ancho por alto</li>
          <li>= largo por ancho</li>
        </ul>
         <ul>
           <li>= <input type="tetx" class="vacio" id="valor-soga1" disabled> Und</li>
           <li>= <input type="text" class="vacio" id="valor-cabeza1" disabled> Und</li>
           <li>= <input type="text" class="vacio"  id="valor-canto1" disabled> Und</li>
         </ul>
         <ul>
            <li><input type="text" class="vacio" id="valor-soga2" name="ladrillo_soga" disabled > Und</li>
            <li><input type="text" class="vacio" name="ladrillo_cabeza" id="valor-cabeza2" disabled> Und</li>
            <li><input type="text" class="vacio"  id="valor-canto2" name="ladrillo_canto" disabled> Und</li>
         </ul>    
      </div>
    </div>
      <div class="mezcla" id="mezcla">
       <br>
       <div class="mezcla1" >
       <ul>
         <li>Volúmen de la Mezcla en m3 por m2 del muro</li>
         <li>% de desperdición</li>
         <li><input type="text" class="resalte" name="desperdicio2" id="desperdicio2" onkeyup="verificarinput(this);" onkeydown="saltar(event,'mezclaa')"> %<div class="alerta">% de desperdición, no mas del 25%</div></li>
       </ul>          
       <pre>                          Sin desperdicio + % desperdicio</pre>
       </div> 
       <div class="mezcla2">
          <ul>
            <li>Soga</li>
            <li>Cabeza</li>
            <li>Canto </li>
          </ul>
          <ul>
            <li>=</li>
            <li>=</li>
            <li>=</li>
          </ul>
          <ul>
            <li><input type="text" class="vacio" name="m-soga1" id="m-soga1" disabled></li>
            <li><input type="text" class="vacio" name="m-cabeza1" id="m-cabeza1" disabled></li>
            <li><input type="text" class="vacio" name="m-canto1" id="m-canto1" disabled></li>
          </ul>
          <ul>
            <li><input type="text" class="vacio" value="m-soga2" id="m-soga2" disabled> m3/m2</li>
            <li><input type="text" class="vacio" value="m-cabeza2" id="m-cabeza2" disabled> m3/m2</li>
            <li><input type="text" class="vacio" value="m-canto2" id="m-canto2" disabled> m3/m2</li>
          </ul>
       </div>
       <div class="mezcla3">
         <label> Nota : </label><br>
          <p>Para la determinación de volumen de mezcla por m3 en el componente "n"=Número de ladrillos por m2, se utilizo la cantidad de ladrillos sin desperdicio.</p>
          <table class="tabla2">
            <tr>
              <td><pre>Cemento - Arena - Agua (m2 de muro)</pre></td>
            </tr>
            <tr>
              <td><pre>Mezcla </pre></td>
              <td></td>
              <td><pre>1:<input type="text" class="resalte" id="mezclaa" name="mezclaa" onkeyup="verificarinput(this);" onkeydown="saltar(event,'cementoo')"></pre><div class="alerta">No mas de 8<div ></td>
            </tr>
            <tr>
              <td><pre>Densidad - Peso unitario </pre></td>
            </tr>
            <tr>
              <td></td>
              <td>Cemento</td>
              <td><pre>   <input type="text" class="resalte" name="cementoo"  id="cementoo" onkeyup="verificarinput(this);" onkeydown="saltar(event,'arenaa')"> Kg/m3</pre><div class="alerta">Entre 2500 y 4000kg/m3<div ></td>
            </tr>
             <tr>
              <td></td>
              <td>Arena</td>
              <td><pre>   <input type="text" class="resalte" name="arenaa"  id="arenaa" onkeyup="verificarinput(this);" onkeydown="saltar(event,'aguaa')"> Kg/m3</pre><div class="alerta">Entre 1500 y 3500kg/m3<div ></td>
            </tr>
             <tr>
              <td></td>
              <td>Agua</td>
              <td><pre>   <input type="text" class="resalte" name="aguaa"  id="aguaa" onkeyup="verificarinput(this);" onkeydown="saltar(event,'arenaa2')"> Kg/m3</pre><div class="alerta">Entre 900 y 1200kg/m3<div ></td>
            </tr>
            <tr>
              <td><pre>Peso especifico</pre></td>
            </tr>
            <tr>
              <td></td>
              <td>Arena</td>
              <td><pre>   <input type="text" class="resalte" name="arenaa2" id="arenaa2" onkeyup="verificarinput(this);" onkeydown="saltar(event,'airee')"> Kg/m3</pre><div class="alerta">Entre 1000 y 2000kg/m3<div ></td>
            </tr> 
            <tr>
              <td><pre>% de aire incorporado</pre></td>
              <td></td>
              <td><pre>   <input type="text" class="resalte" name="airee" id="airee" onkeyup="verificarinput(this);" onkeydown="saltar(event,'aguacemento')"> %</pre><div class="alerta">Entre 1 a 10%<div ></td>
            </tr>
            <tr>
              <td><pre>Relación de Agua/Cemento</pre></td>
              <td></td>
              <td><pre>   <input type="text" name="aguacemento" id="aguacemento" disabled></pre></td>
              
            </tr>           
          </table>
          <pre>      Análisis</pre>
          <table class="tabla3" >
            <tr>
              <td>Cemento</td><td><pre>   1       p3         =</pre></td><td><input  type="text" class="vacio2" name="resultcemento"  id="resultcemento" disabled> kg</td>
            </tr>
            <tr>
              <td>Arena</td><td><pre>   1       p3         =</pre></td><td><input  type="text" class="vacio2" name="resultarena"  id="resultarena" disabled> kg</td>
            </tr>
            <tr><td></td><td></td><td><input type="text" class="vacio2" name="sumaredondeo" id="sumaredondeo" disabled> kg</td></tr>
          </table>
          <div class="rendimientos">
          <div class="rendimiento1">
          <li>Cemento</li>
          <li>Arena</li>
          <li>Agua</li><br>
          <li>Aire Incorporado 1%</li>
          <li>Total</li>
          </div>
          <div class="rendimiento2">
            <li><input type="text" class="vacio" name="rendcemento1" id="rendcemento1" disabled>kg/ <input type="text" class="vacio" name="rendcemento2" id="rendcemento2" disabled>kg/m3 </li>
            <li><input type="text" class="vacio" name="rendarena1"  id="rendarena1" disabled>kg/ <input type="text" name="rendarena2" class="vacio"  id="rendarena2" disabled>kg/m3 </li>
            <li>(<input type="text" class="vacio" name="rendagua1" id="rendagua1" disabled>kg x<input type="text" class="vacio" name="rendagua2"  id="rendagua2" disabled>)/<input type="text" class="vacio" name="rendagua3" id="rendagua3" disabled>Kg/m3 </li>
          </div>
          <div class="rendimiento3">
          <li><input type="text" class="vacio2" name="resulrendcemento12"  id="resulrendcemento12" disabled> m3</li>
          <li><input type="text" class="vacio2" name="resulrendarena12"  id="resulrendarena12" disabled> m3</li>
          <li><input type="text" class="vacio2" name="resulrendagua12"  id="resulrendagua12" disabled> m3</li>
          <li><input type="text" class="vacio2" name="sumaresul12"  id="sumaresul12" disabled></li>
          <li><input type="text" class="vacio2" name="aireresult12"  id="aireresult12" disabled></li>
          <li><input type="text" class="vacio2" name="totalresult12"  id="totalresult12" disabled></li>
          </div>
          </div>
          <table class="resultados" >
            <tr class="r1" >
              <td>Ladrillo</td>
              <td >Cemento Bolsas</td>
              <td>Arena <br>m3</td>
              <td>Agua  <br>m3</td>
            </tr>
            <tr >
              <td>Soga</td>
              <td><input type="text" class="vacio" name="resultadosoga1"  id="resultadosoga1" name="soga_cemento" disabled></td>
              <td><input type="text" class="vacio" name="resultadosoga2"  id="resultadosoga2" disabled></td>
              <td><input type="text" class="vacio" name="resultadosoga3"  id="resultadosoga3" disabled></td>
            </tr>
            <tr class="r2"> 
              <td>Cabeza</td>
              <td><input type="text" class="vacio" name="resultadocabeza1"  id="resultadocabeza1" disabled></td>
              <td><input type="text" class="vacio" name="resultadocabeza2"  id="resultadocabeza2" disabled></td>
              <td><input type="text" class="vacio" name="resultadocabeza3" id="resultadocabeza3" disabled></td>
            </tr>
            <tr>
              <td>Canto</td>
              <td><input type="text" class="vacio" name="resultadocanto1"  id="resultadocanto1" disabled></td>
              <td><input type="text" class="vacio" name="resultadocanto2"  id="resultadocanto2" disabled></td>
              <td><input type="text" class="vacio" name="resultadocanto3"  id="resultadocanto3" disabled></td>
            </tr>
          </table>
        </div>
        </div> 
   </div>

	  <div class="botones2">
	  	<button type="button"  id="btn-agregar" >Guardar</button>	
	    <button type="button" id="btn-cancelar">Cancelar</button>
	  </div>	  	  
 </section>
</section>
 <aside class="aside">
        <!--<input type="checkbox" id="cerrar">
    <label for="cerrar" id="btn_cerrar">X</label>-->
    <div class="imagen">
         <div class="contenimagen">
          <div class="columna1">
           <div><img src="Imagenes/Captura1.PNG" alt=""></div>
           <div><img src="Imagenes/Captura2.PNG" alt=""></div>
           <div><img src="Imagenes/Captura2.PNG" alt=""></div>
           </div>
           <div class="columna2">
           <div><label class="nombre1">Soga</label></div>
            <div><label class="nombre2">Cabeza</label></div>
            <div><label class="nombre3">Canto</label></div>
           </div>
           <div class="columna3">
           <div><img src="Imagenes/Captura4.PNG" alt=""></div> 
           </div>
           </div>
        </div>
</aside>
      <section id="map" class="map">
    <section class="configuracion">
      <div class="conteiner">
       <div class="preliminar"><h3>Configuración preliminar para impresión</h3></div>
       <div class="settings">
       <ul>
           <li>Tamaño de papel </li>
           <li>Diseño</li>
           <li>Color</li>
           <li>Formato</li>
       </ul>
        <ul>
           <li>: A4 (210 X 297 mm)</li>
           <li>:<select id="diseño" name="diseño" onchange="show();">
             <option  value="1">Vertical</option>
             <option  value="2">Horizontal</option>
           </select></li>
           <li>:<select id="color">
             <option id="">Color</option>
              <option id="">Blanco y negro</option>
           </select></li>
           <li>:<select id="formato">
             <option value="Pdf" id="">Pdf</option>
             <option value="xls" id="">Excel</option>
             <option value="doc" id="">Word</option>
           </select></li>
       </ul>
       </div>
       <div class="botones3">
          <button type="submit" name="btn-exportar"  id="btn-exportar" >EXPORTAR</button> 
          <button type="button" id="btn-no-exportar">CANCELAR</button>
        </div>
      </div>
    </section>
    <section class="bosquejo">
     <div class="caja">
      <div class="primero">
       <div class="segundo"><div class="tercero">
        <div class="top">
          <div class="pegar">
           <input type="file" id="files" name="files[]">
            <div class="icon-picture" id="image">Logo</div>
          </div>
          <div class="completar">
            <input type="text" placeholder="Nombre de la empresa">
            <input type="text" placeholder="Area responsable">
            <input type="text" placeholder="Area responsable directa">
          </div>
        </div>

         <div class="mid">
            <div class="mid1"><h2>LADRILLO</h2></div>
            <div class="mid2">
            <div>
                <ul>
                    <li>Nombre del Proyecto</li>
                    <li>Usuario</li>
                    <li>Lugar</li>
                    <li>Fecha</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>:<input id="nombrepdf" name="nombrepdf" type="text"></li>
                    <li>:<input id="usuario" name="usuario" type="text"></li>
                    <li>:<input id="lugar" name="lugar" type="text"></li>
                    <li>:<input type="date"></li>
                </ul>
            </div>
            </div>
         </div>

         <div class="bot">
           <div class="bot1"><h3>Proceso de calculo</h3></div><br>
           <h1>Cantidad:</h1>
           <div class="bot2-3">
              <div class="bot2"></div>
              <div class="bot3"></div>
           </div>
           <div class="bot4"> </div>
           <div class="bot8"> </div>
           
       </div>
       <div id="date">
       <div id="hora"></div>
       <div id="fecha"></div>
       </div>
       </div>
       </div>
       <div class="segundo"><div class="tercero">

        <h1>Mezcla</h1><br>
         <div class="bot5"> </div>
         <div class="bot6"> </div>
         <div class="bot7"> </div>
         <div id="date2">
         <div id="hora2"></div>
         <div id="fecha2"></div>
         </div>
       </div></div>
      </div>
      </div>
    </section>
    <div class="contenedor_reporte">
    <div class="reporte">
      <iframe id="pdf_preview" class="pdf"  type="application/pdf" src="" ></iframe>
    </div>  
    </div>
    </section>

<script src="JS/agregar.js"></script>
<script src="JS/verificar.js"></script>
<script src="JS/saltar.js"></script>
<script src="JS/buscador.js"></script>
<script>
    function archivo(evt) {
        var files = evt.target.files; // FileList objec   // Obtenemos la imagen del campo "file".
        for (var i = 0, f; f = files[i]; i++) {//Solo admitimos imágenes.
            if (!f.type.match('image.*')) {
                continue;
            }       
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {// Insertamos la imagen
            document.getElementById("image").removeAttribute("class",'icon-picture');
            document.getElementById("image").innerHTML = ['<img class="thumb" id="importar" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
              importar= document.getElementById("importar").value;
             src=$('.thumb').attr('src');
             alert(src);
            };
        })(f);
             reader.readAsDataURL(f);
        }
    }  
    function show() {
    d = document.getElementById("diseño").value;
    if(d==2){
      $("#map").removeClass('map').addClass('map2');
    }
    if(d==1){
        $("#map").removeClass('map2').addClass('map');
    }
    }
    
    
    
    document.getElementById('files').addEventListener('change', archivo, false);
    
</script>
</body>
</html>
<?php }else{
  header('location:login.php');
  } ?>