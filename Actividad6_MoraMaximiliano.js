let angulo1 = parseFloat(prompt("Ingresa el primer ángulo del triángulo:"));
let angulo2 = parseFloat(prompt("Ingresa el segundo ángulo del triángulo:"));
let angulo3 = parseFloat(prompt("Ingresa el tercer ángulo del triángulo:"));

let esTrianguloValido = (angulo1 + angulo2 + angulo3) === 180;

console.log("¿El triángulo es válido?: " + esTrianguloValido);
