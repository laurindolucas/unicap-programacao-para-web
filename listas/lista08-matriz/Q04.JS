const prompt = require("prompt-sync")();

let qtd = Number(prompt("Quantos números deseja inserir? "));
let numeros = [];

for (let i = 0; i < qtd; i++) {
  numeros.push(Number(prompt(`Digite o número ${i + 1}: `)));
}

console.log("Array original:", numeros);
console.log("Array invertido:", [...numeros].reverse());