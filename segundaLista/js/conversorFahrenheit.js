// conversor fahrenheit
// Solicita um valor, armazena na variável celsius, é feito o calculo na variável fahrenheit, e exibe seu resultado.
let celcius = parseFloat(prompt("Graus celcius:"));
let fahrenheit = (9 * celcius + 160) / 5;

window.alert(fahrenheit.toFixed(1) +" F");