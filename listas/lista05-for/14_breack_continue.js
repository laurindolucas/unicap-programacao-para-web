for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue; 
  if (i % 7 === 0) {
    console.log("Primeiro múltiplo de 7:", i);
    break;
  }
}
