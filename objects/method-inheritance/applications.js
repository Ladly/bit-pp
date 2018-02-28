// Create constructor functions with properties representing the following:
// WebApp: name, url, technologies, licence, stars
// MobileApp: name, platforms, licence, stars
 
// All web applications should inherit methods: 
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React
 
// All mobile applications should inherit methods:
// getData which prints out all the information
// forAndroid which checks if one of the platforms the application is developed for is Android

// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
// like which increases the number of stars by one
// showStars which prints out the number of stars 


function Apps(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

Apps.prototype.isCCLicence = function(){
    if(this.licence === "CC") {
        return "it is CC licensed";
    } else {
        return "it is not CC licensed";
    }
};

Apps.prototype.like = function() {
    return this.stars++;
};

Apps.prototype.showStars = function() {
   return this.stars; 
};

function WebApp(name, url, technologies, licence, stars) {
    Apps.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(Apps.prototype);
WebApp.prototype.constructor = WebApp;


WebApp.prototype.getData = function() {
    return this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars;
};

WebApp.prototype.reactBased = function() {
    if(this.technologies === "react") {
        return "it is made in react";
    } else {
        return "it is not made in react";
    }
};

function MobileApp(name, platforms, licence, stars) {
    Apps.apply(this, [name, licence, stars]);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(Apps.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function() {
    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
};

MobileApp.prototype.forAndroid = function() {
    if (this.platforms === 'android') {
        return "its android app";
    } else {
        return "its not android app";
    }
};

var fluffyCat = new WebApp("Fluffy cat", "http://somename.com", "react", "MIT", 200);
var strangeAndroidApp = new MobileApp("Strange app", "iOS", "CC", 150);

 console.log(fluffyCat.getData());
 console.log(fluffyCat.reactBased());
 console.log(strangeAndroidApp.getData());
 console.log(strangeAndroidApp.forAndroid());

 console.log(fluffyCat.isCCLicence());
 console.log(strangeAndroidApp.isCCLicence());
 console.log(strangeAndroidApp.like());
 console.log(strangeAndroidApp.showStars());
 
 
  