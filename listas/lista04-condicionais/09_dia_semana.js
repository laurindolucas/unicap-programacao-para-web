const dia = Number(prompt("Digite um número de 1 a 7:"));
let nomeDia = "";

if (dia === 1) {
  nomeDia = "Domingo";
} else if (dia === 2) {
  nomeDia = "Segunda";
} else if (dia === 3) {
  nomeDia = "Terça";
} else if (dia === 4) {
  nomeDia = "Quarta";
} else if (dia === 5) {
  nomeDia = "Quinta";
} else if (dia === 6) {
  nomeDia = "Sexta";
} else if (dia === 7) {
  nomeDia = "Sábado";
} else {
  nomeDia = "Número inválido";
}

alert(nomeDia);