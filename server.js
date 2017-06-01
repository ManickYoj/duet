'use strict';

// TODO: XSS protection with CSP, CORS, sanitization
// TODO: Database
// TODO: Login Page

// -- Load external modules
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const flash = require('connect-flash');

// -- Load internal modules
const passport = require('./server/passport');
const routes = require('./server/routes');
const db = require('./database/database');

// -- Load configuration
if (process.env.NODE_ENV === undefined) require('dotenv').load();

// -- Middleware Setup
const app = express();
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));         // Request logging
}
app.use(bodyParser.json());     // Parse JSON-encoded request parameters
app.use(bodyParser.urlencoded({ // Parse url-encoded request parameters
  extended: false,    // Do not parse urls as objects or arrays, only primitives
}));
app.use(session({               // Session persistence middleware
  // TODO: revisit cookie settings for production
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize()); // Authentication middleware
app.use(passport.session());    // Handle persistence with sessions
app.use(flash());               // Store flash messages in session
app.use(routes);


// -- Routes
// Get public login page
app.get('/', (req, res) => {
  res.send('Duet index route (Not yet built).');
});

// -- Execute migrations
db.migrate.latest()
.then(() => {
  return db.seed.run();
})
.then(() =>{
  // -- Start Server
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});


module.exports = app;