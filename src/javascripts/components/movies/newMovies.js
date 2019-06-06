import $ from 'jquery';
// import firebase from 'firebase/app';
import 'firebase/auth';
import movieData from '../../helpers/data/moviesData';
import movies from './movies';

const showNewMovieForm = () => {
  document.getElementById('createNewMovie').classList.remove('hide');
  document.getElementById('addNewMovieButton').classList.add('hide');
};

const closeNewMovieWindow = () => {
  document.getElementById('createNewMovie').classList.add('hide');
  document.getElementById('addNewMovieButton').classList.remove('hide');
};

const addNewMovie = (e) => {
  e.preventDefault();
  const titleValue = document.getElementById('title');
  const movieRating = document.getElementById('rating');
  const movieURL = document.getElementById('imgUrl');
  const movieGenre = document.getElementById('genre');
  const movieStar = document.getElementById('star');

  if (titleValue.value === '' || movieRating.value === '' || movieURL.value === '' || movieGenre.value === '' || movieStar.value === '') {
    console.error('fill in form');
  } else {
    const newMovie = {
      title: titleValue.value,
      MovieRating: movieRating.value.toUpperCase(),
      imgUrl: movieURL.value,
      genre: movieGenre.value,
      stars: movieStar.value,
      // id: firebase.auth().currentUser.uid // I don't need this.
    };

    document.getElementById('createNewMovie').classList.add('hide');
    movieData.addNewMovie(newMovie)
      .then(() => {
        movies.initMoviesData();
        titleValue.value = '';
        movieRating.value = '';
        movieURL.value = '';
        movieGenre.value = '';
        movieStar.value = '';
      })
      .catch(err => console.error('No new Movie', err));
  }
};

const addEvent = () => {
  $(document).on('click', '#addNewMovieButton', showNewMovieForm);
  $(document).on('click', '#createMovie', addNewMovie);
  $(document).on('click', '#cancel-new-movie', closeNewMovieWindow);
};

export default { addEvent };
