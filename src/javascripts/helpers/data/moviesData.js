import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMoviesData = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((results) => {
      const movieResults = results.data;
      const newMoviesValues = Object.values(movieResults);
      resolve(newMoviesValues);
    })
    .catch(err => reject(err));
});

export default { getMoviesData };
