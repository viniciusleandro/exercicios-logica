let eleitores = parseInt(prompt("escreva o numero total de eleitores"))
let brancos = parseInt(prompt("escreva o numero total de votos brancos"))
let nulos = parseInt(prompt("escreva o numero total de votos nulos"))
let validos = parseInt(prompt("escreva o numero total de votos validos"))

let percentBrancos = (brancos / eleitores) * 100
let percentNulos = (nulos / eleitores) * 100
let percentValidos = (validos / eleitores) * 100

console.log("o total de votos brancos foi de " + percentBrancos + "%")
console.log("o total de votos Nulos foi de " + percentNulos + "%")
console.log("o total de votos Validos foi de " + percentValidos + "%")
