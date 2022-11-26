let custoCarro = parseFloat(prompt("escreva o custo do carro"))
let percentDist = 0.28
let percentImp = 0.45

let percent1 = custoCarro * percentDist;
let percent2 = custoCarro * percentImp;

let custofinal = custoCarro + percent1 + percent2


console.log("o custo do carro é " + custofinal)
