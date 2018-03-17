'use extrict'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();

//cargar rutas

//middlewares
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
//cors

//rutas
app.get('/', (req, res)=>{
    res.status(200).send({
        message: 'Hola Mundo desde el servidor de NodeJs'
    });
});

app.get('/pruebas', (req, res)=>{
    res.status(200).send({
        message: 'Accion de prueba desde el servidor de NodeJs'
    });
});

//exportar
module.exports = app;