// index.js - Lab 6 Arrays and Objects
// Author: Ethan Price
// Date:28 April



// Define Variables
myTransport = ["truck", "bus", "train", "walking", "airplane"];


// object for my main ride
myMainRide = {
  make: "Ford",
  model: "F-150",
  color: "green",
  year: 1997,
  age: function() {
    return 2025 - this.year;
  }
}



// Output
document.writeln("Transportation I use: ", myTransport,  "</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");








// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
















function theElephant (someFood){

  let userSortedText=someFood.split("").sort().join("");

  return userSortedText;

}




let userText=window.prompt("Please say something");

let finalText=theElephant(userText);

document.writeln(finalText);

