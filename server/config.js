let mysql = require("mysql");
require('dotenv').config();

var dbconn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD,
    database: "cheesepot",
  });

module.exports = dbconn;