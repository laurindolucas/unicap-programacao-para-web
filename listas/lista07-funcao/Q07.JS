function imprimirPadrao(n) {
  for (let i = 1; i <= n; i++) {
    console.log(String(i).repeat(i));
  }
}

const n = 5;
imprimirPadrao(n);