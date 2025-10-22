let button = document.getElementById("toggleBtn");
let body = document.body;
let h1 = document.getElementById("para");
let flag =0;
let savedMode = localStorage.getItem("mode");

function black(){
body.style.backgroundColor = "black";
  button.style.backgroundColor="White";
  button.style.color="black";
 h1.style.color="white";
}
function white (){
 body.style.backgroundColor="white";
       button.style.backgroundColor="black";
  button.style.color="white";
        h1.style.color="black";
}
if (savedMode === "black") {
      black();
      flag = 1;
    } else {
      white();
      flag = 0;
    }
button.addEventListener("click",function(){
      if(flag == 0){
        black();
    localStorage.setItem("mode","black");
     flag=1; }
    else {
        white();
          localStorage.setItem("mode","white");
         flag=0; }
    

})