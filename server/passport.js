const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

const db = require('../database/database');
const auth = require('./auth');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db('users').where({ id }).first()
  .then((user) => { done(null, user); })
  .catch((err) => { done(err, null); });
});

passport.use( new LocalStrategy((username, password, done) => {

  db('users').where({ username }).first()
  .then((user) => {
    if (!user) return done(null, false);
    if (!auth.comparePass(password, user.password)) return done(null, false);

    // If checks pass, log in
    return done(null, user);
  });
}));

module.exports = passport;