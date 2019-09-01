//setup
var express=require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

//confiration
app.use(morgan('dev'));//hace un lof de cada request al terminal
app.use(bodyParser.urlencoded({extended:true}));//parse application
app.use(bodyParser.json());//parse application/json
app.use(favicon(__dirname + '/favicon.ico'));

app.use('/', express.static('./src/client/')); //setea los archivos staticos

//application
app.get('*', function(req,res){
	res.sendfile('./src/client/index.html'); // carga el unico archivo de vista (angular maneaj)ara los cambios de l pagina a tra vez de esta vista del forntend
});

//listen (la app comienza a escuchar en el puerto 8000)
app.listen(4000);
console.log("app listening on port 4000");