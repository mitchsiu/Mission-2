
// Declare variables - const used for values that dont change (buttons, color arrays, <p> elements)
//let used for values that can change
const colorBtn = document.getElementById("colorBtn"); // the button that changes the background color.
const treatBtn = document.getElementById("treatBtn"); // the button to give Bronx a treat.
const treatCount = document.getElementById("treatCount"); // paragraph that shows how many treats Bronx has eaten.
const message = document.getElementById("message"); //display messages like "Bronx loves this background".

let treats = 0; // keeps track of how many treats Bronx has eaten Starts at 0 because he hasn’t had any treats yet.
let currentColor = 0;



// Function 1: Change background color


  // Loop through colors // array (blue to yellow)
                    //0             1
  const colors = ["lightblue", "lightyellow", "lightblue"]; // color array 2 colours 
  function changeBackground() { //triggered by a click button
  currentColor = (currentColor + 1) % colors.length; // moves to the next color, and goes back to the first color after the last one.
  document.body.style.backgroundColor = colors[currentColor]; // changes the page’s background.

  //currentColor is a number that tells us which color in the colors array we are currently showing.
//currentColor + 1 moves to the next color in the array.
//currentColor is a number that tells us which color in the array we are using right now.



  // Display message //  updates text on the page once button to change colour is clicked
  if (currentColor === 0) {
    message.textContent = "Bronx loves this cool blue background 💙🐾";
  } else {
    message.textContent = "Bronx switched to a sunny yellow background ☀️🐶";
  }

  console.log("Background color changed to:", colors[currentColor]);
}


// Function 2: Give Bronx a treat // Arithmetic operator adds 1 each time the button is clicked.
function giveTreat() {
  treats++; // arithmetic operator
  treatCount.textContent = `Bronx has had ${treats} treats today 🍪`;

  // Comparative operator
  if (treats > 5) { // adds 1 each time the button is clicked.
    message.textContent = "Whoa! Bronx is full now 🐶💤"; // cliced over 5 times this msg will show
  } else {
    message.textContent = "Yum! Bronx loves treats! 😋"; // msg will show <5 treats
  }

  console.log("Treat count:", treats);
}

// Event listeners  - buttons clicked show function
colorBtn.addEventListener("click", changeBackground); // calls the changeBackground function.
treatBtn.addEventListener("click", giveTreat); //calls the giveTreat function.
// No extra HTML changes needed — wait for the user to click a button, then run a function.
