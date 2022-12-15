// percentual de votos
//Solicita 5 valores, o nome do município, quantidade total de eleitores, quantidade de votos do tipo branco, nulo e válido. Logo após armazena em uma variável e calcula seu percentual em relação ao número total de eleitores. Exibe por fim seu resultado.

let totalEleitor = parseInt(prompt("Digite o total de eleitores :"));
let votoValido = parseInt(prompt("total de Votos válidos:"));
let votoNulo = parseInt(prompt("total de Votos nulos:"));
let votoBranco = parseInt(prompt("total de Votos brancos:"));

let votoValidoo = (100*votoValido)/totalEleitor;
let votoNuloo = (100*votoNulo)/totalEleitor;
let votoBrancoo = (100*votoBranco)/totalEleitor;

window.alert(" Porcentagem de votos Válidos: "+votoValidoo.toFixed(2)+"%\n Porcentagem de votos Nulos: "+votoNuloo.toFixed(2)+"%\n Porcentagem de votos Brancos: "+votoBrancoo.toFixed(2)+"%");