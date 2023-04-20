
const submitNewBook = document.getElementById("submitNewBook");

window.addEventListener("load", () => {
  books = JSON.parse(localStorage.getItem("books")) || [];
  displayBooks();
});

submitNewBook.addEventListener("click", (e) => {
  e.preventDefault();
  const bookName = document.getElementById("bookName");
  const bookAuthor = document.getElementById("bookAuthor");
  const bookCategory = document.getElementById("bookCategory");
  const bookReleaseYear = document.getElementById("bookReleaseYear");
  const bookPrice = document.getElementById("bookPrice");
  const bookPicture = document.getElementById("bookPicture");

  const book = {
    name: bookName.value,
    author: bookAuthor.value,
    category: bookCategory.value,
    releaseYear: bookReleaseYear.value,
    price: bookPrice.value,
    url: bookPicture.value,
  };

  let msg = document.getElementById("alertBox")
  if (book.name, book.author, book.category, book.releaseYear, book.price, book.url == "") {
    msg.innerHTML = `<h2 class="alert">PLEASE FILL ALL FIELDS<h2>`
    return;
  } else {
    msg.style.display = "none";
  }

  books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));

  displayBooks();
});



function displayBooks(searchTerm) {
  const bookshelf = document.getElementById("bookList");
  const books = JSON.parse(localStorage.getItem("books"));
  bookshelf.innerHTML = "";
  if (books) {
    const filteredBooks = searchTerm
      ? books.filter((book) =>
          book.name.toLowerCase().includes(
            searchTerm.toLowerCase()
          )
        )
      : books;
    for (let i = 0; i < filteredBooks.length; i++) {
      let cardHTML = `
        <div data-filter="${filteredBooks[i].category}" class="card" id="card${i}">
          <img
            src="${filteredBooks[i].url}"
            alt="..."
          />
          <div class="card-body">
            <div class="bookHeader">
            <h3 class="card-title">${filteredBooks[i].name}</h3>
            <p class="card-text">
            ${filteredBooks[i].author}
            </p>
          </div>  
          
          <ul class="list-group">
            <li class="list-group-item">Category: <b> ${filteredBooks[i].category} </b></li>
            <li class="list-group-item">Year: <b> ${filteredBooks[i].releaseYear} </b></li>
          </ul>
          <br>
            <h5>${filteredBooks[i].price}€</h5>
            <button class="delete" data-book-index="${i}">Delete</button>
        </div>
        `;
      bookshelf.innerHTML += cardHTML;
    }
  }

  const deleteButtons = document.querySelectorAll(".card button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const bookIndex = button.dataset.bookIndex;
      books.splice(bookIndex, 1);
      localStorage.setItem("books", JSON.stringify(books));
      displayBooks(searchTerm);
    });
  });
}
