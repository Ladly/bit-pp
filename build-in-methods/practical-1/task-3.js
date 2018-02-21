// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

"use strict"

var randomString = "is"

function alphabetize(str) {
    return str.split("").sort().join("");
}

console.log(alphabetize(randomString));
