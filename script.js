"use strict";

/* SO we are making a STOP WATCH

Functions of a Stop Watch 

- Continuous timer with hours minutes seconds and miliseconds 
-A button (eventLinstener ('click, function ()) one stop the stop watch (pauses at the number the button is clicked))
- A button to START the stop watch- makes the timer start running 
- A button to RESET - puts the stop watch back to 00:00:00:00

1. Remember there is the display and there is the value(element) (the actual changing of the elemtent underneath)
a. we declar all our variables with let and at the top - everything that we are going to need from the dom we are getting so
- the html elements of element .watch .time
- the buttons we want to react with 
as they are going to change and we set them to 00 (which is the same as it would be in a clock)
2. we grab the elements from the html using either getElementbyID or document.querySelector('.class/#id')
a. holds these values in a variables as it makes it easier to use later on 


*/
// Global Variables
let seconds = 0 - 1; // -1 ass the seconds satart from 1 due to the seconds++
let interval = null;
// ⬆ this variable is what is going to keep ticking up our timer

const time_el = document.querySelector(".watch .time");
// this is our time element 00:00:00

// Buttons

let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");

// Event Listeners

buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop);
buttonReset.addEventListener("click", reset);

// Function for timer

function timer() {
  //Update the timer

  seconds++;

  // Format our timer
  let hours = Math.floor(seconds / 3600); // or (60 * 60) try and right full numbers so JS has less work to do( there is 60 secinds in a min * 60 mins in an hour)
  let minutes = Math.floor((seconds % 3600) / 60); // every 60 is = to a minute thats why we divide a second by 60
  let secs = seconds % 60; // remainder operator - first is divided by second the result is the remainder- this allows to cap it at 60 (60 is the modulus)

  // Adding the 00

  if (secs < 10) secs = "0" + secs;
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  time_el.innerText = `${hours}:${minutes}:${secs}`;
}

timer();

// start

function start() {
  if (interval) {
    return;

    // ⬆ This means its already running we dont need to start it again-
    //  this is how you get something to start running as you are just setting it as a condition and returning nothing
  }
  interval = setInterval(timer, 1000);
}
// The setInterval() method repeats a block of code at every given timing event.
// The commonly used syntax of JavaScript setInterval is: setInterval(function, milliseconds);

//The setInterval() method calls a function at specified intervals (in milliseconds). this is what keeps our timer ticking up as
//1 second = 1000 milliseconds - so we want the steInterval function as we want to start ticking up , our function for that ticking up is what we have
// set in timer and the next agrument is 1000 as 1 second is 1000 mili seconds

// stop

function stop() {
  clearInterval(interval);
  interval = null; //this is so it stops counting
}

// reset

function reset() {
  stop();
  seconds = 0;
  interval = null;
  time_el.innerText = `00:00:00`;
}
