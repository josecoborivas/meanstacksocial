'use extrict'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');

//middlewares
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
//cors

//rutas
app.use('/api', user_routes);

//exportar
module.exports = app;