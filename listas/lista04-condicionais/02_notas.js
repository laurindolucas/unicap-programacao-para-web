const nota = prompt("digite uma nota");

if(nota >= 7 && nota <= 10){
    alert("Aprovado!")
}else if( nota >= 5 && nota <= 6.9){
    alert("Recuperação")
}else if( nota > 10 || nota < 0){
    alert("Nota inválida")
}else{
    alert("Reprovado")
}