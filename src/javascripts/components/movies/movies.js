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

    if (currentIsWatched === 'false' || currentIsWatched === 'undefined') {
      domString += `<div id=${movie.id}.btn class="notWatchListBtn">`;
      domString += `<p  id="${movie.id}" class="notWatchListText">+ Add to Watchlist</p>`;
      domString += '</div>';
    } else if (currentIsWatched === 'true') {
      domString += `<div id=${movie.id}.btn class="addedWatchListBtn">`;
      domString += `<p  id="${movie.id}" class="addedToWatchList">Added to Watchlist</p>`;
      domString += '</div>';
    }
    domString += '<div class="movie-stars">';
    domString += '<p class="pForStars">';
    const stars = `${movie.stars}`;
    if (stars <= 1) {
      domString += `<i id="star_1.${movie.id}" class="star one"></i>`;
      domString += `<i id="star_2.${movie.id}" class="gray two"></i>`;
      domString += `<i id="star_3.${movie.id}" class="gray three"></i>`;
      domString += `<i id="star_4.${movie.id}" class="gray four"></i>`;
      domString += `<i id="star_5.${movie.id}" class="gray five"></i>`;
    } else if (stars <= 2) {
      domString += `<i id="star_1.${movie.id}" class="star one"></i>`;
      domString += `<i id="star_2.${movie.id}" class="star two"></i>`;
      domString += `<i id="star_3.${movie.id}" class="gray three"></i>`;
      domString += `<i id="star_4.${movie.id}" class="gray four"></i>`;
      domString += `<i id="star_5.${movie.id}" class="gray five"></i>`;
    } else if (stars <= 3) {
      domString += `<i id="star_1.${movie.id}" class="star one"></i>`;
      domString += `<i id="star_2.${movie.id}" class="star two"></i>`;
      domString += `<i id="star_3.${movie.id}" class="star three"></i>`;
      domString += `<i id="star_4.${movie.id}" class="gray four"></i>`;
      domString += `<i id="star_5.${movie.id}" class="gray five"></i>`;
    } else if (stars <= 4) {
      domString += `<i id="star_1.${movie.id}" class="star one"></i>`;
      domString += `<i id="star_2.${movie.id}" class="star two"></i>`;
      domString += `<i id="star_3.${movie.id}" class="star three"></i>`;
      domString += `<i id="star_4.${movie.id}" class="star four"></i>`;
      domString += `<i id="star_5.${movie.id}" class="gray five"></i>`;
    } else if (stars >= 5) {
      domString += `<i id="star_1.${movie.id}" class="star one"></i>`;
      domString += `<i id="star_2.${movie.id}" class="star two"></i>`;
      domString += `<i id="star_3.${movie.id}" class="star three"></i>`;
      domString += `<i id="star_4.${movie.id}" class="star four"></i>`;
      domString += `<i id="star_5.${movie.id}" class="star five"></i>`;
    }
    domString += '</p>';
    domString += '</div>';
    domString += '<div class="mt-0 mb-2">';
    domString += '<img class="editMovie mt-0 mr-1 mb-3" src="https://cdn4.iconfinder.com/data/icons/design-4/100/14-512.png" />';
    domString += '<img id="trashMovie" class="mt-0 ml-0 mb-3" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-256.png"/>';
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
      printAllMovie(movie);
    })
    .catch(err => console.error('could not get movies', err));
};

export default { initMoviesData };
