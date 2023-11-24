const express = require('express');

const router = express.Router();
const controller = require('../api/controller/controller');

// '/' Route
router.get('/', controller.loadIndexPage);

// // Add movie Route
router.get('/add-movie', controller.loadAddMoviePage);
router.post('/add-movie', controller.addMovie);

// // delete record
// router.get('/delete-row', controller.deleteMovie);

// // populate form
router.get('/edit', controller.loadDetailsToEdit);

// // submit edited details
 router.post('/edit-movie-details', controller.updateMovie);

// // view details
// router.get('/details', controller.retrieveMovieDetails);

// // add review
// router.post('/add-review', controller.addReview);

// // delete review
// router.get('/delete-review', controller.deleteReview);

module.exports = router;