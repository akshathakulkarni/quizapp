const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    author_id = req.session.user_id;
    console.log('author id = ', author_id);
    db.query(`SELECT * FROM quizzes WHERE author_id = $1`, [author_id])
      .then(data => {
        const myQuiz = data.rows;
        console.log(myQuiz);
        res.json({ myQuiz });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ err: err.message });
      })
  })
  return router;
}