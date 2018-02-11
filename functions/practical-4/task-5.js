// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumOfPositives(arr) {
    sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum+=arr[i]
        }
    }
    
    return sum
}

input = [3, 11, -5, -3, 2]

console.log(sumOfPositives(input));
