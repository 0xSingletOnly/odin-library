let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return (
      `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read ? "has read" : "not read yet"
      }`
    );
  };
}

function addBooktoLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
