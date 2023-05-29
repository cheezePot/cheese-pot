// const express = require("express");
// const app = express();
// const test = require(".//Router/test");

// app.use("/", test);

// const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

let express = require("express");
let ejs = require("ejs");
let app = express();
let path = require("path");
let mysql = require("mysql");

let dbconn = mysql.createConnection({
  user: "root",
  password: "root",
  database: "cheesepot",
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("/ 시작");

  res.render("index");
});

app.get("/api/movie", (req, res) => {
  console.log("/get/movie 시작");
  dbconn.query("select * from contents where conca='MOVIE'", (err, results) => {
    if (err) {
      console.log("db select error" + err);
    } else {
      console.log(results);
      res.render("movie", { datalist: results });
    }
  });
});

app.get("/api/drama", (req, res) => {
  console.log("/get/drama 시작");
  dbconn.query(
    "select * from contents where conca='DRAMA' ",
    (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        console.log(results);
        res.render("drama", { datalist: results });
      }
    }
  );
});

app.get("/api/anime", (req, res) => {
  console.log("/get/anime 시작");
  dbconn.query("select * from contents where conca='ANIME'", (err, results) => {
    if (err) {
      console.log("db select error" + err);
    } else {
      console.log(results);
      res.render("anime", { datalist: results });
    }
  });
});

let click = 1;

app.get("/api/movie/:click", (req, res) => {
  console.log(click);
  dbconn.query(
    "select * from contents where conca='MOVIE' and connum = ?",
    1,
    (err, results) => {
      if (err) console.log("edit err " + err);
      else {
        res.render("test", { datalist: results });
      }
    }
  );
});

app.get(`/api/movie/${click}/locdata`, (req, res) => {
  console.log("/getme 시작");
  dbconn.query("select * from location where connum = 1", (err, results) => {
    if (err) {
      console.log("db select error" + err);
    } else {
      console.log(results);
      res.render("movie1", { datalist: results });
    }
  });
});

app.get(`/api/movie/${click}/locdata/1`, (req, res) => {
  console.log("/getme 시작");
  dbconn.query("select * from location where locnum = 1", (err, results) => {
    if (err) {
      console.log("db select error" + err);
    } else {
      console.log(results);
      res.render("movie2", { datalist: results });
    }
  });
});

app.listen(5000, () => {
  console.log("5000 서버가 시작");
});
