const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const addBookToShelf = document.getElementById('addBook');
const bookShelf = document.getElementById('shelf');
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

// function validFormInfo() {
//     // Check if form information submitted is valid
// }

function addBookToLibrary() {
	increaseCounter();

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
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

addBookToShelf.addEventListener('click', addBookToLibrary);
// addBook button that has a pop up form
// When the form is submitted add it to the array using addBookToLibrary() <event.preventDefault>
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// Display the books on the page
// Add a delete button to each book
// Add a button or switch to change the 'read' status from false to true (this could change something on the card)
