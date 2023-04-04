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
	const delBTN = document.createElement('button');
	delBTN.setAttribute('id', 'delBTN');
	delBTN.textContent = 'DELETE';
	delBTN.addEventListener('click', () => {
		cardDiv.remove();
	});
	bottomDiv.append(h4EL, labelOne, inputOne, labelTwo, inputTwo);
	cardDiv.append(titleP, authorP, pagesP, bottomDiv, delBTN);
	bookShelf.append(cardDiv);
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
	increaseCounter();
	addCard();
	const cardClass = `.card${counter}`;
	const cardEL = document.querySelector(cardClass);
	console.log(cardEL);
	const titleClass = `.title${counter}`;
	const authorClass = `.author${counter}`;
	const pagesClass = `.pages${counter}`;
	const inputTitle = document.getElementById('book-title');
	const updatedTitle = document.querySelector(titleClass);
	const inputAuthor = document.getElementById('book-author');
	const updatedAuthor = document.querySelector(authorClass);
	const inputPages = document.getElementById('book-pages');
	const updatedPages = document.querySelector(pagesClass);
	if (inputPages.value.length > 5) {
		alert('Page length must be under 5');
		cardEL.remove();
		counter -= 1;
	} else if (inputAuthor.value.length > 15) {
		alert('Author Name lenght must be under 15');
		cardEL.remove();
		counter -= 1;
	} else if (inputTitle.value.length > 15) {
		alert('title length must be under 15');
		cardEL.remove();
		counter -= 1;
	} else {
		updatedTitle.innerText = `Title: ${inputTitle.value}`;
		updatedAuthor.innerText = `Author: ${inputAuthor.value}`;
		updatedPages.innerText = `Pages: ${inputPages.value}`;
		document.getElementById('pop-up').reset();
		submitBtn.forEach((button) => {
			const modal = button.closest('.modal');
			closeModal(modal);
		});
	}
});

// TODO Add a delete button to each book
// TODO GO through and add a comment then we will probably want to rewrite this
