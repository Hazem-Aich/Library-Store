const HomeModel = require('../Models/Home.Model');

exports.threebookController = (req, res) => {
  HomeModel.getthreeBooks().then(books => res.render('index', { books: books }));
};
