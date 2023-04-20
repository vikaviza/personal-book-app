const liItem = document.querySelectorAll("ul li");
const bookItem = document.getElementsByClassName("card");
// const arr = Array(bookItem)
// console.log(liItem)
// console.log(bookItem)
console.log(bookItem)

liItem.forEach(li => {
    li.onclick = function() {
        // ACTIVE
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";
            // FILTER

    const value = li.textContent;
    
    arr.forEach(div => {
        div.style.display = "none";
        if (div.getAttribute('data-filter') == value.toUpperCase()) {
            div.style.display = 'block';
        }
    })
    }
});