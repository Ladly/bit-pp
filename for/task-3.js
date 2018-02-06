var randomArr = [1, 2 ,3, 4 ,5];

var sum = 0
var prod = 1

for(var i = 0; i < 5; i++) {
    sum += randomArr[i]; //sum = sum + neki broj
    prod *= randomArr[i]
}
console.log(sum)
console.log(prod)