// Write a function that checks if a given number is a three digit long number.
"use strict"
function checkNumerability(d) {
    if(d > 100 && d < 1000) {
        return 1
    } else {
        return 0
    }
}

console.log(checkNumerability(1001))