const idade = prompt("Digite sua idade");

if (idade >= 18 && idade <= 70) {
    alert("Voto obrigatorio!")
}else if( idade >= 16 && idade <=17 || idade > 70){
    alert("Voto facultativo")
}else{
    alert("Não pode votar")
}