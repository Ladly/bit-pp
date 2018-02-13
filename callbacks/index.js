function addOne(a) {
    return a + 1;
}


function multiplyByTwo(inputArray, something) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        newArray[i] = something(element * 2);
    }
    return newArray;
}

var someArray = [10, 20, 30];

console.log(multiplyByTwo(someArray, addOne));

// Anonymous callback function
console.log(multiplyByTwo(someArray,
    function (param) {
        return param + 5;
    }
));


