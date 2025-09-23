const arrDuplicados =  [1,2,2,3,3,3,4];

const arr = arrDuplicados.filter((v, i, arr) => arr.indexOf(v) === i);

console.log(arr);