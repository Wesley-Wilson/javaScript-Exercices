// volume lata de óleo 
// Solicita dois valores, armazena na variável volume e efetua seu calculo. Por fim exibe seu resultado.

let raio = parseFloat(prompt("Digite o diâmetro do raio:"));
let altura = parseFloat(prompt("Altura:"));
let volume = 3.14159 * raio**2 * altura;

window.alert("O volume da lata de óleo é "+volume+" m³");