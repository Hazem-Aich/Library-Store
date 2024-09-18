const mongoose = require('mongoose');
var schemaBook = mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  price: Number,
  author: String,
  image: String,
});

var Book = mongoose.model('book', schemaBook);
let url = 'mongodb://localhost:27017/Library';
exports.getthreeBooks = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Book.find({}).limit(3);
      })
      .then(books => {
        // mongoose.disconnect();
        resolve(books);
      })
      .catch(err => reject(err));
  });
};
exports.getallBooks = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Book.find({});
      })
      .then(books => {
        // mongoose.disconnect();
        resolve(books);
      })
      .catch(err => reject(err));
  });
};

exports.getoneBook = id => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return Book.findById(id);
      })
      .then(books => {
        // mongoose.disconnect();
        resolve(books);
      })
      .catch(err => reject(err));
  });
};
