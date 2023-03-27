import BooksList from './modules/booksList.js';
import { changeListBookClick, changeAddNewSectionClick, changeContactSectionClick } from './modules/changeSections.js';
import { now } from './modules/date.js';

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

const currentDate = now;

document.getElementById('date').innerHTML = currentDate;

/* eslint-disable */
listBook.addEventListener('click', changeListBookClick);
addNewSection.addEventListener('click', changeAddNewSectionClick);
contactSection.addEventListener('click', changeContactSectionClick);
/* eslint-enable */