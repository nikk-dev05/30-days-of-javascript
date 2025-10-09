let button  = document.getElementsByClassName("tab-button");
for(let  btn of button){
    btn.addEventListener("click",function(data){
     
    for (let b of button) {
      b.classList.remove("active");
    }

    
    btn.classList.add("active");

    
    let target = btn.getAttribute("data-target");

    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.querySelector(target).style.display = "block";
             
    })
}