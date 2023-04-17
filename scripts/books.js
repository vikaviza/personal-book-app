
let number = 0;
// first array obj
let book = '';
let author = '';
let add = '';
// Message

// BOOKLIST
const bookList = [
    {name: "To Kill a Mockingbird",
    author: 'Harper Lee'
    },
    {name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
    },
    {name: 'Harry Potter and the Sorcerer`s Stone (Harry Potter, #1)',
    author: 'J.K. Rowling'
    },
    {name: 'Animal Farm',
    author: 'George Orwell'
    },
    {name: '1984',
    author: 'George Orwell'
    },
    {name: 'The Hobbit (The Lord of the Rings, #0)',
    author: 'J.R.R. Tolkien'
    },
    {name: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry'
    },
    {name: 'Fahrenheit 451',
    author: 'Ray Bradbury'
    },
    {name: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
    },
    {name: 'The Lion, the Witch and the Wardrobe (Chronicles of Narnia, #1)',
    author: 'C.S. Lewis'
    },
    {name: 'The Grapes of Wrath',
    author: 'John Steinbeck'
    },
    {name: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez'
    },
    {name: 'Brave New World',
    author: 'Aldous Huxley'
    },
    {name: 'Gone with the Wind',
    author: 'Margaret Mitchell'
    },
    {name: 'Of Mice and Men',
    author: 'John Steinbeck'
    },
    {name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
    author: 'J.K. Rowling'
    } 
    
]
console.log(bookList.name);
// let bookArrayLength = bookList.length;
// // Items in array

// for (let i = 0; i < bookArrayLength; i++) {

//     number = (i + 1);

//     book += '<div class="object">' + number + ': ';

//     book += bookList[i] + '<i class="fa-solid fa-square-plus"></i>' + '</div>' + '<br>';

// }

// document.getElementById('bookBlock').innerHTML = book;
    
// const booksBtn = document.getElementById('books')

// booksBtn.addEventListener("click", (e) =>{
//     e.preventDefault();
//     bookBlock.classList.toggle("display");
// })   

// // AUTHORS
// const authors = [
//     'Harper Lee',
//     'F. Scott Fitzgerald',
//     'J.K. Rowling',
//     'George Orwell',
//     'George Orwell',
//     'J.R.R. Tolkien',
//     'Antoine de Saint-Exupéry',
//     'Ray Bradbury',
//     'J.D. Salinger',
//     'C.S. Lewis',
//     'John Steinbeck',
//     'Gabriel García Márquez',
//     'Aldous Huxley',
//     'Margaret Mitchell',
//     'John Steinbeck',
//     'J.K. Rowling'
// ]

// let authorArrayLength = authors.length;
// // Items in array

// for (let i = 0; i < authorArrayLength; i++) {

//     number = (i + 1);

//     author += '<div class="object">' + number + ': ';

//     author +=  bookList[i] + '<i class="fa-solid fa-square-plus"></i>' + '</div>' + '<br>';
// }

// document.getElementById('authorBlock').innerHTML = author;
    
// const authorsBtn = document.getElementById('author')

// authorsBtn.addEventListener("click", (e) =>{
//     e.preventDefault();
//     authorBlock.classList.toggle("display");
// })  

// // PRICE
// const price = [
//     30,
//     25,
//     18.50,
//     19.50,
//     19.50,
//     19,
//     22.30,
//     17,
//     7,
//     12,
//     14,
//     15.70,
//     16.40,
//     12.50,
//     6.50
// ];

// let addToList = bookList + authors ;
// // Items in array

// for (let i = 0; i < addToList; i++) {

//     number = (i + 1);

//     add += '<div class="object">' + number + ': ';

//     add += bookList[i] + '<i class="fa-solid fa-square-plus"></i>' + '</div>' + '<br>';

// }



// console.log(addToList);
// console.log(bookList);
// console.log(authors);

// const array3 = bookList.concat(authors);
// console.log(array3);
// if