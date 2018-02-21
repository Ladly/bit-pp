// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

function capitalizeFirst(str) {
    var capitalized = str.charAt(0).toUpperCase()
    newString = str.split("")
    newString[0] = capitalized    
    return newString.join("")
}

console.log(capitalizeFirst("js string exercises"));
