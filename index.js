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
