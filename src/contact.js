export default function contentContact() {
  const content = document.querySelector('.content');

  const contactDetails = document.createElement('div');
  contactDetails.classList.add('contact-details');

  const phoneTitle = document.createElement('div');
  phoneTitle.textContent = 'Phone:';

  const phoneNumber = document.createElement('div');
  phoneNumber.textContent = '01 2345 6789'

  contactDetails.appendChild(phoneTitle);
  contactDetails.appendChild(phoneNumber);

  content.appendChild(contactDetails);
}
