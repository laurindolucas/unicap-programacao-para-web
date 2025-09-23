const pessoas = [
  { nome: "Ana", idade: 30 },
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 25 }
];


const pessoasOrdenadas = [...pessoas].sort((a, b) => a.idade - b.idade || a.nome.localeCompare(b.nome));

console.log(pessoasOrdenadas);



