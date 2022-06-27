
export default function initialLoad() {
  const element = document.querySelector('#content');
  const divTitle = document.createElement("div");
  const divNavBar = document.createElement("div");
  const divContent = document.createElement("div");


  divTitle.classList.add("title");
  divTitle.textContent = "Foods R Us";

  divNavBar.classList.add("nav-bar");
  divNavBar.textContent = "this is the nav bar";

  divContent.classList.add("content");
  divContent.textContent = "this is the content";

  element.appendChild(divTitle);
  element.appendChild(divNavBar);
  element.appendChild(divContent);
  return element;
}
