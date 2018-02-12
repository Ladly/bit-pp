// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

"use strict"

function createArr(str) {
    var createdArray = []
    for(var i = 0; i < str.length; i ++) {
        createdArray[i] = str[i]
        if(str[i] === " ") {
            createdArray[i] = null
        }
    }
    return createdArray
}

console.log(createArr("frrr gusteru"));
