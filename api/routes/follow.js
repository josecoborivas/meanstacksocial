'use strict'

var express = require('express');
var FollowControllers = require('../controllers/follow');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/follow', md_auth.ensureAuth, FollowControllers.saveFollow);

module.exports = api;