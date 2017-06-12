const express = require('express');
const router = express.Router();
const path = require('path');

const db = require('../database/database');

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

router.get('/todos', (req, res) => {
  const user = req.user;
  db('todos').where({owner: user.id}).then((todos) => {
    res.json(todos);
  });
});

router.post('/todos', (req, res) => {
  const {
    name,
    deadline,
    estimatedDuration,
  } = req.body;

  db('todos').insert({
    owner: req.user.id,
    name,
    deadline,
    estimatedDuration,
  }).then((result) => {
    res.json({success: true});
  }).catch((result) => {
    res.json({success: false});
    console.error(result);
  });
});

router.delete('/todos/:id', (req, res) => {
  // TODO: Deletion
});

module.exports = router;

