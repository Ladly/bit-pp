// Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

function reverseNumber(num) {
    numToString = num + ""
    newString = ""
    for(var i = numToString.length-1; i >= 0; i--) {        
        newString += numToString[i]
    }
    parseToNumber = parseFloat(newString)
    return parseToNumber
}

console.log(reverseNumber(12341231235));
