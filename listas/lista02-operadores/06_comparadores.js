let a = "5"; 
let b = 5;   

console.log("a == b:", a == b); 
console.log("Explicação: '==' faz conversão de tipos, então '5' (string) é considerado igual a 5 (number).");

console.log("a === b:", a === b);
console.log("Explicação: '===' exige que valor e tipo sejam iguais, por isso '5' (string) é diferente de 5 (number).");