// Write a function that takes a number and returns array of its digits.

"use strict"

var inputNumber = 2564

var stringifyNumber = function(numberToStringify) {
    return numberToStringify + ""
}

var numberToConvert = stringifyNumber(inputNumber)

// var parsingFunction = function() {}              //sound like cool idea to crate something like this?

//  vvvvv function copied from task 1 vvvvvv

function stringToArrayConverter(str) {
    var convertedString = [];
    var convertedStringIndex = 0;
    var parseIt = 0  

    for (var i = 0; i < str.length; i++) {
        parseIt = parseInt(str[i])                  // added to function for parsing - looks rather bad solution but ok for now
        convertedString[convertedStringIndex] = parseIt;
        convertedStringIndex++;
    }
  
    return convertedString
}

console.log(stringToArrayConverter(numberToConvert));

