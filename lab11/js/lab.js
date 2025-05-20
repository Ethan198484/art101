// index.js - Lab 11 Javascript Events and Forms
// Author: Ethan Price
// Date: 19 May

//Sorts the characters of a string in alphabetical order
function sortString(inputString) {
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();

  // now let's sort it
  const userNameSorted = sortString(userName);

  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});