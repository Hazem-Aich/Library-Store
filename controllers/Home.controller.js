const bookModel = require('../Models/Home.Model');

exports.threebookController = (req, res) => {
  bookModel.getThreeBooks().then(books => {
    res.render('index', {
      books: books,
      verifUser: req.session.userId,
    });
  });
};
