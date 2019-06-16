import $ from 'jquery';
import util from '../../helpers/util';

const editMovies = (e) => {
  document.getElementById('all-movies').classList.add('hide');
  document.getElementById('movieFormEditing').classList.remove('hide');
  const currentId = e.target.closest('.each-card').id;
  const onlyCardId = currentId.split('.')[1];
  console.error(onlyCardId);

  const editItemString = `

  <h3 class="movie-page-name mb-5">Updating Movie...</h3>
  <form>
  <div class="form-group">
    <label for="formName"></label>
    <input type="text" class="form-control" id="title" placeholder="Title">
    <input type="text" class="form-control" id="rating" placeholder="Ex PG-13">
    <input type="text" class="form-control" id="imgUrl" placeholder="Enter movie image URL">
    <input type="text" class="form-control" id="genre" placeholder="Enter Movie Genre">
    <input type="text" class="form-control" id="star" placeholder="Rate Movie">
  </div>
  <button id="updateMovieInfo" type="button" class="btn btn-primary">Update Movie</button>
  <button id="cancelEditing" type="button" class="btn btn-danger">Cancel</button>
</form>
  `;
  util.printToDom('movieFormEditing', editItemString);
};


const updateMovieButton = () => {
  document.getElementById('all-movies').classList.remove('hide');
  document.getElementById('movieFormEditing').classList.remove('hide');
};

const cancelBtn = () => {
  document.getElementById('all-movies').classList.remove('hide');
  document.getElementById('movieFormEditing').classList.add('hide');
};

const editMoviesEvent = () => {
  $(document).on('click', '.editMovie', editMovies);
  $(document).on('click', '#updateMovieInfo', updateMovieButton);
  $(document).on('click', '#cancelEditing', cancelBtn);
};

export default { editMoviesEvent };
