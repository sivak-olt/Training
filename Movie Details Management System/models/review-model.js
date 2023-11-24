// // models/Review.js
// const {
//   DataTypes,
// } = require('sequelize');
// const sequelize = require('../config/db');

// const Review = sequelize.define('Review', {
//   review_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   movie_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'movies',
//       key: 'movie_id',
//     },
//     index: true,
//   },
//   review: {
//     type: DataTypes.STRING(200),
//     allowNull: false,
//   },
// }, {
//   tableName: 'movie_reviews',
//   timestamps: false,
// });

// // Sync the model with the database
// sequelize.sync();

// module.exports = Review;

