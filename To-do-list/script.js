let input = document.getElementById("taskInput");
let  button = document.getElementById("addBtn");
let tasklist = document.getElementById("taskList");

button.addEventListener("click",function(value){
    if(input.value.trim() !=""){
let li = document.createElement("li");
 li.textContent=input.value;
 let button = document.createElement("button");

 button.classList.add("delete-btn");
 button.textContent="DELETE";
 li.append(button);

 tasklist.append(li);
 
     button.addEventListener("click",function(){
        button.parentElement.remove();
     })
     
     
     }

    
 input.value="";
                      
}

);