const {
  title,
} = require('process');
const movie = require('../../models/movie-model');
const review = require('../../models/review-model');

// Add new movie record - input:user input
async function retrieveAllRecords() {
  return new Promise((resolve, reject) => {
    movie.Movie.findAll()
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function addMovie(input) {
  return new Promise((resolve, reject) => {
    movie.Movie.create({
      title: input.title,
      description: input.description,
      director: input.director,
      release_date: input.releaseDate,
      language: input.language,
      genre: input.genre,
      runtime: input.runtime,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Delete a record by movie ID
async function deleteMovie(movieId) {
  return db.deleteRecord(movieId);
}

// Retrieve the details of the selected movie for the form
async function getDetailsToEdit(movieId) {
  return new Promise((resolve, reject) => {
    movie.Movie.findAll({
      where: {
        movie_id: movieId,
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// update movie details with user input and movie ID
async function updateMovie(input, movieId) {
  return new Promise((resolve, reject) => {
    movie.Movie.update(
      {
        title: input.title,
        description: input.description,
        director: input.director,
        release_date: input.releaseDate,
        language: input.language,
        genre: input.genre,
        runtime: input.runtime,
      },
      {
        where: {
          movie_id: movieId,
        },
      },
    )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Get all details of the movie - user input and reviews
async function getMovieDetails(movieId) {
  return db.fetchSelectedMovie(movieId);
}

// Add a review
async function addReviewToMovie(movieId, review) {
  return db.addReview(movieId, review);
}
// delete a review
async function deleteReview(reviewId) {
  return db.deleteReview(reviewId);
}

// export modules
module.exports = {
  addMovie,
  retrieveAllRecords,
  deleteMovie,
  getDetailsToEdit,
  updateMovie,
  getMovieDetails,
  addReviewToMovie,
  deleteReview,
};
