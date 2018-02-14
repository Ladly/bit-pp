// Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable() {
    var result = ""
    for(var i = 1; i < 12; i++) {
        for(var j = 1; j <= 12; j++) {
            result += (i * j) + " "
            if(j === 12) {
                result += "\n"
            }
        }
    }

    return result
}

console.log(multiplicationTable());

