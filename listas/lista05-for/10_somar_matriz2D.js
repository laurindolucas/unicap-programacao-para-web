const m = [[1,2],[3,4],[5,6]];
let soma = 0;

for (let i = 0; i < m.length; i++) {
  for (let j = 0; j < m[i].length; j++) {
    soma += m[i][j];
  }
}
console.log("Soma =", soma);