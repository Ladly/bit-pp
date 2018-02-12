// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

"use strict"

function returnLast(str, char) {
    var lastChar = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] === char) {
            lastChar = i
        }              
    }
    return lastChar 
}

console.log(returnLast('somestrimgawhdiuahwm', 'm'));

