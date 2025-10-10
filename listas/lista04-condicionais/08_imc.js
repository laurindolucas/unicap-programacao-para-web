const peso = Number(prompt("Digite seu peso (kg):"));
const altura = Number(prompt("Digite sua altura (m):"));

const imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc < 25) {
  classificacao = "Normal";
} else if (imc < 30) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}

alert("IMC: " + imc.toFixed(2) + " - " + classificacao);