//unfinished ?????

// Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

"use strict"

function splitter(str, separator) {
    var newString = ""
    if (separator === undefined) {
        separator = "-"
    }

    for (var i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            newString += str[i]
        } else {            
            newString += separator
        }       
    }
    return newString    
}

console.log(splitter("random string of  very cool words lol"));
