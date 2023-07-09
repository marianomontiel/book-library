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
        const featuredBooks = document.querySelector(".featured-books")
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        
        const newTitle = document.createElement("p")
        newTitle.id = title;
        newTitle.innerHTML = "<strong>Title: </strong>" + this.title;
        newCard.appendChild(newTitle);

        const newAuthor = document.createElement("p")
        newAuthor.id = author;
        newAuthor.innerHTML = "<strong>Author: </strong>" + this.author;
        newCard.appendChild(newAuthor);

        const newPages = document.createElement("p")
        newPages.id = pages;
        newPages.innerHTML = "<strong>Pages: </strong>" + this.pages;
        newCard.appendChild(newPages);

        const newRead = document.createElement("p")
        newRead.id = read;
        newRead.innerHTML = "<strong>Read: </strong>" + this.read;
        newCard.appendChild(newRead);

        featuredBooks.appendChild(newCard);
        newCard.appendChild(removeButton);

        removeButton.addEventListener("click", function(){
            featuredBooks.removeChild(newCard);
        })

    }
}

//const Tolkien = new Book("The Hobbit", "J.R.R Tolkien", 295, 0);

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push({ "ID": myLibrary.length, "title": title, "author": author, "pages": pages, "read": read });
    console.log(myLibrary)
}

const addButton = document.querySelector("#add").addEventListener("click", function () {
    const bookTitle = document.querySelector("input[name='title']").value
    const bookAuthor = document.querySelector("input[name='author']").value
    const bookPages = document.querySelector("input[name='pages']").value
    const bookRead = document.querySelector("input[name='read']").checked;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    
    
    const addBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
    addBook.bookCards();

    event.preventDefault();
    form.reset();
})

const addBookForm = document.getElementById("add-book").addEventListener("click", function(){
    const form = document.querySelector("form");

    if (form.classList.value === 'form active') {
        form.classList.remove('active')    
    } else {
        form.classList.add('active')
    }

})



