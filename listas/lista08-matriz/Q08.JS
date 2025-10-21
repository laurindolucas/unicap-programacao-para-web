const prompt = require("prompt-sync")();

let n = Number(prompt("Digite um número para calcular o fatorial: "));
let fatoriais = [1]; // 0! = 1

for (let i = 1; i <= n; i++) {
  fatoriais[i] = i * fatoriais[i - 1];
}

console.log(`Fatoriais até ${n}! :`, fatoriais);