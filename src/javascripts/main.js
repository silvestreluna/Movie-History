import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import navEvents from './components/myNavBar/myNavBar';
import movies from './components/movies/movies';
import btnEvent from './components/movies/newMovies';
import wlistEvent from './components/movies/moviewatchlist';
import starsEvent from './components/movies/movieStars';
import editEvent from './components/movies/editMovies';
import delEvent from './components/movies/deleteMovies';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authStringBuilder();
  authData.checkLoginStatus();
  movies.initMoviesData();
  navEvents.navBarEvents();
  btnEvent.addEvent();
  wlistEvent.watchListEvent();
  starsEvent.starsEvent();
  editEvent.editMoviesEvent();
  delEvent.deleteEvent();
};

init();
