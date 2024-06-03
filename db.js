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
  

db.connect()
  .then(() => console.log("Connected to the database successfully."))
  .catch(err => console.error("Failed to connect to the database.", err));

module.exports = db;
