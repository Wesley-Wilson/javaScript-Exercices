// conversor celcius 
// Solicita um valor, armazena na variável celsius, é feito o calculo na variável fahrenheit, e exibe seu resultado.

let fahrenheit = parseFloat(prompt("Graus fahrenheit:"));
let celcius = (fahrenheit-32)*(5/9);

window.alert(celcius.toFixed(1) +" C");