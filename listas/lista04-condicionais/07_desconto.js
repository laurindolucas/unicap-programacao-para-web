const valor = Number(prompt("Digite o valor da compra:"));
let desconto = 0;

if (valor < 100) {
  desconto = 0;
} else if (valor < 500) {
  desconto = valor * 0.10;
} else {
  desconto = valor * 0.20;
}

const total = valor - desconto;
alert("Valor final: R$ " + total);