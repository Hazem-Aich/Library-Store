const HomeController = require('../controllers/Home.controller');
const Router = require('express').Router();

Router.get('/', HomeController.threebookController);

module.exports = Router;
