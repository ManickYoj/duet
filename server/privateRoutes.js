const express = require('express');
const router = express.Router();
const path = require('path');

// ---- Check authentication of all routes in this file
function privateRoute(req, res, next) {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
}

router.use(privateRoute);

// ---- Routes Below
router.get('/app', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/app.html'));
});

module.exports = router;

