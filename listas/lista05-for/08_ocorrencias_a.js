const arr = ['a', 'b', 'a', 'c', 'a'];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'a') {
    count++;
  }
}
console.log("Quantidade de 'a' =", count);