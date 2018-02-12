// Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

"use strict"

function isPrime(num) {
    var returnThis = "" 
    for(var i = 2 ; i < num -1; i++){
        if(num % i === 0) {
            return "its not Prime"
        } 
    }
    return "its prime"
}

console.log(isPrime(43));
