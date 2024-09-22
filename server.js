const express = require('express');
const mongoose = require('mongoose');

// connect mongodb session
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

const path = require('path');
const app = express();
const port = 4000;
const book = require('./controllers/Home.controller');
const RouterAuth = require('./routers/auth.route');
app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', 'views');
const RouterHome = require('./routers/Home.route');
const RouterBook = require('./routers/book.route');
const RouterAbout = require('./routers/about.route');
const flash = require('connect-flash');

app.use(flash());
var Store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/Library',
  collection: 'sessions',
});
// to use sessions
app.use(
  session({
    secret: 'This is a secret',
    // cookie: {
    //   maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    // },
    store: Store,
    resave: true,
    saveUninitialized: true,
  }),
);
app.use('/', RouterBook);
app.use('/', RouterHome);
app.use('/', RouterBook);
app.use('/', RouterAuth);
app.use('/', RouterAbout);

app.get('/contact', (req, res) => {
  res.render('contact', { verifUser: req.session.userId });
});

// app.get('/addbook', (req, res) => {
//   res.render('addBook', { verifUser: req.session.userId });
// });
// app.get('/details', (req, res) => {
//   res.render('details');
// });
// app.get('/about', (req, res) => {
//   res.render('about', { verifUser: req.session.userId });
// });

// app.get('/login', (req, res) => {
//   res.render('login');
// });

// app.get('/register', (req, res) => {
//   res.render('register');
// });
app.listen(port);
