import $ from 'jquery';
import movieData from '../../helpers/data/moviesData';
import reprintMovies from './movies';

const deleteMovie = (e) => {
  const currentId = e.target.closest('.each-card').id;
  const onlyCardId = currentId.split('.')[1];
  console.error(onlyCardId);
  movieData.deleteMovie(onlyCardId)
    .then(() => {
      reprintMovies.initMoviesData();
    })
    .catch(err => console.error('No movie to delete', err));
};

const deleteEvent = () => {
  $(document).on('click', '#trashMovie', deleteMovie);
};

export default { deleteEvent };
