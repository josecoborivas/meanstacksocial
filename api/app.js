'use extrict'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');
var follow_routes = require('./routes/follow');

//middlewares
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
//cors

//rutas
app.use('/api', user_routes);
app.use('/api', follow_routes);

//exportar
module.exports = app;