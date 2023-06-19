// const express = require("express");
// const app = express();
// const test = require(".//Router/test");

// app.use("/", test);

// const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

let express = require("express");
let dbconn = require("./config");
let ejs = require("ejs");
let app = express();
let path = require("path");
var mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
const cors = require("cors");

app.use(cors());

require("dotenv").config();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// router설정
const apiRouter = require('./Router/api');
const boardRouter = require('./Router/board');

app.get("/", (req, res) => {
  console.log("/ 시작");
  
  res.render("index");
});

app.use('/api', apiRouter);
app.use('/board', boardRouter);

app.get("/order", (req, res) => {
  let order = req.query.order;
  console.log(`/order 시작`);
  if (order == "AtoZ") {
    dbconn.query("SELECT * FROM contents order by contit", (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        console.log(results);
        res.send(results);
      }
    });
  } else if (order == "price") {
    dbconn.query("select * from contents left join (select distinct connum, max(locpri) from location group by connum) location on contents.connum = location.connum;", (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        console.log(results);
        res.send(results);
      }
    });
  } else if (order == "open") {
    dbconn.query("SELECT * FROM contents order by open", (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        console.log(results);
        res.send(results);
      }
    });
  } else if (order == "genre") {
    dbconn.query("SELECT * FROM contents order by genre", (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        console.log(results);
        res.send(results);
      }
    });
  }
});

app.get("/search", (req, res) => {
  let search = req.query.search;
  let conca = req.query.conca || "";
  console.log(`/search 시작`);
  //console.log("search 는" + search + "다");
  dbconn.query(
    "SELECT * FROM contents WHERE contit LIKE ? and conca=?",
    ["%" + search + "%", conca],
    (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        console.log(results);
        res.send(results);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("5000 서버가 시작");
});
