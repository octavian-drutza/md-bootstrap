
/* eslint-disable no-debugger */
// jQuery
import 'jquery';

// PopperJS
import 'popper.js';

// Bootstrap 4
import 'bootstrap';

// Material Design Bootstrap
// import '../vendors/mdb/js/mdb';
// import 'mdbootstrap';

// Fontawesome 5
import './fa';

import './components/header/header';

import './components/footer/footer';


function handleReadMoreState() {
  const state = sessionStorage.getItem('expanded');
  if (!state) {
    document.getElementById('dots').classList.toggle('hide');
    document.getElementById('more').classList.toggle('hide');
  }
  return state;
}

document.querySelector('.animation-btn').addEventListener('click', () => {
  if (handleReadMoreState()) {
    sessionStorage.removeItem('expanded');
    document.getElementById('more').classList.toggle('hide');
  } else {
    sessionStorage.setItem('expanded', 'true');
  }
});
