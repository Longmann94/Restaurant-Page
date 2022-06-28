
export default function navbar() {
  const navbar = document.querySelector('.nav-bar');
  const divHome = document.createElement('div');
  const divMenu = document.createElement('div');
  const divContact = document.createElement('div');

  divHome.classList.add('nav-bar-button');
  divMenu.classList.add('nav-bar-button');
  divContact.classList.add('nav-bar-button');

  divHome.id = ('home');
  divMenu.id = ('menu');
  divContact.id = ('contact');


  divHome.textContent = 'Home';
  divMenu.textContent = 'Menu';
  divContact.textContent = 'Contact';

  navbar.appendChild(divHome);
  navbar.appendChild(divMenu);
  navbar.appendChild(divContact);
}
