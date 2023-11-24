const {
  Sequelize,
  DataTypes,
} = require('sequelize');

const sequelize = new Sequelize('movie_management', 'root', 'oltdev123#', {
  host: 'localhost',
  dialect: 'mysql', // Specify the dialect here
});

const Movie = sequelize.define('Movie', {
  movie_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  runtime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'movie_details',
  timestamps: false,
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Movie model synchronized with the database.');
  })
  .catch((error) => {
    console.error('Error synchronizing Movie model:', error);
  });

module.exports = {
  Movie,
  sequelize,
};
