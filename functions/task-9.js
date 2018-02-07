function sumOfOdds(arr) {
    var sum = 0

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0 ) {
            sum += arr[i]
        }
    }
    return sum
}

testArr = [2, 3, 3, 2, 11, 1, 1, 1]

console.log(sumOfOdds(testArr))