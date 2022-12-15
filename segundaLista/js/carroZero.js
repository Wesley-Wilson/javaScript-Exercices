// carro zero
 // Solicita um valor, soma o valor pela variável distribuidor e impostos e exibe seu resultado.

 let custoFabricacao = parseInt(prompt("Informe o valor de custo da fabricação do veículo:"));
 let distribuidor = 28/100 * custoFabricacao;
 let imposto = 45/100 * custoFabricacao;
 let precoFinal = distribuidor + imposto + custoFabricacao;

 window.alert("Custo da distribuidora: "+distribuidor);
 window.alert("Custo de tributos: "+imposto);
 window.alert("Valor final do veículo: "+precoFinal);
