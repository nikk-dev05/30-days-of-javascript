let username = document.getElementById("username");
let email = document.getElementById("email");
let password= document.getElementById("password");
let confirm = document.getElementById("confirmPassword");
let btn = document.getElementById("registerForm");

function user(){
    if(username.value.trim() == "" || username.value.length<3){
        document.getElementById("usernameError").textContent ="Username is incorrect";
        document.getElementById("usernameError").style.display ="block";
        return false;
    }
    else{
        document.getElementById("usernameError").style.display ="none"; 
        return true;
    }

}
function Email(){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 

 if (regex.test(email.value)
){
    document.getElementById("emailError").style.display ="none"; 
    return true;
 }
 else{
      document.getElementById("emailError").textContent ="Email is incorrect";
        document.getElementById("emailError").style.display ="block";
        return false ;
 }
}
function Password(){
    let regex = /^.{6,}$/ 
   if(regex.test(password.value)){
    document.getElementById("passwordError").style.display ="none"; 
    return true;
   }
   else{
     document.getElementById("passwordError").textContent ="Password is required";
        document.getElementById("passwordError").style.display ="block";
        return false ;
   }

}
function Confirm(){
    if(confirm.value == ""){
        document.getElementById("confirmPasswordError").textContent ="Confirm Password is required";
        document.getElementById("confirmPasswordError").style.display ="block";
        return false;
    }
    else if (confirm.value != password.value){
       document.getElementById("confirmPasswordError").textContent =" Confirm Password does not match to password ";
        document.getElementById("confirmPasswordError").style.display ="block";
        return false;
    }
    else{
       document.getElementById("confirmPasswordError").style.display ="none"; 
       return true;
    }
}
btn.addEventListener("submit",function(data){
    data.preventDefault();
   let usernamevalid = user();
   let emailvalid = Email();
   let  passwordvalid = Password();
   let confimvalid = Confirm();
   if(usernamevalid && emailvalid && passwordvalid && confimvalid ){

         document.getElementById("successMsg").textContent = "Registration Successful!";
          document.getElementById("successMsg").style.display = "block";
          setTimeout(() => {
               document.getElementById("successMsg").style.display = "none";
          }, 3000);
    
   
     


   }


})

