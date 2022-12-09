let library = [];


function Book (title, author, pageCount, publisher, genre) {
    this.Title = title;
    this.Author = author;
    this.PageCount = pageCount;
    this.Publisher = publisher;
    this.Genre = genre;
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
    while (showCase.firstChild) {
        showCase.removeChild(showCase.firstChild);
    };
    for (let book in library) {   
        let entry = document.createElement(`div`);
        let detail = [];
        for (let i in library[book]) {
            detail.push(library[book][i])
        }
        for (let i in detail) {
            let info = document.createElement(`p`);
            info.textContent = detail[i];
            entry.appendChild(info);
        }
        console.log(detail);
        showCase.appendChild(entry);
    }
});
