function simularDado(qtdLancamentos) {
  const frequencia = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < qtdLancamentos; i++) {
    const resultado = Math.floor(Math.random() * 6) + 1;
    frequencia[resultado]++;
  }

  console.log("Frequência após", qtdLancamentos, "lançamentos:");
  console.table(frequencia);
}

simularDado(1000000);