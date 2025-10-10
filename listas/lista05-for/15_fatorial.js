const nFat = 5; 
let fat = 1;

for (let i = 2; i <= nFat; i++) {
  fat *= i;
}
console.log(`${nFat}! = ${fat}`);
