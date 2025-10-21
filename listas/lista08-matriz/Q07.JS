const prompt = require("prompt-sync")();

let n = Number(prompt("Quantos números da sequência Fibonacci deseja? "));
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Sequência de Fibonacci:", fibonacci.slice(0, n));