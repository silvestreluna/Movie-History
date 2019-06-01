import util from '../../helpers/util';

const newFormBuilder = () => {
  let domstring = '<form>';
  domstring += '<div class="form-group">';
  domstring += '<label for="formGroupExampleInput">Enter Movie Information: </label>';
  domstring += '<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title">';
  domstring += '<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ex PG-13">';
  domstring += '<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter movie image URL">';
  domstring += '<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Movie Genre">';
  domstring += '<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Rate Movie">';
  domstring += '</div>';
  domstring += '  <button id="createMovie" type="submit" class="btn btn-primary">Add Movie</button>';
  domstring += '</form>';
  util.printToDom('createNewMovie', domstring);
};


const addEvent = () => {
  const btn = document.getElementById('add-Movie-btn');
  btn.addEventListener('click', newFormBuilder);
};

export default { addEvent };
