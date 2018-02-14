// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

"use strict"

// this function only covers situation when both arrays are same length, if not it will be messy

var inputArrayOne = ["a", "b", "c"]
var inputArrayTwo = [1, 2, 3]

// this function will create array either on even or odd indexes

// function createSpotedArray(arrayToSpot, evenOrOdd) {       // use 0 for even or 1 for odd 
//     var spotedArray = [];
//     var spotedArrayIndex = evenOrOdd;

//     for (var i = 0; i < arrayToSpot.length; i++) {
//         var element = arrayToSpot[i]
//         spotedArray[spotedArrayIndex] = element
//         spotedArrayIndex += 2
//     }

//     return spotedArray
// }

// var combiningArrayPartOne = createSpotedArray(inputArrayOne, 0)       // draged this guys under function so i dont pollute global?
// var combiningArrayPartTwo = createSpotedArray(inputArrayTwo, 1)

// function combineArrays(arr1, arr2) {
//     var combinedArr = []
//     var combinedArrIndex = 0

//     for(var i = 0; i < arr1.length + arr2.length; i++) {
//         if(i % 2 === 0) {
//         combinedArr[combinedArrIndex] = arr1[i]
//         combinedArrIndex ++
//         } else {
//             combinedArr[combinedArrIndex] = arr2[i]
//             combinedArrIndex ++
//         }

//     }

//     return combinedArr
// }

// console.log(combineArrays(combiningArrayPartOne, combiningArrayPartTwo))

function v2(arr1, arr2) {
    var newArray = []
    var newArrayIndex = 0 
    for(var i = 0; i < 2; i++) {
        if(i % 2 === 0) {
            newArray[newArrayIndex] = arr1[i]
            newArrayIndex++
        } else {
            newArray[newArrayIndex] = arr2[i]
            newArrayIndex++
        }
    }

    
    
    return newArray
}

console.log(v2(inputArrayOne, inputArrayTwo))