// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"

var randomAddress = "somerandomaddress@example.com"

function protectAddress(str) {
    var dots = "..."
    var firstPart = str.slice(0, 5)
    console.log(firstPart);
    
}

console.log(protectAddress(randomAddress));

