

// index.js - Lab 9 Libraries and JQuery
// Author: Ethan Price
// Date: 12 May 2025

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//add click listener
$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});


