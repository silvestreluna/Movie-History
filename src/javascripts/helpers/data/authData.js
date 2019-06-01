import firebase from 'firebase/app';
import 'firebase/auth';

const authNavbar = document.getElementById('navbar-button-auth');
const googleBtn = document.getElementById('movie-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');
const movies = document.getElementById('all-movies');
const navMovies = document.getElementById('navbar-button-movies');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authNavbar.classList.add('hide');
      googleBtn.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      navMovies.classList.remove('hide');
      movies.classList.remove('hide');
    } else {
      authNavbar.classList.remove('hide');
      googleBtn.classList.remove('hide');
      logoutNavbar.classList.add('hide');
      navMovies.classList.add('hide');
      movies.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
