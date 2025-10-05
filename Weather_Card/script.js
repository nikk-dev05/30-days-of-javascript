let city = document.getElementById("cityInput");
let btn = document.getElementById("searchBtn");
let monsoon = document.querySelector("#weatherCard");

 async function getWeather(cityName){
    try{
     let weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=2e23f509276d47198a9152522250510&q=${cityName}&aqi=yes`);
     let data = await weather.json();
     monsoon.querySelector(".city-name").textContent = data.location.name;
     monsoon.querySelector(".temperature").textContent = data.current.temp_c;
     monsoon.querySelector(".condition").textContent = data.current.condition.text;
     let icon = monsoon.querySelector("#weatherIcon");
     icon.src = "https:" + data.current.condition.icon;
      localStorage.setItem("lastCity", cityName);

    }
catch(e){
 console.log(e);
 alert("Failed to fetch weather. Please try again later.");
}
}
btn.addEventListener("click",function(e){
    e.preventDefault();
    if(city.value.trim() === ""){
        alert("Enter a city name ");
    }
    else{
        getWeather(city.value);
    }
})
window.addEventListener("load", function() {
    let savedCity = localStorage.getItem("lastCity");
    if (savedCity) {
        getWeather(savedCity);
    }
});
