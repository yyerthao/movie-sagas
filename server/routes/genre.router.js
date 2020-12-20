const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/details', (req, res) => {
      movieId = req.query.id;
      console.log('movie id is', movieId);
      // Add query to get all genres
      let queryText = `
      SELECT title, name FROM movies_genres
      JOIN movies ON movies.id = movies_genres.movies_id
      JOIN genres ON genres.id = movies_genres.genres_id
      WHERE movies.id = $1;`;
    pool.query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error GET /details', error)
      res.sendStatus(500);
    });
})
  
module.exports = router;