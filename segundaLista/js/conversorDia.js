// conversor de idade em dias
 //Solicita três valores, armazena na variável idadeEmDia, multiplica pi pelo raio ao quadrado. Exibindo por fim a área do círculo.
 let ano = parseInt(prompt("Idade atual:"));
 let mes = parseInt(prompt(ano+" anos e quantos meses?"));
 let dia = parseInt(prompt(ano+" anos, "+mes+" meses e quantos dias?"));

 let idadeEmDia = ano * 365 + mes * 30 + dia;

 window.alert("Sua idade em dias é de "+idadeEmDia+" dias.");