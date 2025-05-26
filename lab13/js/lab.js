// index.js - Lab 13 Loops
// Author: Ethan Price
// Date: 26 May



function fizzBuzz() {
  for (let i = 1; i <= 200; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "Fizz";
      console.log("fizz")
    }
    if (i % 5 === 0) {
      output += "Buzz";
      console.log("buzz")
    }
    if (i % 7 === 0) {
      output += "Boom";
      console.log("boom")
    }
     $("#output").append("<p>" + output + "</p>");
} 
    }



