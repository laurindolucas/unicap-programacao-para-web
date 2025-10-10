const usuario = prompt("Digite o usuário:");
const senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "1234") {
  alert("Login bem-sucedido");
} else {
  alert("Usuário ou senha inválidos");
}