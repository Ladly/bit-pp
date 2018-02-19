// Write a JavaScript function that reverses a number.

// 	12345 -> 12345

"use strict"

var randomNumber = 12345

function reverseNumber(number) {
    return parseInt(number.toString().split("").reverse().join(""));
}

console.log(reverseNumber(randomNumber));
 