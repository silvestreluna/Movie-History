import util from '../../helpers/util';
import movies from '../../helpers/data/moviesData';

const printAllMovie = (array) => {
  let domString = '<p class="movie-page-name mb-5">Movies</p>';
  domString += '<button id="addNewMovieButton" type="button" class="btn btn-primary mb-5" data-toggle="button" aria-pressed="false" autocomplete="off"> + Add a New Movie</button>';
  domString += '<div class="cards-container">';
  array.forEach((movie) => {
    domString += `<div id=card.${movie.id} class="each-card">`;
    domString += `<img id="movieImg" class="movie-image" src=${movie.imgUrl} />`;
    domString += `<p id="movie-title">${movie.title}</p>`;
    domString += '<div class="gen-N-rating">';
    domString += '<span>';
    domString += `<div class="rating">${movie.MovieRating}</div>`;
    domString += `  ${movie.genre}`;
    domString += '</span>';
    const currentIsWatched = `${movie.isWatched}`;
    console.error(currentIsWatched);
    if (currentIsWatched === 'false') {
      domString += `<div id=${movie.id}.btn class="notWatchListBtn">`;
      domString += `<p  id="${movie.id}" class="notWatchListText">+ Add to Watchlist</p>`;
      domString += '</div>';
    } else if (currentIsWatched === 'true') {
      domString += `<div id=${movie.id}.btn class="addedWatchListBtn">`;
      domString += `<p  id="${movie.id}" class="addedToWatchList">Added to Watchlist</p>`;
      domString += '</div>';
    }
    domString += '<div class="movie-stars">';
    domString += '<p>';
    const stars = `${movie.stars}`;
    if (stars <= 1) {
      domString += '<i id="star1" class="star"></i>';
      domString += '<i id="star2" class="gray"></i>';
      domString += '<i id="star3" class="gray"></i>';
      domString += '<i id="star4" class="gray"></i>';
      domString += '<i id="star5" class="gray"></i>';
    } else if (stars <= 2) {
      domString += '<i id="star1" class="star"></i>';
      domString += '<i id="star2" class="star"></i>';
      domString += '<i id="star3" class="gray"></i>';
      domString += '<i id="star4" class="gray"></i>';
      domString += '<i id="star5" class="gray"></i>';
    } else if (stars <= 3) {
      domString += '<i id="star1" class="star"></i>';
      domString += '<i id="star2" class="star"></i>';
      domString += '<i id="star3" class="star"></i>';
      domString += '<i id="star4" class="gray"></i>';
      domString += '<i id="star5" class="gray"></i>';
    } else if (stars <= 4) {
      domString += '<i id="star1" class="star"></i>';
      domString += '<i id="star2" class="star"></i>';
      domString += '<i id="star3" class="star"></i>';
      domString += '<i id="star4" class="star"></i>';
      domString += '<i id="star5" class="gray"></i>';
    } else if (stars >= 5) {
      domString += '<i id="star1" class="star"></i>';
      domString += '<i id="star2" class="star"></i>';
      domString += '<i id="star3" class="star"></i>';
      domString += '<i id="star4" class="star"></i>';
      domString += '<i id="star5" class="star"></i>';
    }
    domString += '</p>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('all-movies', domString);
};

const initMoviesData = () => {
  movies.getMoviesData()
    .then((movie) => {
      console.error(movie);
      printAllMovie(movie);
    })
    .catch(err => console.error('could not get movies', err));
};

export default { initMoviesData };
