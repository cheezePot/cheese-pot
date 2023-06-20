const express = require("express");
const router = express.Router();
const dbconn = require("../config");
require("dotenv").config();

router.get('/list/:locnum', (req, res) => {
  const locnum = req.params.locnum;
  const query = `
    SELECT b.*, DATE_FORMAT(b.post_date, '%Y-%m-%d') AS formatted_date, c.content AS comment_content, c.nickname AS comment_nickname
    FROM board b
    LEFT JOIN comments c ON b.locnum = c.post_id
    WHERE locnum=${locnum}
  `;
  dbconn.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.send('Error occurred while fetching data.');
    } else {
      const rows = [];
      const postIdSet = new Set();

      // 게시물과 댓글 데이터를 가공하여 rows 배열에 저장
      results.forEach((row) => {
        const postId = row.locnum;

        // 게시물이 이미 rows 배열에 추가되었는지 확인
        if (!postIdSet.has(postId)) {
          rows.push({
            locnum: row.locnum,
            title: row.title,
            content: row.content,
            nickname: row.nickname,
            formatted_date: row.formatted_date,
            comments: [] // 댓글을 담을 빈 배열
          });
          postIdSet.add(postId);
        }

        // 댓글 데이터를 해당 게시물의 comments 배열에 추가
        if (row.comment_content) {
          const comment = {
            content: row.comment_content,
            nickname: row.comment_nickname
          };
          const postIndex = rows.findIndex((post) => post.locnum === postId);
          rows[postIndex].comments.push(comment);
        }
      });
      res.send(rows);
      // res.render('list.ejs', { rows: rows });
    }
  });
});
  
  
router.get('/write', (req, res) => {
res.sendFile(__dirname + '/write.html');
});

router.get('/location/:locnum', (req, res) => {
const locnum = req.params.locnum;
const sql = 'SELECT locnum, locnam FROM location WHERE locnum = ?';
// const params = [locnum];

dbconn.query(sql, params, (err, results) => {
    if (err) {
    console.log(err);
    res.send('Error occurred while retrieving data.');
    } else {
    console.log('데이터 조회 완료');
    res.send(results);
    // res.render('location', { locations: results });
    }
});
});




// random nickname
function generateRandomNickname() {
const nickname = ['심심한 생쥐', '꿀꿀한 생쥐'];
const randomNicknameIdx = Math.floor(Math.random() * nickname.length);
const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999

const randomNickname = nickname[randomNicknameIdx];
return randomNickname + randomNum;
}

router.post('/post/:locnum', async (req, res) => {
  // 입력한 값 가져오기
  let locnum = req.params.locnum;
  let title = req.body.title;
  let content = req.body.content;

  let nickname = generateRandomNickname();
  let post_date = new Date();

  // 쿼리 작성
  let sql = "INSERT INTO board (locnum, title, content, nickname, post_date) VALUES (?, ?, ?, ?, ?)";
  let params = [locnum, title, content, nickname, post_date];

  // 쿼리 실행
  await dbconn.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
      res.send('Error occurred while adding data.');
    } else {
      console.log('데이터 추가 완료');
      res.send(results);
    }
  });
});

router.post('/delete/:locnum', (req, res) => {
const locnum = req.params.locnum;

// Query to delete the post from the 'board' table
const sql = 'DELETE FROM board WHERE locnum = ?';
const params = [locnum];

dbconn.query(sql, params, (err, result) => {
    if (err) {
    console.log(err);
    res.send('Error occurred while deleting data.');
    } else {
    console.log('데이터삭제');
    res.redirect('/list');
    }
});
});

router.post('/comments/:id', (req, res) => {
const postId = req.params.locnum;
const commentContent = req.body.comment;
const commentNickname = generateRandomNickname();
        // 댓글 추가
        const insertSql = "INSERT INTO comments (locnum, content, nickname) VALUES (?, ?, ?)";
        const insertParams = [postId, commentContent, commentNickname];

        dbconn.query(insertSql, insertParams, (err, result) => {
        if (err) {
            console.log(err);
            res.send('Error occurred while adding comment.');
        } else {
            console.log('댓글 추가 완료');
            res.redirect('/list');
        }
        });
    }
);

module.exports=router;
