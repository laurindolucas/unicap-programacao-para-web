const user = { id: 1, nome: 'Ana', ativo: true };

for (const k in user) {
  console.log(k + ": " + user[k]);
}