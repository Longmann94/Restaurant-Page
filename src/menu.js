export default function contentMenu () {
  const content = document.querySelector('.content');

  const menuItem = document.createElement('div');
  const itemTitle = document.createElement('div');
  const itemDetails = document.createElement('div');
  const itemImage = document.createElement('div');
  menuItem.classList.add('menu-item');
  itemTitle.classList.add('item-title');
  itemDetails.classList.add('item-details');
  itemImage.classList.add('item-image');

  itemTitle.textContent = "Menu Item 1";
  itemDetails.textContent = "This is some information about Menu item 1";
  itemImage.textContent = "This is the image of menu item 1";

  menuItem.appendChild(itemImage);
  menuItem.appendChild(itemTitle);
  menuItem.appendChild(itemDetails);

  content.appendChild(menuItem);
}
