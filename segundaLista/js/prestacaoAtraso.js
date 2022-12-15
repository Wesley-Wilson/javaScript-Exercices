//prestacao em atraso
//solicita três valores, calcula a multa pela variável prestacao e exibe seu resultado.

let valorPrestacao = parseFloat(prompt("Valor da prestação:"));
let taxa = parseFloat(prompt("Taxa de acréscimo:"));
let tempoAtraso = parseFloat(prompt("Tempo de atraso:"));

let prestacao = valorPrestacao+(valorPrestacao*taxa/100)*tempoAtraso;

window.alert("Multa de pagamento atrasado: R$ "+prestacao);