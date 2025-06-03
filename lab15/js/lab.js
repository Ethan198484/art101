// index.js - Lab 15 AJAX
// Author: Ethan Price
// Date: 2 June



   document.getElementById("activate").addEventListener("click", function() {
    console.log("Button clicked!");
});

$("#activate").click(function() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            $("#output").html(data.value);
        });
});