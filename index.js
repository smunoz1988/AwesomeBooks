import BooksList from './modules/booksList.js';
import { handleListBookClick, handleAddNewSectionClick, handleContactSectionClick } from './modules/changeSections.js';

const booksList = new BooksList();
const addButton = document.getElementById('add-book');
addButton.addEventListener('click', () => {
  booksList.addNewBook();
  booksList.createContainer();
  localStorage.setItem('data', JSON.stringify(booksList.booksList));
});

window.onload = () => {
  booksList.createContainer();
};

const currentDate = new Date();
const options = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

document.getElementById('date').innerHTML = currentDate.toLocaleDateString('en-US', options);

listBook.addEventListener('click', handleListBookClick);
addNewSection.addEventListener('click', handleAddNewSectionClick);
contactSection.addEventListener('click', handleContactSectionClick);