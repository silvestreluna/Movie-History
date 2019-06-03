import $ from 'jquery';

const addMovieToWatchList = (e) => {
  const watchListBtn = e.target.id;
  console.error('wl.....', watchListBtn, '....divId');
  if (watchListBtn.checked === true) {
    document.getElementById('addToWatch').classList.add('d-none');
    document.getElementById('addedWLBtn').classList.remove('d-none');
  } else {
    document.getElementById('addToWatch').classList.remove('d-none');
    document.getElementById('addedWLBtn').classList.add('d-none');
  }
};


const watchListEvent = () => {
  $(document).on('click', '.w-list-text', addMovieToWatchList);
  $(document).on('click', '.added-to-watchList', addMovieToWatchList);
};


export default { watchListEvent };
