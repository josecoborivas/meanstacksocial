'use strict'

var User = require('../models/user');


function home(req, res){
    res.status(200).send({
        message: 'Hola Mundo desde el servidor de NodeJs'
    });
}

function pruebas(req, res){
    console.log(req.body);
    res.status(200).send({
        message: 'Accion de prueba desde el servidor de NodeJs'
    });
}

module.exports = {
    home,
    pruebas
}