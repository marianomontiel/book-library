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
        const newCard = document.createElement("div");
        newCard.classList.add('book-card');
        const titleDiv = document.createElement("div");
        titleDiv.classList.add('titles');
        const removeDiv = document.createElement("div");
        removeDiv.classList.add('remove')

        const featuredBooks = document.querySelector(".featured-books")
        const removeButton = document.createElement("button");
        removeButton.innerText = "X";

        const newTitle = document.createElement("p")
        newTitle.id = title;
        newTitle.innerHTML = "<strong>Title: </strong>" + this.title;
        titleDiv.appendChild(newTitle);

        const newAuthor = document.createElement("p")
        newAuthor.id = author;
        newAuthor.innerHTML = "<strong>Author: </strong>" + this.author;
        titleDiv.appendChild(newAuthor);

        const newPages = document.createElement("p")
        newPages.id = pages;
        newPages.innerHTML = "<strong>Pages: </strong>" + this.pages;
        titleDiv.appendChild(newPages);

        const newRead = document.createElement("p")
        newRead.id = read;
        newRead.innerHTML = "<strong>Read: </strong>" + this.read;
        titleDiv.appendChild(newRead);

        featuredBooks.appendChild(newCard);
        newCard.appendChild(removeDiv);
        removeDiv.appendChild(removeButton);
        newCard.appendChild(titleDiv);

        removeButton.addEventListener("click", function () {
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
    event.preventDefault();
    
    const title = document.getElementById('title').checkValidity();
    const author = document.getElementById('author').checkValidity();
    const pages = document.getElementById('pages').checkValidity();

    const requiredFieldText = document.querySelector("form > p");
    if (title && author && pages) {
        const bookTitle = document.querySelector("input[name='title']").value
        const bookAuthor = document.querySelector("input[name='author']").value
        const bookPages = document.querySelector("input[name='pages']").value
        const bookRead = document.querySelector("input[name='read']").checked;
    
        addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    
    
        const addBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
        addBook.bookCards();
        
        const form = document.querySelector("form");
        form.reset();
        requiredFieldText.innerText = ""

        //close window after adding book
        const closeBookForm = document.querySelector("#open-close-form")
        closeBookForm.dispatchEvent(new MouseEvent('click', { view: window, bubbles: true, cancelable: true }));
    } else {
        requiredFieldText.innerText = "Please fill the required fields"
        
     }
    
})

const triggerFormDisplay = document.querySelectorAll("#open-close-form");

triggerFormDisplay.forEach((button) => {
  button.addEventListener("click", function () {
    const form = document.querySelector(".form");

    if (form.classList.value === 'form active') {
        form.classList.remove('active')
    } else {
        form.classList.add('active')
    }
  });
});

