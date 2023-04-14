const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
bookBlock = document.getElementById('bookBlock');
authorBlock = document.getElementById('authorBlock');
priceBlock = document.getElementById('priceBlock');

burger.addEventListener("click", function(){
    nav.classList.toggle("translate");
    bookBlock.classList.remove("display");
    authorBlock.classList.remove("display");
    priceBlock.classList.remove("display");
})