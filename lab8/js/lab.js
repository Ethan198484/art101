

// index.js - Lab 8 Anon Functions and Callbacks
// Author: Ethan Price
// Date: 8 May


let myArray=[1,2,3,4,5];



function myFunction(x){return x+3};





myArray.map(myFunction);

newFunction= myArray.map(function(x){return x*2});

console.log(newFunction);



