// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

function myButton () {
 document.getElementById("demo").innerHTML = "Hello World";
  }


// const element = document.querySelector(CSS_SELECTOR);
const button = document.querySelector("#click-me");

// button.addEventListener(EVENT_TYPE, CALLBACK)
button.addEventListener('click', (event) => {
  document.body.style.backgroundColor = "blue";
});



