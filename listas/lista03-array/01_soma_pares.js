const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrPar = arr.filter(num => num % 2 === 0);

const somaPares = arrPar.reduce((acc, val) => acc + val, 0);

console.log(somaPares);