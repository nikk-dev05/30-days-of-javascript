let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

start.addEventListener("click", function () {
  if (interval) return; 
  interval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }


    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${h}:${m}:${s}`;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = "00:00:00";
});
