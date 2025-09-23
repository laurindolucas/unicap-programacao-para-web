function mediaMovel(arr, k) {
  if (k > arr.length) return [];

  const medias = [];

  for (let i = 0; i <= arr.length - k; i++) {
    const janela = arr.slice(i, i + k);
    const soma = janela.reduce((acc, val) => acc + val, 0);
    medias.push(soma / k);
  }

  return medias;
}

console.log(mediaMovel([1, 2, 3, 4, 5], 3)); 