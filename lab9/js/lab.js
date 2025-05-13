

// index.js - Lab 9 Libraries and JQuery
// Author: Ethan Price
// Date: 12 May 2025

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//add click listener
$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});


$("#problems").append("<button id='button-problems'>Make Special</button>");

//add click listener
$("#button-problems").click(function() {
    $("#problems").toggleClass("special");
});



$("#results").append("<button id='button-results'>Make Special</button>");

//add click listener
$("#button-results").click(function() {
    $("#results").toggleClass("special");
});

