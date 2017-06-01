const bcrypt = require('bcryptjs');

const db = require('../database/database');

function hashPass(plaintext) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(plaintext, salt);
}

function comparePass(userPass, hashedPass) {
  return bcrypt.compareSync(userPass, hashedPass);
}

function createUser(username, password) {

  return db('users')
  .returning('*')
  .insert({
    username,
    password: hashPass(password),
  });
}

module.exports = {
  hashPass,
  comparePass,
  createUser,
};