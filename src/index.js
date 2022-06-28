import './style.css';
import {initialLoad, contentHome} from './initial.js';
import contentContact from './contact.js';
import contentMenu from './menu.js';
import navbar from "./navbar.js";

const firstDiv = document.createElement('div');
firstDiv.classList.add('main-container');
firstDiv.id = 'content';
document.body.appendChild(firstDiv);

const element = document.querySelector('#content');


  initialLoad();
  contentHome();
  navbar();

  const navBar = document.querySelectorAll('.nav-bar-button');
  const content = document.querySelector('.content');


  function reloadContent(e){

    content.innerHTML = '';

    if(e.target.id == "home"){
      contentHome();
    }else if(e.target.id == "menu"){
       contentMenu();
    }else if(e.target.id == "contact"){
      contentContact();
    }
  }

  navBar.forEach(div => div.addEventListener('click', reloadContent));
