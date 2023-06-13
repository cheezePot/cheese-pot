const express = require("express");
const router = express.Router();
const dbconn = require("../config");
require("dotenv").config();

// router.get("", (req, res) => {
//   res.send({ test: "hi" });
// });

router.get("/content/:content", (req, res) => {
  console.log(`/get/${req.params.content} 시작`);
  dbconn.query(
    "select * from contents where conca=?",
    [req.params.content],
    (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        res.send(results);
        // res.render("movie", { datalist: results });
      }
    }
  );
});

const joinquery = 'left outer join contents on location.connum=contents.connum';
router.get(`/bookmarks`, (req, res) => {
  //req query
  dbconn.query(
    `select contit, location.connum, locnum, locnam, potolin from location ${joinquery} where locnum in (${req.query.locnum})`,
    (err, results) => {
      if (err) {
        // where locnum()
        console.log("db select error" + err);
      } else {
        res.send(results);
      }
    }
  );
});

router.get(`/locdata/:connum`, (req, res) => {
  // let { conca, connum } = req.params;
  dbconn.query(
    "select * from location where connum=?",
    [parseInt(req.params.connum)],
    (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        res.send(results);
      }
    }
  );
});

router.get(`/locdetail/:locnum`, (req, res) => {
  let { connum, locnum } = req.params;
  dbconn.query(
    "select * from location where locnum=?",
    [parseInt(locnum)],
    (err, results) => {
      if (err) {
        console.log("db select error" + err);
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = router;
