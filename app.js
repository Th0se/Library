let library = [];

function Book (title, author, pageCount, publisher, genre) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.publisher = publisher;
    this.genre = genre;
}


const title = document.querySelector(`#bookTitle`);
const author = document.querySelector(`#bookAuthor`);
const pageCount = document.querySelector(`#bookPageCount`);
const publisher = document.querySelector(`#bookPublisher`);
const genre = document.querySelector(`#bookGenre`);


const addBook = () => {
    const a = new Book(title.value, author.value, pageCount.value, publisher.value, genre.value);
    library.push(a);
    return library;
}


const register = document.querySelector(`#register`);
register.addEventListener('click', () => {
    console.log(addBook());
});

const showCase = document.querySelector(`#showcase`);
const refresh = document.querySelector(`#refresh`);
refresh.addEventListener('click', () => {
    for (book in library) {
        let entry = document.createElement(`div`);
        entry.innerHTML = book;
        showCase.appendChild(entry);
    }
});