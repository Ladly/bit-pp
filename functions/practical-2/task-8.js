function isPrime(num) {
    returnThis = "" 
    for(var i = 2 ; i < num -1; i++){
        if(num % i === 0) {
            return "its not Prime"
        } 
    }
    return "its prime"
}

console.log(isPrime(43));
