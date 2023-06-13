//const txt = document.getElementById("a");
require("dotenv").config();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD,
  database: "cheesepot",
});

// var connection = mysql.createConnection({
//   host: "cheesepot.cynbhblak8px.eu-north-1.rds.amazonaws.com",
//   user: process.env.DB_USERNAME || "root",
//   password: "Alflarhkgkrrh1!",
//   database: "cheesepot",
// });
// connection.connect();

// let asdf;
// connection.query(
//   // "SELECT contit from contents where connum IN(1,2,3,4,5)",
//   "SELECT * FROM location",
//   function (error, results) {
//     asdf = results;
//     console.log(results);
//     console.log(error);
//   }
// );
//txt.innerHTML = asdf;
//txt = asdf;

// movie 객체에 접근 할 수 있는 api생성?
// 특정 location에 접근 할 수 있는 api생성
connection.query(
  "SELECT * from location where connum=1",
  function (error, results) {
    console.log(error);
    console.log(results);
  }
);
connection.end();
