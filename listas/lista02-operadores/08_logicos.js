let temCadastro = true;
let senhaCorreta = true;

if (temCadastro && senhaCorreta) {
  console.log("Acesso liberado! Bem-vindo.");
} else {
  console.log("Acesso negado! Cadastro ou senha inválidos.");
}

if (temCadastro || senhaCorreta) {
  console.log("Entrando em modo visitante.");
} else {
  console.log("Nenhuma permissão encontrada.");
}