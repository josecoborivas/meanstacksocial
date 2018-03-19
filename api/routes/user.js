'use strict'

var express = require('express');
var UserController = require('../controllers/User');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/home', UserController.home);
api.get('/pruebas', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);
api.get('/users/:page', md_auth.ensureAuth, UserController.getUsers);


module.exports = api;