const pessoas = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Maria" }
];

function encontrarPorId(arr, alvoId) {
  const resultado = arr.find(obj => obj.id === alvoId);
  return resultado || null;
}

const pessoa = encontrarPorId(pessoas, 2);
console.log(pessoa);

const pessoaNaoExiste = encontrarPorId(pessoas, 99);
console.log(pessoaNaoExiste); 