import util from '../../helpers/util';


const printAllMovie = () => {
  const domString = '<p class="display-4">Movies</p>';
  util.printToDom('all-movies', domString);
};

export default { printAllMovie };
