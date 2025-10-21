function somaTres(a, b, c) {
  return a + b + c;
}

function mediaTres(a, b, c) {
  let soma = somaTres(a, b, c);
  return soma / 3;
}

let n1 = 5, n2 = 10, n3 = 15;

console.log("Soma:", somaTres(n1, n2, n3));
console.log("Média:", mediaTres(n1, n2, n3));