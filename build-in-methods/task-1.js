// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377

"use strict"

function baseConverter(num, currentBase, wantedBase) {
    var stringify = num.toString(wantedBase) + "";
        
    return parseInt(stringify, currentBase)
};

console.log(baseConverter(29, 10, 2));
