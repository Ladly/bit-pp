var num = 57;

if(typeof num === "number"){
    if (num >= 10 && num < 100) {
        var secondNum = num % 10
        var  firstNum = (num - secondNum)/ 10;  
        console.log(secondNum + "" + firstNum);
    } else {
        console.log("Error: Wrong number");
    }
} else {
    console.log('Error: NaN')
}

var newNum = 43;

var fnum = newNum.toString().charAt(0)
var snum = newNum.toString().charAt(1)

 var result = snum + fnum

 console.log(result)
