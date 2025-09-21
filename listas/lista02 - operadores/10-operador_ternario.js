let nota = 6.9;

let mensagem = nota >= 7 ? "Aprovado" : "Recuperação";
console.log("Resultado:", mensagem);

let saldo = 120;
let limite = 300;
let compra = 150;
let cartaoAtivo = true;

if ((saldo >= compra || limite >= compra) && cartaoAtivo) {
  console.log("Compra aprovada!");
} else {
  console.log("Compra negada!");
}

let apelido = "ninha";
let nome = "Ana";

let exibicao = apelido ?? nome ?? "Sem nome";
console.log("Exibição:", exibicao); // "Ana"

apelido = "";
exibicao = apelido ?? nome ?? "Sem nome";
console.log("Exibição com apelido vazio (??):", exibicao);

exibicao = apelido || nome || "Sem nome";
console.log("Exibição com apelido vazio (||):", exibicao);