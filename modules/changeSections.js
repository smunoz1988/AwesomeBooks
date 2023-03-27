const listBook = document.getElementById('listBooks');
const addNewSection = document.getElementById('addNewBook');
const contactSection = document.getElementById('contactSection');
const sectionUno = document.getElementById('list');
const sectionDos = document.getElementById('add-new');
const sectionTres = document.getElementById('contact');

const handleListBookClick = () => {
  sectionUno.style.display = 'block';
  sectionDos.style.display = 'none';
  sectionTres.style.display = 'none';
  listBook.style.color = 'blue';
  addNewSection.style.color = 'black';
  contactSection.style.color = 'black';
};

const handleAddNewSectionClick = () => {
  sectionUno.style.display = 'none';
  sectionDos.style.display = 'block';
  sectionTres.style.display = 'none';
  listBook.style.color = 'black';
  addNewSection.style.color = 'blue';
  contactSection.style.color = 'black';
};

const handleContactSectionClick = () => {
  sectionUno.style.display = 'none';
  sectionDos.style.display = 'none';
  sectionTres.style.display = 'flex';
  listBook.style.color = 'black';
  addNewSection.style.color = 'black';
  contactSection.style.color = 'blue';
};

listBook.addEventListener('click', handleListBookClick);
addNewSection.addEventListener('click', handleAddNewSectionClick);
contactSection.addEventListener('click', handleContactSectionClick);

export { handleListBookClick, handleAddNewSectionClick, handleContactSectionClick };