// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 	Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 

var input = [2, 3, 8, -2, 11, 4];

var input2 = ["JavaScript", "Programming", "fun", "product"];

function findSmaller(array, smallerThan) {
    "use strict";
    var resultArray = [];

    for(var i = 0; i < array.length; i++) {
        if (array[i] < smallerThan) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}


console.log(findSmaller(input, 6));


function goPro(array) {
    "use strict";
    var resultArray = [];

    for(var i = 0; i < array.length; i++) {
        if(array[i].substring(0, 3) === "pro" || array[i].substring(0, 3) === "Pro") {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

console.log(goPro(input2));


function filterArray(array, callback) {
   return callback(array, 6);
} 

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8], findSmaller));

