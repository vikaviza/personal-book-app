
const dskSubmitNewBook = document.getElementById("dskSubmitNewBook");

window.addEventListener("load", () => {
  books = JSON.parse(localStorage.getItem("books")) || [];
  displayBooks();
});

dskSubmitNewBook.addEventListener("click", (e) => {
  e.preventDefault();
  const dskbookName = document.getElementById("dskBookName");
  const dskbookAuthor = document.getElementById("dskBookAuthor");
  const dskbookCategory = document.getElementById("dskBookCategory");
  const dskbookReleaseYear = document.getElementById("dskBookReleaseYear");
  const dskbookPrice = document.getElementById("dskBookPrice");
  const dskbookPicture = document.getElementById("dskBookPicture");

  const dskbook = {
    name: dskbookName.value,
    author: dskbookAuthor.value,
    category: dskbookCategory.value,
    releaseYear: dskbookReleaseYear.value,
    price: dskbookPrice.value,
    url: dskbookPicture.value,
  };

  let msg = document.getElementById("dskalertBox")
  if (dskbook.name, dskbook.author, dskbook.category, dskbook.releaseYear, dskbook.price, dskbook.url == "") {
    msg.innerHTML = `<h2 class="alert">PLEASE FILL ALL FIELDS<h2>`
    return;
  } else {
    msg.style.display = "none";
  }

  books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(dskbook);
  localStorage.setItem("books", JSON.stringify(books));

  displayBooks();
});



function displayBooks(searchTerm) {
  const bookshelf = document.getElementById("bookList");
  const books = JSON.parse(localStorage.getItem("books"));
  bookshelf.innerHTML = "";
  if (books) {
    const filteredBooks = searchTerm
      ? books.filter((dskbook) =>
          dskbook.name.toLowerCase().includes(
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
