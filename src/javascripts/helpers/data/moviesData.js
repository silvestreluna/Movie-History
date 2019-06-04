import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMoviesData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((results) => {
      const movieResults = results.data;
      const movies = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        movies.push(movieResults[movieId]);
      });
      resolve(movies);
    })
    .catch(err => reject(err));
});

const addNewMovie = newMovieObj => axios.post(`${firebaseUrl}/movies.json`, newMovieObj);
const editMovie = (movieId, updatedMovie) => axios.patch(`${firebaseUrl}/movies/${movieId}.json`, updatedMovie);


export default { getMoviesData, addNewMovie, editMovie };
