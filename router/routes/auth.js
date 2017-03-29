var express = require('express');
var passport = require('passport');
var router = express.Router();

var path = require('path');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
  res.render('signup.ejs', { message: req.flash('signupMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/brewtool',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/brewtool',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/brewtool', isLoggedIn, function(req, res) {
  console.log('GET ----- /brewtool');
  console.log(req.user);
  res.sendFile(path.join(__dirname, '../../public/brewtool.html'));
});

module.exports = router;

function isLoggedIn(req, res, next) {
  console.log('isLoggedIn()');
  console.log(req.user);
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}

