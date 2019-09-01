<?php

$diseño=$_REQUEST['diseño'];
$formato=$_REQUEST['formato'];

$nombre=$_REQUEST['nombre'];
$usuario=$_REQUEST['usuario'];
$lugar=$_REQUEST['lugar'];
$longitud=$_REQUEST['longitud'];
$ancho=$_REQUEST['ancho'];
$altura=$_REQUEST['altura'];
$horizontal=$_REQUEST['horizontal'];
$vertical=$_REQUEST['vertical'];
$desperdicio=$_REQUEST['desperdicio'];
$valorsoga1=$_REQUEST['valorsoga1'];
$valorcabeza1=$_REQUEST['valorcabeza1'];
$valorcanto1=$_REQUEST['valorcanto1'];
$ladrillosoga=$_REQUEST['ladrillo_soga'];
$ladrillocabeza=$_REQUEST['ladrillo_cabeza'];
$ladrillocanto=$_REQUEST['ladrillo_canto'];
$desperdicio2=$_REQUEST['desperdicio2'];
$msoga1=$_REQUEST['msoga1'];
$mcabeza1=$_REQUEST['mcabeza1'];
$mcanto1=$_REQUEST['mcanto1'];
$msoga2=$_REQUEST['msoga2'];
$mcabeza2=$_REQUEST['mcabeza2'];
$mcanto2=$_REQUEST['mcanto2'];
$mezclaa=$_REQUEST['mezclaa'];
$cementoo=$_REQUEST['cementoo'];
$arenaa=$_REQUEST['arenaa'];
$aguaa=$_REQUEST['aguaa'];
$arenaa2=$_REQUEST['arenaa2'];
$airee=$_REQUEST['airee'];
$aguacemento=$_REQUEST['aguacemento'];
$resultcemento=$_REQUEST['resultcemento'];
$resultarena=$_REQUEST['resultarena'];
$sumaredondeo=$_REQUEST['sumaredondeo'];
$resulrendcemento12=$_REQUEST['resulrendcemento12'];
$resulrendarena12=$_REQUEST['resulrendarena12'];
$resulrendagua12=$_REQUEST['resulrendagua12'];
$sumaresul12=$_REQUEST['sumaresul12'];
$aireresult12=$_REQUEST['aireresult12'];
$totalresult12=$_REQUEST['totalresult12'];
$soga_cemento=$_REQUEST['soga_cemento'];
$soga_arena=$_REQUEST['soga_arena'];
$soga_agua=$_REQUEST['soga_agua'];
$cabeza_cemento=$_REQUEST['cabeza_cemento'];
$cabeza_arena=$_REQUEST['cabeza_arena'];
$cabeza_agua=$_REQUEST['cabeza_agua'];
$canto_cemento=$_REQUEST['canto_cemento'];
$canto_arena=$_REQUEST['canto_arena'];
$canto_agua=$_REQUEST['canto_agua'];

$horizontal='
  <html >
      <head>

              <style>
        body{
          margin:0;
        }

        header {
          display:inline-block;
            position: relative;
          margin-left: 2.5cm;
            margin-right: 2.5cm;
          margin-top: 3cm;
          height: 3cm; 
          width:24.7cm;
        }
        #logo{
          width:2 cm;
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
            width:100%;
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
            margin-left: 2.5cm;
            margin-right: 2.5cm;
            height: 12cm;
            width:24.7cm;
        }
        .cuerpo1,.cuerpo2{
          background-color:#ccc;
          width:100%;
          margin:0;
        }
        .cuerpo1{  text-align:center;} 
        .cuerpo1 h3 , .cuerpo2 h4 {    display: block;font-weight: bold;}

        .pagina2{
          PAGE-BREAK-AFTER: always;
          margin-top: 3cm;
          margin-left: 2.5cm;
          margin-right: 2.5cm;
          height: 15cm;
          width:24.7cm;
        }
        .mezcla1{
          margin-left:0.5cm;
          width:100%;
        }
        .mezcla2,.mezcla3{
          margin-left:1cm;
        }

        .mezcla2 td{
          padding-right: 1.5cm;
        }
        .mezcla6{
          text-align:center;
          border: #ccc 3px solid;
          border-collapse: collapse;
          width: 330px;
        }
        .cantidad1{
          width:12cm;
          height:8cm;
        }
        .cantidad2{
          width:12.5cm;
          height:8cm;
          display:inline-block;
        }
        .mezcla7,.mezcla8{
          width:12cm;
          height:8cm;
        }
        .mezcla8{
          display:inline-block;
        }
        .cuerpo1 h3,.cuerpo2 h4{
          margin:0;
        }
        </style>';
$vertical='
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
          margin-bottom:4cm;
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
        PAGE-BREAK-AFTER: always;
        margin-top: 1cm;
        margin-left: 2cm;
        margin-right: 1cm;
        height: 24.7cm;
        width:18cm;
        
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
        width: 400px;
      }
      .color{
        background-color: #ccc;
      }
      </style>';
$html='
  </head>
  <body>
    <header>
      <div id="logo">
      <img src="../Imagenes/formula0.jpg">
      </div>
      <div class="cabecera">
        <table >
          <tr>
            <td>'.$nombre.'</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>  
        </div>
    </header>
    <div class="pagina1" >
        <div class="cuerpo1"><h3>LADRILLO</h3></div>
        <table >
          <tr>
            <td>Nombre del Proyecto</td>
            <td>:</td>
            <td>'.$nombre.'</td>
          </tr>
          <tr>
            <td>Usuario</td>
            <td>:</td>
            <td>'.$usuario.'</td>
          </tr>
          <tr>
            <td>Lugar</td>
            <td>:</td>
            <td>'.$lugar.'</td>
          </tr>
          <tr>
            <td>Fecha</td>
            <td>:</td>
            <td></td>
            </tr>
        </table>
        <div class="cuerpo2"><h4 >Proceso de calculo</h4></div>
        <div><h3 style="margin:0;">Cantidad</h3></div>
        <div class="cantidad1">
          <table>
            <tr>
              <td>L &nbsp;: Longitud del Ladrillo</td>
              <td class="cant1">'.$longitud.'</td>
              <td > cm</td>
            </tr>
            <tr>
              <td>A : Ancho del Ladrillo</td>
              <td class="cant1">'.$ancho.'</td>
              <td> cm</td>
            </tr>
            <tr>
              <td>H : Altura del Ladrillo</td>
              <td class="cant1">'.$altura.'</td>
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
              <td class="cant1">'.$desperdicio.'</td>
              <td> %</td>
            </tr>
          </table>
           <table class="cuerpo3">
               <tr > <td  colspan="5" style="text-align:center;">Sin desperdicio+ %desperdicio</td><td></td><td></td><td></td></tr>
              <tr>
                  <td>Soga</td>
                  <td>= largo por alto</td>
                  <td style="padding-right: 0;">='.$valorsoga1.'</td>
                  <td >und</td>
                  <td style="padding-right: 0;"> '.$ladrillosoga.'</td>
                  <td>und</td> 
                </tr>
                <tr>
                  <td>Cabeza</td>
                  <td>= ancho por alto</td>
                  <td style="padding-right: 0;">='.$valorcabeza1.'</td> 
                  <td>und</td>
                  <td style="padding-right: 0;"> '.$ladrillocabeza.'</td> 
                  <td>und</td>
                </tr>
                <tr>
                  <td>Canto</td>
                  <td>= largo por ancho</td>
                  <td style="padding-right: 0;">='.$valorcanto1.' </td> 
                  <td>und</td>
                  <td style="padding-right: 0;"> '.$ladrillocanto.'</td>
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
  <div  class="pagina2">
   <h3 style="margin:0;">Mezcla</h3>
   <div class="mezcla1">
     <table>
       <tr>
         <td>Volúmen de la Mezcla en m3 por m2 del muro</td>
       </tr>
       <tr>
         <td>% de desperdición</td>
         <td>'.$desperdicio2.' %</td>
       </tr>
     </table>
     <table class="mezcla2">
       <tr>
         <td>Soga</td>
         <td>=</td>
         <td>'.$msoga1.'</td>
         <td style="padding-right: 0;">'.$msoga2.'</td>
         <td >m3/m2</td>
       </tr>
       <tr>
         <td>Cabeza</td>
         <td>=</td>
         <td>'.$mcabeza1.'</td>
         <td style="padding-right: 0;">'.$mcabeza2.'</td>
         <td >m3/m2</td>
       </tr>
       <tr>
         <td>Canto</td>
         <td>=</td>
         <td>'.$mcanto1.'</td>
         <td style="padding-right: 0;">'.$mcanto2.'</td>
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
         <td>1:'.$mezclaa.'</td>
       </tr>
       <tr>
         <td>Densidad - Peso unitario </td>
       </tr>
       <tr>
         <td></td>
         <td>Cemento</td>
         <td>'.$cementoo.'</td>
         <td>Kg/m3</td>
       </tr>
       <tr>
         <td></td>
         <td>Arena</td>
         <td>'.$arenaa.'</td>
         <td>Kg/m3</td>
       </tr>
       <tr>
         <td></td>
         <td>Agua</td>
         <td>'.$aguaa.'</td>
         <td>Kg/m3</td>
       </tr>
       <tr>
         <td>Peso especifico</td>
       </tr>
       <tr>
         <td></td>
         <td>Arena</td>
         <td>'.$arenaa2.'</td>
         <td>Kg/m3</td>
       </tr>
       <tr>
         <td>% de aire incorporado</td>
         <td></td>
         <td>'.$airee.'</td>
         <td>%</td>
       </tr>
       <tr>
         <td>Relación de Agua/Cemento</td>
         <td></td>
         <td>'.$aguacemento.'</td>
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
         <td>'.$resultcemento.'Kg</td>
       </tr>
       <tr>
         <td></td>
         <td>Arena</td>
         <td>5</td>
         <td>p3</td>
         <td>= </td>
         <td>'.$resultarena.'Kg</td>
       </tr>
     </table>
    </div>
    <div class="mezcla8">
      <table class="mezcla5">
       <tr>
         <td colspan="9">Rendimiento de la mezcla</td>
       </tr
       <tr>
         <td >Cemento</td>
         <td> '.$resultcemento.'</td>
         <td>Kg</td>
         <td></td>
         <td>/</td>
         <td>'.$cementoo.'</td>
         <td >Kg/m3</td>
         <td>'.$resulrendcemento12.'</td>
         <td>m3</td>
       </tr>
       <tr>
         <td>Arena</td>
         <td> '.$resultarena.'</td>
         <td>Kg</td>
         <td></td>
         <td>/</td>
         <td>'.$arenaa.'</td>
         <td>Kg/m3</td>
         <td>'.$resulrendarena12.'</td>
         <td>m3</td>
       </tr>
       <tr>
         <td>Agua</td>
         <td>('.$resultcemento.'</td>
         <td>Kg x</td>
         <td>'.$aguacemento.' )</td>
         <td>/</td>
         <td>'.$aguaa.'</td>
         <td>Kg/m3</td>
         <td>'.$resulrendagua12.'</td>
         <td>m3</td>
       </tr>
       <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td>'.$sumaresul12.'</td>
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
         <td>'.$aireresult12.'</td>
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
         <td>'.$totalresult12.'</td>
         <td>m3</td>
       </tr>
     </table>
     <table class="mezcla6">
       <tr>
         <td>Ladrillo</td>
         <td>Cemento <br> Bolsas</td>
         <td>Arena <br> m3</td>
         <td>Agua <br> m3</td>
       </tr>
       <tr >
         <td>Soga</td>
         <td>'.$soga_cemento.'</td>
         <td>'.$soga_arena.'</td>
         <td>'.$soga_agua.'</td>
       </tr>
       <tr >
         <td>Cabeza</td>
         <td>'.$cabeza_cemento.'</td>
         <td>'.$cabeza_arena.'</td>
         <td>'.$cabeza_agua.'</td>
       </tr>
       <tr>
         <td>Canto</td>
         <td>'.$canto_cemento.'</td>
         <td>'.$canto_arena.'</td>
         <td>'.$canto_agua.'</td>
       </tr>
     </table>
    </div>             
   </div>
  </div>
</body>
</html>';
if($formato=="Pdf")
{
    if($diseño=="1")
    {
      $reporte=$vertical.$html;
      require_once '../lib/dompdf/dompdf_config.inc.php';
      $dompdf = new DOMPDF();
      $dompdf->set_paper('a4', 'portraint');
      $dompdf->load_html( utf8_decode($reporte) );
      $dompdf->render();
      $dompdf->stream("mi_archivo.pdf");
   }else{
    $reporte=$horizontal.$html;
    require_once '../lib/dompdf/dompdf_config.inc.php';
      $dompdf = new DOMPDF();
      $dompdf->set_paper('a4', 'landscape');
      $dompdf->load_html( utf8_decode($reporte) );
      $dompdf->render();
      $dompdf->stream("mi_archivo.pdf");
   }
}else{

  if($formato=="doc")
  {
     header("Content-type: application/vnd.ms-word");
      header("Content-Disposition: attachment; filename=mi_archivo.doc");
      header("Pragma: no-cache");
      header("Expires: 0");   
      echo utf8_decode($html);
    }else{
      header("Content-type: application/vnd.ms-excel");
      header("Content-Disposition: attachment; filename=mi_archivo.xls");
      header("Pragma: no-cache");
      header("Expires: 0");   
      echo utf8_decode($html);
    }
}
    