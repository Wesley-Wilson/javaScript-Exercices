// reajuste salarial
// solicita 4 valores, nome do funcionário, seu salário atual e percentual de reajuste Incluí na variável novoSalario o salarioatual e o reajuste, por fim é feito o calculo e exibido o novo salário do funcionário.

 let nome = (prompt("Digite seu nome: "));
 let salarioMensal = parseInt(prompt("Informe seu salário mensal: R$"));
 let reajuste = parseInt(prompt("Percentual de reajuste: %"));
 let novoSalario = (reajuste / 100) * (salarioMensal) + salarioMensal;

 window.alert("O novo salário do funcionário "+nome+" é de R$"+novoSalario);

 



















