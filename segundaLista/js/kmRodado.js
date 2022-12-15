// gastos por km rodado 
//Solicita dois valores, calcula a distancia em uma variável e os litros usados em outra. E exibe separadamente a velocidade, tempo, distancia e litros usado.

let velocidade = parseFloat(prompt("Informe a velocidade média:"));
let tempoMedio = parseFloat(prompt("Informe o tempo gasto:"));

let distancia = tempoMedio * velocidade;
let litroUsado = distancia / 12;

window.alert(" Velocidade média:  "+velocidade+ "\n Tempo gasto: "+tempoMedio+ "\n Distância percorrida: "+distancia+ "\n Litros usados: "+litroUsado);