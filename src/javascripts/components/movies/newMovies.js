import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import movieData from '../../helpers/data/moviesData';


const showNewMovieForm = () => {
  document.getElementById('createNewMovie').classList.remove('hide');
};

const addNewMovie = () => {
  const newMovie = {
    title: document.getElementById('title').value,
    MovieRating: document.getElementById('rating').value,
    imgUrl: document.getElementById('imgUrl').value,
    genre: document.getElementById('genre').value,
    stars: document.getElementById('star').value,
    id: firebase.auth().currentUser.uid,
  };
  movieData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('title').value = '';
      document.getElementById('rating').value = '';
      document.getElementById('imgUrl').value = '';
      document.getElementById('genre').value = '';
      document.getElementById('star').value = '';
    })
    .catch(err => console.error('No new Movie', err));
};

const addEvent = () => {
  $(document).on('click', '#addNewMovieButton', showNewMovieForm);
  $(document).on('click', '#createMovie', addNewMovie);
};

export default { addEvent };
