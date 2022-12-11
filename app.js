let library = [];
let bookItem = 0;


function Book (title, author, pageCount, publisher, genre, read) {
    this.Title = title;
    this.Author = author;
    this.PageCount = pageCount;
    this.Publisher = publisher;
    this.Genre = genre;
    this.Read = read;
}


const title = document.querySelector(`#bookTitle`);
const author = document.querySelector(`#bookAuthor`);
const pageCount = document.querySelector(`#bookPageCount`);
const publisher = document.querySelector(`#bookPublisher`);
const genre = document.querySelector(`#bookGenre`);
const read = document.querySelector(`#bookRead`);


const addBook = () => {
    const a = new Book(title.value, author.value, pageCount.value, publisher.value, genre.value, read.value);
    library.push(a);
    return library;
}


const showCase = document.querySelector(`#showcase`);
const register = document.querySelector(`#register`);
register.addEventListener('click', () => {
    addBook()

    while (showCase.firstChild) {
        showCase.removeChild(showCase.firstChild);
    };

    for (let book in library) {
        let entry = document.createElement(`div`);
        entry.classList.add(`book`);

        let remove = document.createElement(`button`);
        remove.textContent = `Remove book`;
        remove.addEventListener(`click`, () => {
            entry.remove();
            library.splice(book, 1);
        });
        entry.appendChild(remove);

        let readBook = document.createElement(`button`);
        readBook.textContent = `Read book`;
        readBook.addEventListener(`click`, () => {
            entry.removeChild(entry.lastChild);
            detail[5] = `read`;
            console.log(detail[5]);
            let finalInfo = document.createElement(`p`);
            finalInfo.textContent = detail[5];
            entry.appendChild(finalInfo);
        });

        entry.appendChild(readBook);
        let detail = [];
        for (let i in library[book]) {
            detail.push(library[book][i]);
        };
        for (let i in detail) {
            let info = document.createElement(`p`);
            info.textContent = detail[i];
            entry.appendChild(info);
        };
        console.log(detail);
        console.log(detail[5]);
        showCase.appendChild(entry);
    };
});

const openPopUp = document.querySelector(`#openPopUp`);
const closePopUp = document.querySelector(`#closePopUp`);
const modal = document.querySelector(`#input`);
openPopUp.addEventListener(`click`, () => {
    modal.classList.add(`active`);
});
closePopUp.addEventListener(`click`, () => {
    modal.classList.remove(`active`);
});
