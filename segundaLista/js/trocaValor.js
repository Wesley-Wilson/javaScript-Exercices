//troca de valor por caracter
// Solicita os valores A e B e os troca passando seus valores para duas novas variaveis. E exibe seus valores.

//troca de valor por caracter
// Solicita dois valores, A e B, o valor A é armazenado na variavel C para manter sua informação original, após isto A recebe o valor de B, e por fim B recebe o valor de C

let a = prompt("Escreva algo para o valor A: ");
let b = prompt("Escreva algo mais para o valor B: ");
let c = a;
a = b;
b = c;

window.alert(" Valores trocados: \n A: "+a+"\n B: "+b);