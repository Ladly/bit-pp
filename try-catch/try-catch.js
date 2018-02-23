console.log("lalala");


try {
    console.log("messing things up");    
    frr()    
} catch (err) {
    console.log("error " + err.message);    
    console.log(" am working");    
} finally {
    console.log("I will work no matter what");
    
}

console.log("I fked it up");

