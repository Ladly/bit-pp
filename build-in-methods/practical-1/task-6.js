// Write a function to convert a string to its abbreviated form. 

// "John Snow" -> 	"John S."

"use strict"

var str = "John Snow"

function abb(str) {  
  return str.split(" ")[0] + " " + str.split(" ")[1].charAt(0).toUpperCase() + "."
} 

console.log(abb(str));
