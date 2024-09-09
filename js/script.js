let button = document.querySelector(".show-cat");
// console.log(button);
let cat = document.querySelector(".cat");

button.addEventListener("click", function(){
    if (cat.classList.contains("show"))
    {console.log("Yes")}
    else 
    {console.log("No")}
});