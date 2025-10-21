function somaImposto(taxaImposto, custo) {
  let valorFinal = custo + (custo * (taxaImposto / 100));
  return valorFinal;
}

console.log("Valor com imposto:", somaImposto(10, 200));