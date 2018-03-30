'use strict'

//var path = require('path');
//var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var User = require('../models/user');
var Follow = require('../models/follow');

function pruebas(req, res){
    res.status(200).send({messsage: 'Hola desde el controlador de Follow'});
}

module.exports = {
    pruebas
}