// index.js - Lab 10 Javascript for the Web
// Author: Ethan Price
// Date: 15 May


function generateRandomText() {
  console.log("It's working");
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
  
}

// click listener for button
$("#make-convo").click(function(){
  console.log("button pushed");
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});



// get new fake dialogue







$("#make-convo").click(function(){
  console.log("button pushed");
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});