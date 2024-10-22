const myLibrary = [
    new Book("To Kill a Mockingbird", "Harper Lee", 324, true),
    new Book("1984", "George Orwell", 328, false),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true)
];

function Book(title, author, pages, isRead, coverImage) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.coverImage = cover;
}

function addBookToLibrary() {
    // Get user input
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pageNumber').value;
    const isRead = document.getElementById('readStatus').checked;
    const coverImage = document.getElementById('coverImage').value;

    const newBook = new Book(title, author, pages, isRead, coverImage);

    myLibrary.push(newBook);

    // clear input fields
    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pageNumber').value = '';
    document.getElementById('readStatus').checked = false;
    document.getElementById('coverImage').value = '';

    displayLibrary();
}

function displayLibrary() {
    const libraryContainer = document.getElementById('libraryContainer');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book) {

        const card = document.createElement('div');
        card.classList.add('bookCard');

        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('h2');
        authorElement.textContent = book.author;

        const pageElement = document.createElement('p');
        pageElement.textContent = book.pages;

        // Sort these two out -- I think there needs to be something specific to make the checkbox and image.
        const readStatusElement = document.createElement('checkbox');
        readStatusElement.textContent = book.isRead ? 'Yes' : 'No';

        const coverImage = document.createElement('img');
        coverImage.src = book.coverImage || "https://via.placeholder.com/150"; 


        card.appendChild(coverImageElement);
        card.appendChild(titleElement);
        card.appendChild(authorElement);
        card.appendChild(pageElement);
        card.appendChild(readStatusElement);

        libraryContainer.appendChild(card);
    });
}

window.onload = () => {
    displayLibrary();
}

const modal = document.getElementById("bookModal");
const addBookBtn = document.getElementById("addBookBtn");
const closeModal = document.getElementsByClassName("close")[0];

addBookBtn.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
