// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
//     *****
//     *   *
//     *   *
//     *   *
//     *****

function createSquare(num) {
    var str = ""
    var sides = ""
    for (var i = 0; i < num; i++) {
        if (i === 0) {
            for (var j = 0; j < num; j++) {
                str += "*"
            }
            console.log( str )
        } else if (i > 0 && i < num - 1) {
            for (var g = 0; g < num; g++) {
                if (g === 0 && i === 1) {
                    sides += "*"
                } else if (g > 0 && g < num - 1 && i === 1) {
                    sides += " "
                } else if (g === num - 1 && i === 1) {
                    sides += "*"
                }
            }
            console.log(sides)
        } else if (i === num - 1) {
            console.log(str)
        }
    }
    return ""
}



console.log(createSquare(10))