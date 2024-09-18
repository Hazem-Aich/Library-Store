const bookController = require('../controllers/book.controller');
const Router = require('express').Router();
Router.get('/books', bookController.bookController);
Router.get('/books/:id', bookController.getOneBookDetailsController);

module.exports = Router;
