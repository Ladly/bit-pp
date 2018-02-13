// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"

"use strict"

function calculateSupply(age, amountPerDay) {
    var maxAge = 75;
    var amount = (75 - age) * 365 * amountPerDay

    return "You will need " + (amount - (amount % 10)) + " to last you until the ripe old age of " + maxAge
}

console.log(calculateSupply(36, 30.3));
