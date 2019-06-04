import $ from 'jquery';

const addMovieToWatchList = (e) => {
  const currentId = e.target.id;
  const btnDiv = document.getElementById(`${currentId}.btn`).id;
  const pTagText = document.getElementById(currentId).innerText;
  console.error(btnDiv);
  if (pTagText === '+ Add to Watchlist') {
    document.getElementById(currentId).innerHTML = 'Added to Watchlist';
    document.getElementById(`${currentId}.btn`).classList.replace('notWatchListBtn', 'addedWatchListBtn');
  } else {
    document.getElementById(currentId).innerHTML = '+ Add to Watchlist';
    document.getElementById(`${currentId}.btn`).classList.replace('addedWatchListBtn', 'notWatchListBtn');
  }
};


const watchListEvent = () => {
  $(document).on('click', '.notWatchListBtn', addMovieToWatchList);
  $(document).on('click', '.addedWatchListBtn', addMovieToWatchList);
};


export default { watchListEvent };
