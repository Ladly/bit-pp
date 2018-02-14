// Write a function to input temperature in Centigrade and convert to Fahrenheit.


// really? centrigrades? ok, centrigrades shall be

"use strict"

var currentTemperatureInCentrigrades = 5

function centigradeToFarenheitConverter(temperatureInCentigrades) {
    var temperatureInFarenheit = 0
    
    temperatureInFarenheit = temperatureInCentigrades / (5/9) + 32

    return temperatureInFarenheit
}

console.log(centigradeToFarenheitConverter(10));

