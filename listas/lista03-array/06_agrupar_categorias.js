const produtos = [
  { nome: "Banana", categoria: "Frutas" },
  { nome: "Maçã", categoria: "Frutas" },
  { nome: "Cenoura", categoria: "Legumes" },
  { nome: "Alface", categoria: "Verduras" },
  { nome: "Batata", categoria: "Legumes" }
];

const agrupados = produtos.reduce((acc, p) => {
  (acc[p.categoria] ??= []).push(p);
  return acc;
}, {});

console.log(agrupados);