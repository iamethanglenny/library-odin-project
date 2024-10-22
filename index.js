const myLibrary = [
    new Book("To Kill a Mockingbird", "Harper Lee", 324, true, "mockingbird.jpg"),
    new Book("1984", "George Orwell", 328, false, "1984.jpg"),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true, "gatsby.jpg"),
    new Book("Atlas Shrugged", "Ayn Rand", 1192, true, "atlas.jpg"),
    new Book("Paradise Lost", "John Milton", 512, true, "paradise.jpg"),
    new Book("Pride and Prejudice", "Jane Austen", 432, true, "pride.jpg"),
    new Book("The Catcher in the Rye", "J.D. Salinger", 277, false, "catcher.webp"),
    new Book("The Hobbit", "J.R.R. Tolkien", 310, true, "hobbit.avif"),
    new Book("Fahrenheit 451", "Ray Bradbury", 158, false, "451.jpg"),
    new Book("Brave New World", "Aldous Huxley", 268, true, "brave.jpg")
];

function Book(title, author, pages, isRead, coverImage) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.coverImage = coverImage;
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

    myLibrary.forEach(function(book) {

        const card = document.createElement('div');
        card.classList.add('bookCard');

        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;
        titleElement.classList.add('heading');

        const authorElement = document.createElement('h2');
        authorElement.textContent = `Author: ${book.author}`;
        authorElement.classList.add('authorHeading')

        const pageElement = document.createElement('p');
        pageElement.textContent = `Pages: ${book.pages}`;

        
        const readStatusElement = document.createElement('input');
        readStatusElement.type = 'checkbox';
        readStatusElement.checked = book.isRead;

        const readStatusLabel = document.createElement('label');
        readStatusLabel.textContent = 'Read: ';
        readStatusLabel.classList.add("status");
        readStatusLabel.appendChild(readStatusElement);

        const coverImageElement = document.createElement('img');
        coverImageElement.src = book.coverImage || "https://via.placeholder.com/150"; 
        coverImageElement.classList.add("cover")

        card.appendChild(coverImageElement);
        card.appendChild(titleElement);
        card.appendChild(authorElement);
        card.appendChild(pageElement);
        card.appendChild(readStatusLabel);

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
    };
}

console.log(myLibrary);