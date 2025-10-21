function encontrarIndices(vetor, numero) {
  let indices = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) indices.push(i);
  }
  return indices.length > 0 ? indices : "Número não encontrado";
}

console.log(encontrarIndices([2, 5, 3, 5, 1, 5], 5));