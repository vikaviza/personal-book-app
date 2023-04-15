
let number = 0;
// first array obj
let book = '';
let author = '';
let priceloop = '';
// Message

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

let bookArrayLength = bookList.length;
// Items in array

for (let i = 0; i < bookArrayLength; i++) {

    number = (i + 1);

    book += '<div class="object">' + number + ': ';

    book += bookList[i] + '<i class="fa-solid fa-square-plus"></i>' + '</div>' + '<br>';

}

document.getElementById('bookBlock').innerHTML = book;
    
const booksBtn = document.getElementById('books')

booksBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    bookBlock.classList.toggle("display");
})   

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
    'John Steinbeck',
    'J.K. Rowling'
]

let authorArrayLength = authors.length;
// Items in array

for (let i = 0; i < authorArrayLength; i++) {

    number = (i + 1);

    author += '<div class="object">' + number + ': ';

    author +=  bookList[i] + '<i class="fa-solid fa-square-plus"></i>' + '</div>' + '<br>';
}

document.getElementById('authorBlock').innerHTML = author;
    
const authorsBtn = document.getElementById('author')

authorsBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    authorBlock.classList.toggle("display");
})  

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


const bookInfo = {

}



console.log(bookInfo);
console.log(bookList);
console.log(authors);