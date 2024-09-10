let button = document.querySelector(".show-cat");
// console.log(button);
let cat = document.querySelector(".cat");

button.addEventListener("click", function(){
    if (cat.classList.contains("show")) {
        (cat.classList.remove("show"))
        document.getElementById("button").innerText = "Wait, come back!"
        button.style.color = "turqoise"
    }
    else {(cat.classList.add("show")) 
        document.getElementById("button").innerText = "Shoo cat!"
    }
    
});