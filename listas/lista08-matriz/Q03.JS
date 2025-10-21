const prompt = require("prompt-sync")();

let numeros = [];
for (let i = 0; i < 3; i++) {
  numeros.push(Number(prompt(`Digite o número ${i + 1}: `)));
}

console.log("Array normal:", numeros);
console.log("Array invertido:", numeros.reverse());