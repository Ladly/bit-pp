var a = 49;

if (a >= 10 && a < 100) {
    var y = a % 10
    var  x = (a - y)/ 10;  
    console.log(y + "" + x);
} else {
    console.log("Error");
}