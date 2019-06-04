import $ from 'jquery';
// import moviesData from '../../helpers/data/moviesData';

const changeMovieStarColor = (e) => {
  const currentStarId = e.target.id;
  const numOfStar = currentStarId.split('.')[0];
  const onlyNumOfStar = numOfStar.split('_')[1];
  const getClassName = document.getElementById(currentStarId).classList[0];
  if (getClassName === 'star') {
    document.getElementById(currentStarId).classList.replace('star', 'gray');
  } else {
    document.getElementById(currentStarId).classList.replace('gray', 'star');
  }
  // const getSecondClassName = document.getElementById(currentStarId).classList[1];
  const test = document.getElementsByClassName('gray');
  for (let i = 0; i < test.length; i += 1) {
    if (test[i].id === currentStarId && onlyNumOfStar === '4') {
      console.error(test[i].id, '....and num is....', onlyNumOfStar);
      console.error('thisssssss', test[i]);
      document.getElementById(`star_5.${currentStarId}`).classList.add('gray');
    }
  }
};


const starsEvent = () => {
  $(document).on('click', '.star', changeMovieStarColor);
  $(document).on('click', '.gray', changeMovieStarColor);
};

export default { starsEvent };
