// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// Write a function that calculates the total price of your shopping list. 
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

var products = [{name: "apples", price: 100.142123}, {name: "milk", price: 81}, {name:"bananas", price: 150}];

function calculateTotal(array) {
    "use strict";
    var total = 0

    for(var i = 0; i < array.length; i++) {
        total += array[i].price;
    }

    return total;
}

// console.log(calculateTotal(products));

function calculateAverage(array, callback) {
    "use strict"

    var result = callback(array) / array.length

    return result.toPrecision(6)
}

console.log(calculateAverage(products, calculateTotal));

// finish him :D

// function mostExpensiveArticle(array) {
//     "use strict";
//     var result = "";
//     var highestPrice;
//     for(var i = 0; i < array.length; i++) {
//         highestPrice = Math.max(array[i-1].price, array[i])
//     }
// }

