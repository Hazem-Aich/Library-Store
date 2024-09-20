const Router = require('express').Router();
const AboutController = require('../controllers/about.controller');

Router.get('/about', AboutController.getPageAbout);

module.exports = Router;
