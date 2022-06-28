
function initialLoad() {
  const element = document.querySelector('#content');
  const divTitle = document.createElement("div");
  const divNavBar = document.createElement("div");
  const divContent = document.createElement("div");


  divTitle.classList.add("title");
  divTitle.textContent = "Foods R Us";

  divNavBar.classList.add("nav-bar");

  divContent.classList.add("content");

  element.appendChild(divTitle);
  element.appendChild(divNavBar);
  element.appendChild(divContent);
  return element;
}

function contentHome () {
  const content = document.querySelector('.content');

  const divHome = document.createElement("div");
  divHome.classList.add("home-content");

  const divLogo = document.createElement('div');
  divLogo.classList.add("logo");
  divLogo.textContent = "this is the logo of the restaurant";

  const divAbout = document.createElement('div');
  divAbout.classList.add("about-restaurant");
  divAbout.textContent = "this is info of the restaurant and how our food is super good.";


  divHome.appendChild(divLogo);
  divHome.appendChild(divAbout);
  content.appendChild(divHome);
}


export {initialLoad, contentHome};
