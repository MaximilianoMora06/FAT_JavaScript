let anio = parseInt(prompt("Ingresa un año:"));

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

if (esBisiesto(anio)) {
    console.log("El año ingresado es bisiesto.");
} else {
    console.log("El año ingresado no es bisiesto.");
}
