// Global Variables
const overlay = document.getElementById('overlay');
const addBook = document.getElementById('addBook');
const submitBtn = document.getElementById('submitFormButton');
const closeBtn = document.getElementById('close-button');
const myLibrary = [];
// Functions and event lisenters for pop-up modal
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

addBook.addEventListener('click', () => {
	const modal = document.querySelector(addBook.dataset.modalTarget);
	openModal(modal);
});

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

closeBtn.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

// Constructor function
function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addBookToLibrary() {
	const titleInput = document.getElementById('book-title');
	const authorInput = document.getElementById('book-author');
	const pagesInput = document.getElementById('book-pages');
	const book = new Book(titleInput.value, authorInput.value, pagesInput.value);
	myLibrary.push(book);
}

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	addBookToLibrary();
	document.getElementById('pop-up').reset();
	const modal = submitBtn.closest('.modal');
	closeModal(modal);
});

// PLANNING PHASE

// TODO figure out card styling
// TODO figure out dynamic card positioning (on delete)
// TODO create a card funciton
// TODO
