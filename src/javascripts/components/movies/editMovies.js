import $ from 'jquery';

import util from '../../helpers/util';
import moviesData from '../../helpers/data/moviesData';
import movies from './movies';

const editMoviesForm = (e) => {
  document.getElementById('all-movies').classList.add('hide');
  document.getElementById('createNewMovie').classList.add('hide');
  document.getElementById('movieFormEditing').classList.remove('hide');

  const currentId = e.target.closest('.each-card').id;
  const onlyCardId = currentId.split('.')[1];

  const title = document.getElementById(`movie-title.${onlyCardId}`).innerText;
  const getImgURL = document.getElementById(`movieImg.${onlyCardId}`).src;
  const genre = document.getElementById(`genre.${onlyCardId}`).innerText;
  const movieRate = document.getElementById(`rating.${onlyCardId}`).innerText;

  const editItemString = `
  <h6 class="movie-page-name mb-5">Updating ${title}...</h6>
  <div>
    <img class="movie-image movieImg" src=${getImgURL} />
  </div>
  <form>
  <div class="form-group">
    <label for="formName"></label>
    <input type="text" class="form-control" id="edit-title" value="${title}" placeholder="Title">
    <input type="text" class="form-control" id="edit-rating" value="${movieRate}" placeholder="Ex PG-13">
    <input type="text" class="form-control" id="edit-imgURL" value="${getImgURL}" placeholder="Enter movie image URL">
    <input type="text" class="form-control" id="edit-genre" value="${genre}" placeholder="Enter Movie Genre">
  </div>
  <button id="updateBtn.${onlyCardId}" type="button" class="btn btn-primary updateMovieInfo">Update Movie</button>
  <button id="cancelEditing" type="button" class="btn btn-danger">Cancel</button>
</form>
  `;
  util.printToDom('movieFormEditing', editItemString);
};


const updateMovieButton = (e) => {
  const currentId = e.target.id;
  const onlyCurrentId = currentId.split('.')[1];

  document.getElementById('all-movies').classList.remove('hide');
  document.getElementById('addNewMovieButton').classList.remove('hide');
  document.getElementById('createNewMovie').classList.add('hide');
  document.getElementById('movieFormEditing').classList.add('hide');

  const getTitleValue = document.getElementById('edit-title').value;
  const getMovieRateValue = document.getElementById('edit-rating').value;
  const getImgURLValue = document.getElementById('edit-imgURL').value;
  const getMovieGenreValue = document.getElementById('edit-genre').value;

  const newEditMovieObj = {
    title: getTitleValue,
    MovieRating: getMovieRateValue,
    imgUrl: getImgURLValue,
    genre: getMovieGenreValue,
  };
  moviesData.editMovie(onlyCurrentId, newEditMovieObj)
    .then(() => {
      movies.initMoviesData();
    })
    .catch(err => console.error('No edit', err));
};

const cancelBtn = () => {
  document.getElementById('all-movies').classList.remove('hide');
  document.getElementById('addNewMovieButton').classList.remove('hide');
  document.getElementById('createNewMovie').classList.add('hide');
  document.getElementById('movieFormEditing').classList.add('hide');
};

const editMoviesEvent = () => {
  $(document).on('click', '.editMovie', editMoviesForm);
  $(document).on('click', '.updateMovieInfo', updateMovieButton);
  $(document).on('click', '#cancelEditing', cancelBtn);
};

export default { editMoviesEvent };
