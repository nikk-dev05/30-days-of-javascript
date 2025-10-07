let btn  = document.querySelector(".open-btn");
let box = document.querySelector(".modal-overlay");
let h2 = box.querySelector("h2");
let p = box.querySelector("p");
let button = box.querySelector(".ok-btn")

btn.addEventListener("click",function(){
     box.style.display = "flex";
})
box.querySelector(".close-btn").addEventListener("click",function(){
     box.style.display = "none";
})
button.addEventListener("click",function(){
    let originalh2 = h2.textContent;
    let  originalp = p.textContent;

    
    h2 .textContent = "Thank you for confirmation!!";
     p.textContent = "Now thanks your form has been submitted sucesfullyy!!!!";
     h2.classList.add("addd");
     p.classList.add("addd");
     button.style.display = "none";

    setTimeout(function(){
         box.style.display = "none";
         h2.textContent = originalh2;
         p.textContent = originalp;
         h2.classList.remove("addd");
         p.classList.remove("addd");
          button.style.display = "inline-block";
    },2000)
     
})