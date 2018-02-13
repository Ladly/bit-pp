// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

"use strict"

var inputString = "some random string"

function stringToArrayConverter(str) {
    var convertedString = [];
    var convertedStringIndex = 0;    

    for (var i = 0; i < str.length; i++) {
        convertedString[convertedStringIndex] = str[i];
        convertedStringIndex++;
    }
  
    return convertedString
}

var convertedInputString = stringToArrayConverter(inputString);

function vowelCounter(arrayToCount) {
    var vowelCounter = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for(var i = 0; i < arrayToCount.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if(arrayToCount[i] === vowels[j]) {
                vowelCounter++
            }
        }
    }
    return vowelCounter
}

console.log(vowelCounter(inputString));
