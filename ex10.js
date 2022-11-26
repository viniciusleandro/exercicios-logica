let anoNascimento = parseInt(prompt("seu ano de nascimento com 4 digitos:"));
let ano = new Date();
let ano2 = ano.getFullYear();
idade = ano2 - anoNascimento;
if (idade >= 18) {
    console.log("pode votar")
} else {
    console.log("nao pode votar")
}