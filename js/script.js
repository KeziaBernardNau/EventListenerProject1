let button = document.querySelector(".show-cat");
// console.log(button);
let cat = document.querySelector(".cat");

button.addEventListener("click", function(){
    button.innerHTML = "It's Working"
    cat.classList.add("show")
});