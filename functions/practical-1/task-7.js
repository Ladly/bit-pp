// Write a function that calculates a number of digits of a given number. 
"use strict"
function numOfDigits(numb) {
    var toStr = numb + ""
    return toStr.length
}

console.log(numOfDigits(1214))
