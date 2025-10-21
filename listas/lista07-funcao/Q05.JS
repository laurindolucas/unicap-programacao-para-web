function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function listarPrimos(n) {
  for (let i = 1; i <= n; i++) {
    if (ehPrimo(i)) console.log(i);
  }
}

const n = 30;
console.log("Primos até", n, ":");
listarPrimos(n);