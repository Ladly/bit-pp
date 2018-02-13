// Write a function that calculates the sum of odd elements of a given array. 
"use strict"
function sumOfOdds(arr) {
    var sum = 0

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0 ) {
            sum = sum + arr[i];
            
        }
    }
    return sum
}

var testArr = [2, 3, 5, 2, 11, 1, 1, 1]

console.log(sumOfOdds(testArr))