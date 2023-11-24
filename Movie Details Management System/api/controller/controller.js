const services = require('../services/services');

// Load root page
const loadIndexPage = async (req, res) => {
  try {
    const records = await services.retrieveAllRecords();

    res.render('index', {
      records,
    });
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Load page to add movie
const loadAddMoviePage = async (req, res) => {
  try {
    res.render('add-movie');
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Add new movie
const addMovie = async (req, res) => {
  try {
    await services.addMovie(req.body);
    res.redirect('/');
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Delete a Movie
const deleteMovie = async (req, res) => {
  try {
    const {
      movieId,
    } = req.query;
    if (!movieId) {
      throw new Error('Movie Does Not Exist!!')
    }
    await services.deleteMovie(movieId);
    res.redirect(`/?${movieId}`);
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Retrieve details to populate form
const loadDetailsToEdit = async (req, res) => {
  try {
    const {
      movieId,
    } = req.query;

    if (!movieId) {
      throw new Error('Record Not Found');
    } else {
      const record = await services.getDetailsToEdit(movieId);
      if (!record || !Array.isArray(record) || typeof record === 'undefined' || record.length < 1) {
        throw new Error('Record Not Found');
      }
      const [data] = record;
      const {
        dataValues,
      } = data;

      if (typeof dataValues === 'undefined') {
        throw new Error('Record Not Found');
      }

      res.render('edit', {
        record: dataValues,
        movieId,
      });
    }
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Update the movie details
const updateMovie = async (req, res) => {
  try {
    const formData = req.body;
    const movieID = req.query.movieId;
    await services.updateMovie(formData, movieID);
    res.redirect('/');
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Retrieve movie details and reviews for details page
const getMovieDetails = async (req, res) => {
  try {
    const {
      movieId,
    } = req.query;
    const {
      movieDetails,
      reviews,
    } = await services.getMovieDetails(movieId);
    res.render('details', {
      movieDetails,
      reviews,
    });
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Add review
const addReview = async (req, res) => {
  try {
    const {
      movieId,
    } = req.query;
    const {
      review,
    } = req.body;
    await services.addReviewToMovie(movieId, review);
    res.redirect(`/details?movieId=${movieId}`);
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

// Delete Review
const deleteReview = async (req, res) => {
  try {
    const {
      movieId,
      reviewId,
    } = req.query;
    await services.deleteReview(reviewId);
    res.redirect(`/details?movieId=${movieId}`);
  } catch (error) {
    res.render('error', {
      error,
    });
  }
};

module.exports = {
  loadIndexPage,
  addMovie,
  deleteMovie,
  loadDetailsToEdit,
  updateMovie,
  getMovieDetails,
  addReview,
  deleteReview,
  loadAddMoviePage,
};