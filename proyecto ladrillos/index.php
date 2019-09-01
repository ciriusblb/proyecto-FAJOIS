
<!DOCTYPE html>
<html>
  <head >

      <style>
body{
  margin:0;
}

header {
  display:inline-block;
    position: relative;
  margin-left: 2cm;
    margin-right: 1cm;
  margin-top: 1cm;
  height: 3cm; 
  width:18cm;
}
#logo{
  width: 2cm;
  height: 2cm; 
}
#logo img {
  display:inline-block;
  margin-top: 10px;
  height: 2cm;
  width: 2cm;
}
.cabecera{
  position:relative;
    height: 3cm;
    width:16cm;
    display:inline-block;
}
.cabecera td {

    width: 10cm;
    height: 0.7cm;
}

.cabecera table{
  margin-left: 3.5cm;;
  position:relative;
  margin-top: 0.2cm;
  text-align: center;
}
.pagina1{
    margin-left: 2cm;
    margin-right: 1cm;
    height: 21.7cm;
    width:18cm;
}
.cuerpo1,.cuerpo2{
  background-color:#ccc;
  width:100%;
  margin:0;
}
.cuerpo1{  text-align:center;} 
.cuerpo1 h3 , .cuerpo2 h4 {    display: block;font-weight: bold;}
.cant1{
  padding-left: 7cm;
}
.cuerpo3 td{
  width:auto;
  padding-right: 1.2cm;
}

.pagina2{
  margin-top: 1cm;
  margin-left: 2cm;
  margin-right: 1cm;
  height: 24.7cm;
  width:18cm;
  PAGE-BREAK-AFTER: always;
}
.mezcla1{
  margin-left:0.5cm;
  width:17cm;
}
.mezcla2,.mezcla3{
  margin-left:1cm;
}

.mezcla2 td,.mezcla4 td{
  padding-right: 1.5cm;
}
.mezcla5,.mezcla6{margin-top:1cm;}
.mezcla6{
  text-align:center;
  border: #ccc 3px solid;
  border-collapse: collapse;
}
.color{
  background-color: #ccc;
}
</style>
  </head>
  <body>
    <header>
      <div id="logo">
      <img src="../Imagenes/formula0.jpg">
      </div>
      <div class="cabecera">
        <table >
          <tr>
            <td>E</td>
          </tr>
          <tr>
            <td>A</td>
          </tr>
          <tr>
            <td>Empresa Responsableaaaaaaaaaaaa</td>
          </tr>
        </table>  
        </div>
    </header>
    <main>
    <div class="pagina1" >
        <div class="cuerpo1"><h3>LADRILLO</h3></div>
        <table >
          <tr>
            <td>Nombre del Proyecto</td>
            <td>:</td>
            <td>Holaaaaaa</td>
          </tr>
          <tr>
            <td>Usuario</td>
            <td>:</td>
            <td>Holaaaaaadasdasd</td>
          </tr>
          <tr>
            <td>Lugar</td>
            <td>:</td>
            <td></td>
          </tr>
          <tr>
            <td>Fecha</td>
            <td>:</td>
            <td></td>
            </tr>
        </table>
        <div class="cuerpo2"><h4>Proceso de calculo</h4></div>
        <div><h3 style="margin:0;">Cantidad</h3></div>
        <div class="cantidad1">
            <table>
              <tr>
                <td>L &nbsp;: Longitud del Ladrillo</td>
                <td class="cant1">Hola</td>
                <td > cm</td>
              </tr>
              <tr>
                <td>A : Ancho del Ladrillo</td>
                <td class="cant1"></td>
                <td> cm</td>
              </tr>
              <tr>
                <td>H : Altura del Ladrillo</td>
                <td class="cant1"></td>
                <td> cm</td>
              </tr>
              <tr>
                <td>Jh: Espesor de la junta Horizontal</td>
                <td class="cant1"></td>
                <td> cm</td>
              </tr>
              <tr>
                <td>Jv: Espesor de la junta Vertical</td>
                <td class="cant1"></td>
                <td> cm</td>
              </tr>
              <tr>
                <td>Porcentaje de Desperdicio</td>
                <td class="cant1"></td>
                <td> %</td>
              </tr>
            </table>
            <table class="cuerpo3">
               <tr > <td  colspan="5" style="text-align:center;">Sin desperdicio+ %desperdicio</td><td></td><td></td><td></td></tr>
              <tr>
                  <td>Soga</td>
                  <td>= largo por alto</td>
                  <td style="padding-right: 0;">=12.43</td>
                  <td >und</td>
                  <td style="padding-right: 0;"> 713.67</td>
                  <td>und</td> 
                </tr>
                <tr>
                  <td>Cabeza</td>
                  <td>= ancho por alto</td>
                  <td style="padding-right: 0;">=23.44</td> 
                  <td>und</td>
                  <td style="padding-right: 0;"> 12,2</td> 
                  <td>und</td>
                </tr>
                <tr>
                  <td>Canto</td>
                  <td>= largo por ancho</td>
                  <td style="padding-right: 0;">=12.44 </td> 
                  <td>und</td>
                  <td style="padding-right: 0;">12.1</td>
                  <td>und</td> 
                </tr>
            </table>
        </div>
        <div class="cantidad2">
            <table>
              <tr> 
                <td>Formula :</td>
              </tr>
              <tr> 
                <td></td>
                <td></td>
                <td style="text-align:center;">1</td>
                <td> C = Cantidad de ladrillos por m2 </td>
              </tr>
              <tr>
                <td></td>
                <td> C =</td>
                <td><hr/></td>
                <td> L = Longitud de ladrillos(m) </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>(L+Jh) X (H+Jv)</td>
                <td> Jh = Espesor de la junta horizontal(m)</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> H = Altura de ladrillo(m)</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> Jv = Espesor de la junta vertical(m)</td>
              </tr>
            </table>
            <table>
              <tr> 
                <td></td>
                <td></td>
                <td style="text-align:center;">1</td>
              </tr>
              <tr>
                <td></td>
                <td> C =</td>
                <td><hr/></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>(L+Jh) X (H+Jv)</td>
              </tr>
            </table>
        </div>        
    </div>
    </main>
  </body>
  <div  class="pagina2">
   <h3>Mezcla</h3>
   <div class="mezcla1">
     <table>
       <tr>
         <td>Volúmen de la Mezcla en m3 por m2 del muro</td>
       </tr>
       <tr>
         <td>% de desperdición</td>
         <td>23.00 %</td>
       </tr>
     </table>
     <table class="mezcla2">
       <tr>
         <td>Soga</td>
         <td>=</td>
         <td>0.0130</td>
         <td style="padding-right: 0;">0.010</td>
         <td >m3/m2</td>
       </tr>
       <tr>
         <td>Cabeza</td>
         <td>=</td>
         <td>0.0130</td>
         <td style="padding-right: 0;">0.0130</td>
         <td >m3/m2</td>
       </tr>
       <tr>
         <td>Canto</td>
         <td>=</td>
         <td>0.0130</td>
         <td style="padding-right: 0;">0.0130</td>
         <td >m3/m2</td>
       </tr>
     </table>
     <table>
       <tr>
         <td>Nota :</td>
       </tr>
       <tr>
         <td>Para la determinación de volumen de mezcla por m3 en el componente "n"=Número de ladrillos por m2, se utilizo la cantidad de ladrillos sin desperdicio.</td>
       </tr>
     </table>
     <div class="mezcla7">
         <table class="mezcla3">
           <tr>
             <td>Cemento - Arena - Agua</td>
             <td >(m2 de muro)</td>
           </tr>
           <tr>
             <td>Mezcla</td>
             <td></td>
             <td>1:5</td>
           </tr>
           <tr>
             <td>Densidad - Peso unitario </td>
           </tr>
           <tr>
             <td></td>
             <td>Cemento</td>
             <td>3150</td>
             <td>Kg/m3</td>
           </tr>
           <tr>
             <td></td>
             <td>Arena</td>
             <td>3150</td>
             <td>Kg/m3</td>
           </tr>
           <tr>
             <td></td>
             <td>Agua</td>
             <td>3150</td>
             <td>Kg/m3</td>
           </tr>
           <tr>
             <td>Peso especifico</td>
           </tr>
           <tr>
             <td></td>
             <td>Arena</td>
             <td>3150</td>
             <td>Kg/m3</td>
           </tr>
           <tr>
             <td>% de aire incorporado</td>
             <td></td>
             <td>315</td>
             <td>%</td>
           </tr>
           <tr>
             <td>Relación de Agua/Cemento</td>
             <td></td>
             <td>3150</td>
           </tr>
         </table> 
         <table class="mezcla4">
           <tr>
             <td>Análisis</td>
           </tr>
           <tr>
             <td></td>
             <td>Cemento</td>
             <td>1</td>
             <td>p3</td>
             <td>= </td>
             <td>Kg</td>
           </tr>
           <tr>
             <td></td>
             <td>Arena</td>
             <td>5</td>
             <td>p3</td>
             <td>= </td>
             <td>Kg</td>
           </tr>
         </table>
      </div>
      <div class="mezcla8">
         <table class="mezcla5">
           <tr>
             <td style="padding-right: 2cm;">Cemento</td>
             <td> 5.6</td>
             <td>Kg</td>
             <td></td>
             <td>/</td>
             <td>1.2</td>
             <td style="padding-right: 2.3cm;">Kg/m3</td>
             <td>4.3</td>
             <td>m3</td>
           </tr>
           <tr>
             <td>Arena</td>
             <td> 3.4</td>
             <td>Kg</td>
             <td></td>
             <td>/</td>
             <td>3.2</td>
             <td>Kg/m3</td>
             <td>9.3</td>
             <td>m3</td>
           </tr>
           <tr>
             <td>Agua</td>
             <td>(2.33</td>
             <td>Kg x</td>
             <td>3.1 )</td>
             <td>/</td>
             <td>3.2</td>
             <td>Kg/m3</td>
             <td>6.3</td>
             <td>m3</td>
           </tr>
           <tr>
             <td>Aire incorporado 1%</td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td>3.6</td>
             <td>m3</td>
           </tr>
           <tr>
             <td>Total</td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td>12.6</td>
             <td>m3</td>
           </tr>
         </table>
         <table class="mezcla6">
           <tr class="color">
             <td>Ladrillo</td>
             <td>Cemento <br> Bolsas</td>
             <td>Arena <br> m3</td>
             <td>Agua <br> m3</td>
           </tr>
           <tr >
             <td>Soga</td>
             <td></td>
             <td></td>
             <td></td>
           </tr>
           <tr class="color">
             <td>Cabeza</td>
             <td></td>
             <td></td>
             <td></td>
           </tr>
           <tr>
             <td>Canto</td>
             <td></td>
             <td></td>
             <td></td>
           </tr>
         </table>    
      </div>  
   </div>
  </div>
  
</html>