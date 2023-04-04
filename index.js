const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const bookShelf = document.getElementById('shelf');
const submitBtn = document.querySelectorAll('.submitFormButton');
const form = document.getElementById('pop-up');
const myLibrary = [];
let counter = 0;

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function increaseCounter() {
	counter += 1;
}

function addCard() {
	if (counter === 19) return;
	const cardDiv = document.createElement('div');
	cardDiv.classList.add(`card${counter}`);
	const authorP = document.createElement('p');
	authorP.classList.add(`author${counter}`);
	authorP.textContent = 'Author: ';
	const titleP = document.createElement('p');
	titleP.classList.add(`title${counter}`);
	titleP.textContent = 'Title: ';
	const pagesP = document.createElement('p');
	pagesP.classList.add(`pages${counter}`);
	pagesP.textContent = 'Pages: ';
	// Create bottom Div
	const bottomDiv = document.createElement('div');
	const h4EL = document.createElement('h4');
	h4EL.textContent = 'Finished Reading?';
	const labelOne = document.createElement('label');
	labelOne.textContent = 'YES';
	labelOne.setAttribute('for', `radio${counter}`);
	const inputOne = document.createElement('input');
	inputOne.type = 'radio';
	inputOne.setAttribute('name', `radio${counter}`);
	inputOne.setAttribute('id', `radio${counter}`);
	const labelTwo = document.createElement('label');
	labelTwo.textContent = 'NO';
	labelTwo.setAttribute('for', `radio${counter}`);
	const inputTwo = document.createElement('input');
	inputTwo.type = 'radio';
	inputTwo.setAttribute('name', `radio${counter}`);
	inputTwo.setAttribute('id', `radio${counter}`);
	bottomDiv.append(h4EL, labelOne, inputOne, labelTwo, inputTwo);
	cardDiv.append(authorP, titleP, pagesP, bottomDiv);
	bookShelf.append(cardDiv);
}

function addBookToLibrary() {
	increaseCounter();
	addCard();
	const book = new Book('Harry Potter', 'JK Rowling', 500, true);
	console.log('finished');
	console.log(book.title, book.author, book.read);
}

openModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		document.getElementById('pop-up').reset();
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	addBookToLibrary();
	document.getElementById('pop-up').reset();
	submitBtn.forEach((button) => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// Display the books on the page
// Add a delete button to each book
// Add a button or switch to change the 'read' status from false to true (this could change something on the card)
