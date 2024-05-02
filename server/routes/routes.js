const express = require('express');
const route =  express.Router();

const servicefile = require('../services/services');
const controllerfile = require('../controller/controller');

route.get('/',servicefile.indexfile);
route.get('/register',servicefile.registerfile);
route.get('/details',servicefile.detailsfile);
route.post('/api/post',controllerfile.create);
route.get('/api/post',controllerfile.find);

module.exports = route;