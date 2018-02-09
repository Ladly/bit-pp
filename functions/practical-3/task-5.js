// Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

function getLast(arr, numOfElements) {
    if (numOfElements === undefined) {
        for(var i = arr.length -1; i >= 0; i--){
            return arr[i]
        } 
    } else {
        newArray = []
        newArrayIndex = -1
        for(var i = arr.length-numOfElements; i < arr.length; i++) {
                newArrayIndex++
                newArray[newArrayIndex] = arr[i]
        }
        return newArray
    }
}

console.log(getLast([4, 2, 5, 7, 9, 0, -2, 3], 5));


