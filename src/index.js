import './style.css';
import initialLoad from './initial.js';

function componenet() {
  const element = document.querySelector('#content');

  initialLoad();

  return element;
}

document.body.appendChild(componenet());
