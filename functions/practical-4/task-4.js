// Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

// function secondLargest(arr) {
//     var firstLargest = -Infinity;
//     var secondLargest = -Infinity;

//     for (var i = 0; i < arr.length; i++) {
//         if ( arr[i] > firstLargest ) {
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest && secondLargest < firstLargest){
//             secondLargest = arr[i]
//         }
//     }

//     return secondLargest
// }


input = [4, 2, 2, -1, 6]

// console.log(secondLargest(input));

// prev func give me good result according to task solution
// but i think it is wrong. second largest is 4 so:

function secondLargestV2(arr) {
    var firstLargest = -Infinity
    var secondLargest = -Infinity

    for(var i = 0; i < arr.length; i++) {
        if( firstLargest < arr[i]){
            firstLargest = arr[i]
        }

        if( (secondLargest < arr[i])  && (secondLargest < firstLargest)) {
            console.log(secondLargest)           
            secondLargest = arr[i]          // aaaaaaaaaaaaaaaaaaaaaaaaaaaa
        }
    }

    return "V2 " + secondLargest
}


console.log(secondLargestV2(input));




