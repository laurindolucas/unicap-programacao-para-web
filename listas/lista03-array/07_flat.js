const arr = [[1, 2], [3, [4]], 5];

const soma = arr.flat(Infinity).reduce((acc, val) => acc + val, 0);

console.log(soma);