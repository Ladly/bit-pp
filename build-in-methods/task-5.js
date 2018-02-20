// Write a function to split a string and convert it into an array of words.

// "John Snow" -> [ 'John', 'Snow' ]
    
var randomString = "John Snow"

function convertStrToArr(str) {
        return str.split(" ")
    }

console.log(convertStrToArr(randomString));
