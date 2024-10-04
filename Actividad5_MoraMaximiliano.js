let fahrenheit = parseFloat(prompt("Ingresa una temperatura en Fahrenheit:"));

function convertirAFahrenheit(temperatura) {
    return (temperatura - 32) * 5/9;
}

console.log("La temperatura en Celsius es: " + convertirAFahrenheit(fahrenheit));
