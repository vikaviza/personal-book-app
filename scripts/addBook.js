
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
    KnygosPavadinimas: bookName.value,
    KnygosAutorius: bookAuthor.value,
    Kategorija: bookCategory.value,
    IsleidimoMetai: bookReleaseYear.value,
    Kaina: bookPrice.value,
    url: bookPicture.value,
  };
  books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));

  bookName.value = "";
  bookAuthor.value = "";
  bookCategory.value = "";
  bookReleaseYear.value = "";
  bookPrice.value = "";
  bookPicture.value = "";

  console.log("works");
  displayBooks();
});

function displayBooks(searchTerm) {
  const bookshelf = document.getElementById("bookList");
  const books = JSON.parse(localStorage.getItem("books"));
  bookshelf.innerHTML = "";
  if (books) {
    const filteredBooks = searchTerm
      ? books.filter((book) =>
          book.KnygosPavadinimas.toLowerCase().includes(
            searchTerm.toLowerCase()
          )
        )
      : books;
    for (let i = 0; i < filteredBooks.length; i++) {
      let cardHTML = `
        <div class="card" id="card${i}">
          <img
            src="${filteredBooks[i].url}"
            alt="..."
          />
          <div class="card-body">
            <div class="bookHeader">
            <h5 class="card-title">${filteredBooks[i].KnygosPavadinimas}</h5>
            <p class="card-text">
            ${filteredBooks[i].KnygosAutorius}
            </p>
          </div>  
          
          <ul class="list-group">
            <li class="list-group-item">Category: <b> ${filteredBooks[i].Kategorija} </b></li>
            <li class="list-group-item">Year: <b> ${filteredBooks[i].IsleidimoMetai} </b></li>
          </ul>
          <br>
            <h5>${filteredBooks[i].Kaina}$</h5>
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

// function createFilterMenu() {
//   const books = JSON.parse(localStorage.getItem("books"));
//   const filterMenu = document.getElementById("filterMenu");

//   filterMenu.innerHTML = "";

//   const allBooksOption = document.createElement("li");
//   allBooksOption.innerHTML =
//     '<button class="dropdown-item" type="button">All books</button>';
//   filterMenu.appendChild(allBooksOption);

//   const knygosAutoriai = new Set();
//   for (let book of books) {
//     knygosAutoriai.add(book.KnygosAutorius);
//   }
//   for (let knygosAutorius of knygosAutoriai) {
//     const option = document.createElement("li");
//     option.innerHTML = `<button class="dropdown-item" type="button">${knygosAutorius}</button>`;
//     filterMenu.appendChild(option);
//   }

//   const filterButtons = filterMenu.querySelectorAll(".dropdown-item");
//   filterButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const filter = e.target.textContent;
//       displayBooks(filter);
//     });
//   });
// }

// const searchBar = document.getElementById("searchBar");

// searchBar.addEventListener("input", () => {
//   const searchTerm = searchBar.value;
//   displayBooks(searchTerm);
// });
// createFilterMenu();
// displayBooks();
