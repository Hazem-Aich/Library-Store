const BookModel = require('../Models/Home.Model');

exports.bookController = (req, res, next) => {
  BookModel.getallBooks().then(books => res.render('index', { books: books }));
};

exports.getOneBookDetailsController = (req, res, next) => {
  let id = req.params.id;
  BookModel.getoneBook(id).then(resbook => {
    res.render('details', { book: resbook });
  });
};
