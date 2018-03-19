'use strict'

var express = require('express');
var UserController = require('../controllers/User');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/home', UserController.home);
api.get('/pruebas', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login',md_auth.ensureAuth, UserController.loginUser);


module.exports = api;