const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

 // GET with sql commands sent to DB to retrieve
 // data from table MOVIES
router.get('/', (req, res) => {
  // Add query to get all genres
  const sqlText = `SELECT * FROM movies;`;
  pool.query(sqlText)
  .then((result) => {
    res.send(result.rows) 
    console.log(result.rows)
  })
  .catch((error) => {
    console.log('Error making database query', error);
    res.sendStatus(500)
  })
});


// GET to retrieve targeted ID from junction table from DB
router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log('Id of chosen movie', id);
  // Add query to get all genres
  let sqlText = `
    SELECT title, name, description, poster, genre_id, genres.name FROM movies_genres
    JOIN movies ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movies.id = $1;`;
  pool.query(sqlText, [id])
  .then((result) => {
    console.log(result.rows[0])
    res.send(result.rows[0]);
  }).catch((error) => {
    console.log('Error GET genre of chosen movie', error)
    res.sendStatus(500);
  });
})



// --------------------------------------------------------------------- POST ALREADY DONE
router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Depending on how you make your junction table, this insert COULD change.
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;