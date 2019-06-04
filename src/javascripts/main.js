import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import navEvents from './components/myNavBar/myNavBar';
import movies from './components/movies/movies';
import btnEvent from './components/movies/newMovies';
import wlistEvent from './components/movies/moviewatchlist';
import starsEvent from './components/movies/movieStars';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  navEvents.navBarEvents();
  auth.authStringBuilder();
  movies.initMoviesData();
  btnEvent.addEvent();
  wlistEvent.watchListEvent();
  starsEvent.starsEvent();
};

init();
