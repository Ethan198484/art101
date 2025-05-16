// index.js - Lab 9 Libraries and JQuery
// Author: Ethan Price
// Date: 12 May




$(".special-sections").append("<button>Make Special!</button>");

$(".special-sections button").click(function() {
   console.log("button is clicked")
   $(this).parent().toggleClass("special")
}); 