let nome =prompt("escreva seu nome:")
let idade = parseInt(prompt("escreva sua idade: "))
let caracteres = nome.length
let ano = new Date();
let anoAtual = ano.getFullYear() - idade
console.log("seu nome é "+ nome + " quantidade de caracteres são " + caracteres + " sua idade é " + idade + " nasceu em: " + anoAtual)