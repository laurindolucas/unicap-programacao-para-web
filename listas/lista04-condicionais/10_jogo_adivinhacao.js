const numeroSecreto = 7;
const palpite = Number(prompt("Adivinhe o número secreto:"));

if (palpite < numeroSecreto) {
  alert("Muito baixo!");
} else if (palpite > numeroSecreto) {
  alert("Muito alto!");
} else {
  alert("Parabéns, você acertou!");
}