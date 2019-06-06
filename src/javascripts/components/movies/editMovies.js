import $ from 'jquery';

const editMovies = (e) => {
  document.getElementById('all-movies').classList.add('hide');
  document.getElementById('movieFormEditing').classList.remove('hide');
  const currentId = e.target.closest('.each-card').id;
  const onlyCardId = currentId.split('.')[1];
  console.error(onlyCardId);
};

const updateMovieButton = () => {
  document.getElementById('all-movies').classList.remove('hide');
  document.getElementById('movieFormEditing').classList.add('hide');
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
