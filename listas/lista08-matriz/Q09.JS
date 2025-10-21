
const prompt = require("prompt-sync")();

let linhas = Number(prompt("Digite o número de linhas: "));
let colunas = Number(prompt("Digite o número de colunas: "));

let matriz = [];
let valor = 1;

for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = valor++;
  }
}

console.log("Matriz gerada:");
console.table(matriz);