import util from '../../helpers/util';
import movies from '../../helpers/data/moviesData';


const printAllMovie = (array) => {
  let domString = '<p class="display-4">Movies</p>';
  domString += '<div class="cards-container">';
  array.forEach((movie) => {
    domString += '<div class="each-card">';
    domString += `<img class="movie-image" src=${movie.imgUrl}>`;
    domString += `<h3>${movie.title}</h3>`;
    domString += '<div class="gen-N-rating">';
    domString += '<span>';
    domString += `<div class="rating">${movie.MovieRating}</div>`;
    domString += `  ${movie.genre}`;
    domString += '</span>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('all-movies', domString);
};

const initMoviesData = () => {
  movies.getMoviesData()
    .then((movie) => {
      printAllMovie(movie);
      console.error('hello', movie);
    })
    .catch(err => console.error('could not get movies', err));
};

export default { initMoviesData };
