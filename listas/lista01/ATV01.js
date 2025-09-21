let carro = {
    marca : "BMW",
    modelo : "M3",
    ano : "2022",
}

console.log(carro.marca);
console.log(carro["modelo"]);


carro.cor = "azul";
console.log(carro);

carro.ano = 2025;
console.log(carro);

delete carro.cor;
console.log(carro);

for (const prop in carro) {
    console.log(prop + ": " + carro[prop])

}

console.log(Object.keys(carro));
console.log(Object.values(carro));


let pessoa = {
    nome : "sergio",
    idade: 21,
    endereco: {
        rua : "rua nova",
        numero : 155,
        cidade : "olinda",
    
    }
}
console.log(pessoa.endereco.cidade); 

function Animal(nome, tipo) { 
    this.nome = nome; 
    this.tipo = tipo; 
  } 
  
  let cachorro = new Animal("Rex", "Cachorro"); 
  let gato = new Animal("Mimi", "Gato"); 
  
  console.log(cachorro); 
  console.log(gato); 