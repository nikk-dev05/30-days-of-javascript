let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec= document.getElementById("seconds");
let am_pm = document.getElementById("ampm");
let date = document.getElementById("date");
let week = document.getElementById("weekday");
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let week_day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
function fixed(n){
    return n<10 ? "0" + n : n;
}
function updateClock(){
    let exact_date= new Date();
     let  h = exact_date.getHours();
     let  m= exact_date.getMinutes();
     let  s= exact_date.getSeconds();
   let  month_index= exact_date.getMonth();
   let d = exact_date.getDate();
   let year = exact_date.getFullYear();
   let weekday = exact_date.getDay();
   let  ampm = h >= 12 ? "PM" : "AM";
     h = h % 12;
  if (h === 0) h = 12;
   hrs.textContent=fixed(h); min.textContent=fixed(m);
   sec.textContent=fixed(s);
   am_pm.textContent = ampm;
   
   

     
     date.textContent= month[month_index] + "  " + d +" "+ "," +" "+ year;
     week.textContent = week_day[weekday];
     


}

setInterval(updateClock,1000);
updateClock();