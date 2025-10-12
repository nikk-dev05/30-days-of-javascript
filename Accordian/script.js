let headers = document.querySelectorAll(".accordion-header");
headers.forEach((header)=>{
    header.addEventListener("click",function(){
        let content = header.nextElementSibling;
    let icon = header.querySelector(".icon");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "–";
    }
    })

})