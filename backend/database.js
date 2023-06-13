const mysql = require('mysql2');
require('dotenv').config();

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE } = process.env;

// Check if any of the environment variables are empty
if (!MYSQLHOST || !MYSQLUSER || !MYSQLPASSWORD || !MYSQLDATABASE) {
  console.error('Missing or empty environment variables. Please set .env variables to their values ');
 process.exit(1);
}

const pool = mysql.createPool({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE
});

module.exports = pool;
