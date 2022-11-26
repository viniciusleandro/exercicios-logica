let numeroCarro = parseInt(prompt("escreva o numero de carros vendidos:"))
let valorVendas = parseFloat(prompt("escreva o valor total das vendas"))
let valorPorCarro = parseFloat(prompt("escreva o valor que recebe por carro vendido"))
let salarioFixo = 1500

let comissao = 0.05;
let comissaoValor = valorVendas * comissao;

let comissaoFixaCarro = numeroCarro * valorPorCarro

let salariofinal = salarioFixo + comissaoValor + comissaoFixaCarro


console.log("seu salario foi de " + salariofinal)
