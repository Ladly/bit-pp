// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

"use strict"

var inputArray = [NaN, 0, 15, false, -22, '', undefined, 47, null, 3, Infinity, "somestring"] // also from p3 t3 but added infinity

// copied function from practical 3 task 3 (renamed and styled a bit but concept is there)

function filterNonNumberArrayElements(arrayToFilter) {
    var filteredArray = []
    var filteredArrayIndex = 0
    
    for (var i = 0; i < arrayToFilter.length; i++) {
        if (!!arrayToFilter[i] === false || isFinite(arrayToFilter[i]) === false || typeof arrayToFilter[i] === "string") {
            continue;
        } else {
            filteredArray[filteredArrayIndex] = arrayToFilter[i]
            filteredArrayIndex++
        }
    }
    
    return filteredArray
}

var filteredArrayOFNumbers = filterNonNumberArrayElements(inputArray);

// might be good idea to create function to compare 2 arguments- something like findMax(a, b) { ... } and to implement it to find max array. 
// maybe that function should be written as literal?

function findMaxInArray(arrayToFindMax) {
    var maxNumber = -Infinity
    for(var i = 0; i < arrayToFindMax.length; i++) {
        if(arrayToFindMax[i] > maxNumber){
            maxNumber = arrayToFindMax[i]
        }
    }

    return maxNumber
}

console.log(findMaxInArray(filteredArrayOFNumbers));



