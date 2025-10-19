let  searchInput = document.getElementById("searchInput");
let  items = document.querySelectorAll("#itemList li");
searchInput.addEventListener("input",function(){
     let  searchValue = searchInput.value.toLowerCase();
     items.forEach(item => {
    let  text = item.textContent.toLowerCase();
    if (text.includes(searchValue)) {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
});


})
