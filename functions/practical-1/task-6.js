function drawLines(num1, num2, num3) {
    var l1 = ""
    var l2 = ""
    var l3 = ""

    for(var i = 0; i < num1; i++) {
        l1 += "*"
    } 

    for(var j = 0; j < num2; j++){
        l2 += "*"
    }

    for (var z = 0; z < num3; z++ ) {
        l3 += "*"
    }
    console.log(l1)
    console.log(l2)
    console.log(l3)
    return ""
}

first = 4
sec = 1
fifth = 5

console.log(drawLines(first, sec, fifth))