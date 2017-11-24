// declares vars for the two input elements
let range = document.getElementById("range");
let num = document.getElementById("num");

// adds event listener to sync the value of each of the input boxes
// when the value of either box changes, the other box will match that value as well
// sync triggers off of event called 'input' 
range.addEventListener("input", function(event) {
    num.value = event.target.value;
});

num.addEventListener("input", function(event) {
    range.value = event.target.value;
});