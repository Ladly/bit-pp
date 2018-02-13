// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2
"use strict"
function howMany(str, char) {
    var howManyz = 0
    for(var i = 0; i < str.length; i++) {
        if(str[i] === char) {
            howManyz ++
        }
    }
    return howManyz
}

console.log(howMany("My random string", "n"))