const AuthModel = require('../Models/Auth.model');

exports.getregisterPage = (req, res, next) => {
  res.render('register');
};

exports.postRegisterData = (req, res, next) => {
  AuthModel.registerFunctionModel(req.body.name, req.body.email, req.body.password).then(user => {
    res.redirect('/login');
  });
};
