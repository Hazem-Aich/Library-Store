const Router = require('express').Router();
const AuthController = require('../controllers/Auth.controller');
const body = require('express').urlencoded({ extended: true });

Router.get('/register', AuthController.getregisterPage);
Router.post('/register', body, AuthController.postRegisterData);
module.exports = Router;
