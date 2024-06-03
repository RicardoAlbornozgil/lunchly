/** Database for lunchly */

require('dotenv').config();

const { Client } = require("pg");


const db = new Client({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
  });
  
module.exports = db;
