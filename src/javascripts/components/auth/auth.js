import firebase from 'firebase/app';
import 'firebase/auth';
import googleButton from './button.png';

import util from '../../helpers/util';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  const domString = `<img id="google-auth" src=${googleButton} />`;
  util.printToDom('movie-auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
  document.getElementById('navbar-button-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
