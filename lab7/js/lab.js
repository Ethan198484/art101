// index.js - Lab 7 Functions
// Author: Ethan Price
// Date: 4 May


//Function to sort users input in alphabetical order
function papaSmurf () {

// Creates variable to give users a prompt, that then splits, sorts in alphabetical order, and joins the new word
  let userName= window.prompt("what is your name?").split("").sort().join("");

//What is sent back
  return userName;

}

//Output
document.writeln("I fixed it!: ", papaSmurf(), "</br>");


