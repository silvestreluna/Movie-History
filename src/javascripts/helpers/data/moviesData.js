import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMoviesData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((results) => {
      const movieResults = results.data;
      const movies = [];
      if (movieResults !== null) {
        Object.keys(movieResults).forEach((movieId) => {
          movieResults[movieId].id = movieId;
          movies.push(movieResults[movieId]);
        });
      }
      resolve(movies);
    })
    .catch(err => reject(err));
});

const addNewMovie = newMovieObj => axios.post(`${firebaseUrl}/movies.json`, newMovieObj);

const deleteMovie = movieIdToDelete => axios.delete(`${firebaseUrl}/movies/${movieIdToDelete}.json`);

const editMovie = (movieId, updatedMovie) => axios.patch(`${firebaseUrl}/movies/${movieId}.json`, updatedMovie);

const editStars = (movieId, updatedStarValue) => axios.patch(`${firebaseUrl}/movies/${movieId}.json`, updatedStarValue);


export default {
  getMoviesData,
  addNewMovie,
  editMovie,
  editStars,
  deleteMovie,
};
