function ehPerfeito(num) {
  let soma = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) soma += i;
  }
  return soma === num && num !== 0;
}

function listarPerfeitos(n) {
  console.log("Números perfeitos até", n, ":");
  for (let i = 1; i <= n; i++) {
    if (ehPerfeito(i)) console.log(i);
  }
}

listarPerfeitos(10000);