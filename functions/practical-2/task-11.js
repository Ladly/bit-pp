// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

"use strict"

function justNumbers(arr) {
    var newArr = []
    var newArrIndex = -1
    for (var i = 0; i < arr.length; i++) {
        newArrIndex++
        var parsingInput = parseFloat(arr[i])
        if ((typeof parsingInput === "number") && isFinite(parsingInput)) { 
            newArr[newArrIndex] = parsingInput           
        }
    }
    return newArr
}

console.log(justNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));


// fix this crap!!!!