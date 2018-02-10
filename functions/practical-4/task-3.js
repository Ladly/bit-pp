// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function findMin(arr) {
    var min = 0
    var index = 0

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min ) {
            min = arr[i]
            index = i
        }
    }

    return min + ", " + index
}


input = [4, 2, 2, -1, 6]

console.log(findMin(input));

