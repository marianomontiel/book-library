function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.bookStats = function () {
        if (this.read === 0) {
            return (this.title + " by " + this.author + ", " + this.pages + " pages, " + "not read yet")
        } else {
            return (this.title + " by " + this.author + ", " + this.pages + " pages, " + "read")
        }
    }
    this.bookCards = function () {
        const newCard = document.createElement("div")
        const outputDiv = document.querySelector("#output");
        newCard.innerText = this.bookStats();
        outputDiv.appendChild(newCard);
    }
}

//const Tolkien = new Book("The Hobbit", "J.R.R Tolkien", 295, 0);

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push({ "ID": myLibrary.length, "title": title, "author": author, "pages": pages, "read": read });
    console.log(myLibrary)
}

const addButton = document.querySelector("button").addEventListener("click", function () {
    const bookTitle = document.querySelector("input[name='title']").value
    const bookAuthor = document.querySelector("input[name='author']").value
    const bookPages = document.querySelector("input[name='pages']").value
    const bookRead = document.querySelector("input[name='read']").checked;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    
    
    const addBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
    addBook.bookCards();
})



