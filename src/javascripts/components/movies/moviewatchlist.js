import $ from 'jquery';
import moviesData from '../../helpers/data/moviesData';

const addMovieToWatchList = (e) => {
  const currentId = e.target.id;
  const pTagText = document.getElementById(currentId).innerText;
  if (pTagText === '+ Add to Watchlist') {
    document.getElementById(currentId).innerHTML = 'Added to Watchlist';
    document.getElementById(`${currentId}.btn`).classList.replace('notWatchListBtn', 'addedWatchListBtn');
  } else {
    document.getElementById(currentId).innerHTML = '+ Add to Watchlist';
    document.getElementById(`${currentId}.btn`).classList.replace('addedWatchListBtn', 'notWatchListBtn');
  }
};

const editWatchList = (e) => {
  const currentId = e.target.id;

  const updateWList = {
    isWatched: false,
  };

  const updateWlistFalse = {
    isWatched: true,
  };

  const pTagText = document.getElementById(currentId).innerText;

  if (pTagText === '+ Add to Watchlist') {
    moviesData.editMovie(currentId, updateWList);
  } else if (pTagText === 'Added to Watchlist') {
    moviesData.editMovie(currentId, updateWlistFalse);
  }
};

const watchListEvent = () => {
  $(document).on('click', '.notWatchListBtn', addMovieToWatchList);
  $(document).on('click', '.addedWatchListBtn', addMovieToWatchList);
  $(document).on('click', '.notWatchListBtn', editWatchList);
  $(document).on('click', '.addedWatchListBtn', editWatchList);
};


export default { watchListEvent };
