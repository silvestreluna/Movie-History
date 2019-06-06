import $ from 'jquery';
import moviesData from '../../helpers/data/moviesData';
import movies from './movies';

const editStars = (e) => {
  const currentStarId = e.target.id;
  const numOfStar = currentStarId.split('.')[0];
  const onlyNumOfStar = numOfStar.split('_')[1];
  const onlyId = currentStarId.split('.')[1];
  const newStarValue = {
    stars: onlyNumOfStar,
  };
  moviesData.editStars(onlyId, newStarValue)
    .then(() => {
      movies.initMoviesData();
    })
    .catch(err => console.error('Star did not update', err));
};

const starsEvent = () => {
  $(document).on('click', '.gray', editStars);
  $(document).on('click', '.star', editStars);
};

export default { starsEvent };
