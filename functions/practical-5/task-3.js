// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

"use strict"

var inputArray = [1,2,3,4,5,6]
var k = 2

function splitArraysOnElement(arrayToSplit, elementToSplitOn) {     //create function which will split array into two parts on given element
    var firstPart = [];
    var firstPartIndex = 0;
    var restOfArray = [];
    var restOfArrayIndex = 0

    for(var i = 0; i < arrayToSplit.length; i++) {
        if(i < elementToSplitOn) {
            firstPart[firstPartIndex] = arrayToSplit[i]
            firstPartIndex++
        } else {
            restOfArray[restOfArrayIndex] = arrayToSplit[i]
            restOfArrayIndex++
        }
    }
    
    return [firstPart, restOfArray]
}

var resultOfSpliting = splitArraysOnElement(inputArray, 2);

var elementOneForConcatenation = resultOfSpliting[1];
var elementTwoForConcatenation = resultOfSpliting[0];

function concetenateArrays(startArray, arrayToAdd) {
    var resultOfConcatenation = [];
    var resultOfConcatenationIndex = 0
    var resultOfConcatenationLength = startArray.length + arrayToAdd.length
    var indexOfArrayToAdd = 0    

    for (var i = 0; i < resultOfConcatenationLength; i++) {                               // just being skipped?
        if(i < startArray.length) {
            resultOfConcatenation[resultOfConcatenationIndex] = startArray[i]
            resultOfConcatenationIndex++
        } else {
            
            resultOfConcatenation[resultOfConcatenationIndex] = arrayToAdd[j]
            resultOfConcatenationIndex++
            indexOfArrayToAdd++
        }
    }

    return resultOfConcatenation
}

console.log(concetenateArrays(elementOneForConcatenation, elementTwoForConcatenation));
