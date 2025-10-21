function contarDigitos(num) {
  return Math.abs(num).toString().length;
}

console.log(contarDigitos(12345));
console.log(contarDigitos(-999));  
console.log(contarDigitos(0));     