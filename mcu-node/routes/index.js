const express = require('express');
const route = express.Router();
const indexController = require('../controllers/indexController');

//localhost:3000
route.get('/', indexController.viewMovies)
//localhost:3000/releaseOrder
route.get('/releaseOrder', indexController.viewReleaseOrder)
//localhost:3000/chronologyOrder
route.get('/chronologyOrder', indexController.viewChronologyOrder)

module.exports = route;