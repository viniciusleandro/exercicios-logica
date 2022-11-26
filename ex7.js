let qtdMacas = parseInt(prompt("escreva o numero de maças compradas:"))
let precoMaca = 0.30
let total = 0
if (qtdMacas < 12) {
    total = qtdMacas * precoMaca
    console.log("valor total a pagar é:" + total)
} else {
    precoMaca = 0.25
    total = qtdMacas * precoMaca
    console.log("valor total a pagar é:" + total)
}
