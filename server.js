const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const book = require('./controllers/Home.controller');

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', 'views');
const RouterHome = require('./routers/Home.route');
const RouterBook = require('./routers/book.route');

app.use('/', RouterHome);
app.use('/', RouterBook);

app.get('/contact', (req, res) => {
  res.render('contact');
});
// app.get('/details', (req, res) => {
//   res.render('details');
// });
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});
app.listen(port);
