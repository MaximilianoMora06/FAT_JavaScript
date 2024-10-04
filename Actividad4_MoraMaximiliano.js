let numero = parseInt(prompt("Ingresa un número:"));

function esDivisiblePorCinco(num) {
    return num % 5 === 0;
}

console.log("¿El número es divisible por 5?: " + esDivisiblePorCinco(numero));
