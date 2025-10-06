let slides = document.getElementsByClassName("slide");
let prevs = document.querySelector(".prev");
let nexts =document.querySelector(".next");
let dotss = document.getElementsByClassName("dot");
let currentSlide =0;
function showslide(currentSlide){
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotss[i].classList.remove("active");
  }

  
  slides[currentSlide].style.display = "block";
  dotss[currentSlide].classList.add("active");
}

function changeslide(n){
    currentSlide+=n;
    if(currentSlide < 0){
        currentSlide = slides.length-1;
          
    }
    else if (currentSlide > slides.length-1){
        currentSlide = 0;
    }
    
        showslide(currentSlide);}


    nexts.addEventListener("click", function() {
         changeslide(1); 
});

prevs.addEventListener("click", function() {
           changeslide(-1); 
});
for (let i = 0; i < dotss.length; i++) {
    dotss[i].addEventListener("click", function() {
        currentSlide = i;      
        showslide(currentSlide);
    });
}