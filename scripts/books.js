// BOOKLIST
const bookList = [
    'To Kill a Mockingbird',
    'The Great Gatsby',
    'Harry Potter and the Sorcerer`s Stone (Harry Potter, #1)',
    'Animal Farm',
    '1984',
    'The Hobbit (The Lord of the Rings, #0)',
    'The Little Prince',
    'Fahrenheit 451',
    'The Catcher in the Rye',
    'The Lion, the Witch and the Wardrobe (Chronicles of Narnia, #1)',
    'The Grapes of Wrath',
    'One Hundred Years of Solitude',
    'Brave New World',
    'Gone with the Wind',
    'Of Mice and Men',
    'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)'
]
// AUTHORS
const authors = [
    'Harper Lee',
    'F. Scott Fitzgerald',
    'J.K. Rowling',
    'George Orwell',
    'George Orwell',
    'J.R.R. Tolkien',
    'Antoine de Saint-Exupéry',
    'Ray Bradbury',
    'J.D. Salinger',
    'C.S. Lewis',
    'John Steinbeck',
    'Gabriel García Márquez',
    'Aldous Huxley',
    'Margaret Mitchell',
    'John Steinbeck'
]
// PRICE
const price = [
    30,
    25,
    18.50,
    19.50,
    19.50,
    19,
    22.30,
    17,
    7,
    12,
    14,
    15.70,
    16.40,
    12.50,
    6.50
];

// // function Book(bookList, authors, price) {
// //     this.bookList = book;
// //     this.authors = author;
// //     this.price = price;
// // }

// // VARIABLES
// const bookBlock = document.getElementById("bookBlock");
// const authorBlock = document.getElementById("authorBlock");
// const priceBlock = document.getElementById("priceBlock");

// // const book = "<div>" + bookList + authors + price + '<i class="fa-solid fa-euro-sign"></i>' + "</div>";

// // BOOKS
// const bookBtn = document.getElementById('books');
// const arrayLength = bookList.length;
// const number = 0;
// const msg = '';



    // Count books

    // for (let i = 0; i < arrayLength; i++) {
    //     number = (i + 1);

    //     msg += number + ': ';
    //     msg += bookList[i] + '<br>';
    //     bookBtn.addEventListener("click", function(){
    //         console.log(i);
    //         bookBlock.innerHTML = msg;
    //     })
    //     bookBlock.innerHTML = msg;
    // }

var arrayLength = bookList.length;
// Items in array
var number = 0;
// Current round
var books = '';
// Message

for (var i = 0; i < arrayLength; i++) {

    number = (i + 1);

    books += number + ': ';

    books += bookList[i] + '<br><br>';
}

document.getElementById('bookBlock').innerHTML = books;
    
const booksBtn = document.getElementById('books')

booksBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    bookBlock.classList.toggle("display");
})    

    