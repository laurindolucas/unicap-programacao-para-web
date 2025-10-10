const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const n3 = Number(prompt("Digite o terceiro número:"));
let maior = n1;

if (n2 > maior) {
  maior = n2;
}
if (n3 > maior) {
  maior = n3;
}

alert("O maior número é: " + maior);
