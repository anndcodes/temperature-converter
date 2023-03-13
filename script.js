////////// variables declaration

const btnConvert = document.getElementById("btnConvert");
const btnClean = document.getElementById("btnClean");

let celsius = document.querySelector(".celsius-value");
let fahrenheit = document.querySelector(".fahrenheit-value");
let kelvin = document.querySelector(".kelvin-value");


///////// btnConvert function

btnConvert.addEventListener('click', () => {
  if(celsius.value) {
    let fahrenheitValue = (celsius.value * 9/5) + 32;
    fahrenheit.value = fahrenheit.textContent = fahrenheitValue.toFixed(1) + " °F";
    /////
    let kelvinValue = (celsius.value * 1) + 273.15;
    kelvin.value = kelvin.textContent = kelvinValue.toFixed(1) + " K";

  } else if(fahrenheit.value) {
    let celsiusValue = (fahrenheit.value - 32) * 5/9;
    celsius.value = celsius.textContent = celsiusValue.toFixed(1) + " °C";
    /////
    let kelvinValue = (fahrenheit.value - 32) * 5/9 + 273.15;
    kelvin.value = kelvin.textContent = kelvinValue.toFixed(1) + " K";

  } else if(kelvin.value) {
    let celsiusValue = kelvin.value - 273.15;
    celsius.value = celsius.textContent = celsiusValue.toFixed(1) + " °C";
    /////
    let fahrenheitValue = (kelvin.value - 273.15) * 9/5 + 32;
    fahrenheit.value = fahrenheit.textContent = fahrenheitValue.toFixed(1) + " °F"

  } else {
    
  }
}) 