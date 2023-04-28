// Global Variables
const overlay = document.getElementById('overlay');
const addBook = document.getElementById('addBook');
const submitBtn = document.getElementById('submitFormButton');
const closeBtn = document.getElementById('close-button');
const shelf = document.getElementById('shelf');
let bookCount = 0;
const myLibrary = [];

// FORM VALIDATION START
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');
const pagesInput = document.getElementById('book-pages');
function formValidation(title, author, pageCount) {
	if (title.value == '' || title.value == null) {
		title.style.border = '2px solid red';
	} else {
		title.style.border = '2px solid green';
	}
	if (author.value == '' || author.value == null) {
		author.style.border = '2px solid red';
	} else {
		author.style.border = '2px solid green';
	}
	if (pageCount.value == '' || pageCount.value == null) {
		pageCount.style.border = '2px solid red';
	} else {
		pageCount.style.border = '2px solid green';
	}
}
formValidation(titleInput, authorInput, pagesInput);
setInterval(() => {
	formValidation(titleInput, authorInput, pagesInput);
}, 100);
// FORM VALIDATION END

class Book {
	newBook(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
}

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
	document.getElementById('pop-up').reset();
});

function createCard() {
	const cardDiv = document.createElement('div');
	const titleEl = document.createElement('p');
	const authorEl = document.createElement('p');
	const pagesEl = document.createElement('p');
	const bottomDiv = document.createElement('div');
	const bottomHeader = document.createElement('h4');
	const labelOne = document.createElement('label');
	const inputOne = document.createElement('input');
	const labelTwo = document.createElement('label');
	const inputTwo = document.createElement('input');
	const delBtn = document.createElement('button');
	delBtn.textContent = 'Delete Book';
	delBtn.setAttribute('id', 'delBTN');
	cardDiv.setAttribute('id', 'library-book');
	titleEl.setAttribute('id', `card-title${bookCount}`);
	authorEl.setAttribute('id', `card-author${bookCount}`);
	pagesEl.setAttribute('id', `card-pages${bookCount}`);
	bottomDiv.setAttribute('id', 'bottom-div');
	bottomHeader.setAttribute('id', 'bottom-header');
	bottomHeader.textContent = 'Finished Reading?';
	labelOne.setAttribute('id', 'labelOne');
	labelOne.textContent = 'Yes';
	inputOne.setAttribute('id', 'inputOne');
	inputOne.setAttribute('type', 'radio');
	inputOne.setAttribute('name', `card${bookCount}`);
	labelTwo.setAttribute('id', 'labelTwo');
	labelTwo.textContent = 'No';
	inputTwo.setAttribute('id', 'inputTwo');
	inputTwo.setAttribute('type', 'radio');
	inputTwo.setAttribute('name', `card${bookCount}`);
	bottomDiv.append(bottomHeader, labelOne, inputOne, labelTwo, inputTwo);
	cardDiv.append(titleEl, authorEl, pagesEl, bottomDiv, delBtn);
	shelf.append(cardDiv);
	delBtn.addEventListener('click', () => {
		cardDiv.remove();
	});
}

function addValueToCard() {
	const titleInput = document.getElementById('book-title');
	const authorInput = document.getElementById('book-author');
	const pagesInput = document.getElementById('book-pages');
	const curTitle = document.getElementById(`card-title${bookCount}`);
	const curAuthor = document.getElementById(`card-author${bookCount}`);
	const curPages = document.getElementById(`card-pages${bookCount}`);
	curTitle.textContent = `Title: ${titleInput.value}`;
	curAuthor.textContent = `Author: ${authorInput.value}`;
	curPages.textContent = `Pages: ${pagesInput.value}`;
}

function addBookToLibrary() {
	const titleInput = document.getElementById('book-title');
	const authorInput = document.getElementById('book-author');
	const pagesInput = document.getElementById('book-pages');
	const book = new Book(titleInput.value, authorInput.value, pagesInput.value);
	myLibrary.push(book);
}

submitBtn.addEventListener('click', (e) => {
	const titleInput = document.getElementById('book-title');
	const authorInput = document.getElementById('book-author');
	const pagesInput = document.getElementById('book-pages');
	if (
		titleInput.value.length < 2 ||
		authorInput.value.length < 2 ||
		pagesInput.value.length < 1
	) {
		e.preventDefault();
		alert('Input fields cannot be blank');
	} else {
		addBookToLibrary();
		createCard();
		addValueToCard();
		bookCount += 1;
		document.getElementById('pop-up').reset();
		const modal = submitBtn.closest('.modal');
		closeModal(modal);
		console.log(myLibrary);
	}
});
