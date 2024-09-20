const Router = require('express').Router();
const AuthController = require('../controllers/Auth.controller');
const body = require('express').urlencoded({ extended: true });

Router.get('/register', AuthController.getRegisterPage);
Router.post('/register', body, AuthController.postRegisterData);
Router.get('/login', AuthController.getLoginPage);
Router.post('/login', body, AuthController.postLoginData);
Router.post('/logout', AuthController.logoutFunctionController);

module.exports = Router;
