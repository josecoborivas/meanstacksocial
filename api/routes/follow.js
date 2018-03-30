'use strict'

var express = require('express');
var FollowControllers = require('../controllers/follow');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/pruebas-follow', md_auth.ensureAuth, FollowControllers.pruebas);

module.exports = api;