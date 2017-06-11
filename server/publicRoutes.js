const express = require('express');
const path = require('path');
const router = express.Router();

const passport = require('./passport');
const auth = require('./auth');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) res.redirect('/app');
  else res.redirect('/login');
});

router.get('/login', (req, res)=> {
  res.sendFile(path.resolve(__dirname, '../client/login.html'));
});

// Create a new user
router.post('/auth/register', (req, res, next) => {
  const { username, password } = req.body;

  return auth.createUser(username, password)
  .then((userdata) => {
    passport.authenticate('local', {
      successRedirect: '/app',
      failureRedirect: '/',
      failureFlash: true,
    })(req, res, next);
  })
  .catch((err) => {
    res.status(500).json({status: 'error'});
    console.error(err);
  });

});

// Authenticate an existing user
router.post('/auth/login', passport.authenticate('local', {
  successRedirect: '/app',
  failureRedirect: '/',
  failureFlash: true,
}));

module.exports = router;