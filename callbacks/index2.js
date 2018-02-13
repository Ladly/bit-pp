function filterArray(arr, filter) {
    var filteredArr = [];

    for (var i = 0, j = 0; i < arr.length; i++) {
        if (filter(arr[i])) {
            filteredArr[j] = arr[i];
            j++;
        }
    }

    return filteredArr;
}

function filterFunc(element) {
    return (element % 5 === 0);
}

var ourArray = [23, 15, 6, 10, 30];
console.log(filterArray(ourArray, function (elem) {
    return !(elem % 15);
}));

var newarr = ourArray.filter(function (element) {
    return element % 2 != 0;
})

console.log(newarr);
