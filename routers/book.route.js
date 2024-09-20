const bookController = require('../controllers/book.controller');
const Router = require('express').Router();
const GuardAuth = require('../routers/GuardAuth');
Router.get('/books', GuardAuth.isAuth, bookController.bookController);
Router.get('/books/:id', GuardAuth.isAuth, bookController.getOneBookDetailsController);

module.exports = Router;
