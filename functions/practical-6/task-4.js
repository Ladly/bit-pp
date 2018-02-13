// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

"use strict"

var celsiusTemperature = 5

function celsiusToFahrenheit(tempInCelsius) {
    var temperatureInFahrenheit = 0
    
    temperatureInFahrenheit = tempInCelsius / (5/9) + 32

    return  tempInCelsius+"°C is " + temperatureInFahrenheit +"°F"
}

console.log(celsiusToFahrenheit(celsiusTemperature));

var fahrenheitTemperature = 50

function fahrenheitToCelsius(tempInFahrenheit) {
    var temperatureInCelsius = 0
    
    temperatureInCelsius = tempInFahrenheit - 32 * 5/9

    return  tempInFahrenheit +"°F is " + temperatureInCelsius+"°C"    
}

console.log(fahrenheitToCelsius(fahrenheitTemperature));
