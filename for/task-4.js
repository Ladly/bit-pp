var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

resString = ""

for (var i = 0; i < x.length; i++) {
    resString += x[i]
}
console.log(resString)
console.log(typeof resString)