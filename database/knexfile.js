// Ensure that the `.env` file is loaded, even if it already
// has been, so that we can make sure the config is ubiquitous.
const path = require('path');
require('dotenv').load({
  path: path.resolve(__dirname, '../.env'),
});

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
  },
};