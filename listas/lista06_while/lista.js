    // ====================== QUESTÃO 1 ======================
    let nota = 11;
    while (nota < 0 || nota > 10) {
        console.log("Nota inválida! Informe novamente.");
        nota = 7; // simulação de entrada válida
    }
    console.log("Nota válida:", nota);

    // ====================== QUESTÃO 2 ======================
    let usuario = "user1";
    let senha = "user1";
    while (senha === usuario) {
        console.log("Senha não pode ser igual ao usuário!");
        senha = "1234"; // corrigido
    }
    console.log("Usuário e senha válidos:", usuario, senha);

    // ====================== QUESTÃO 3 ======================
    let nome = "Jo";
    while (nome.length <= 3) {
        console.log("Nome inválido!");
        nome = "João";
    }
    let idade = -1;
    while (idade < 0 || idade > 150) {
        console.log("Idade inválida!");
        idade = 30;
    }
    let salario = -1000;
    while (salario <= 0) {
        console.log("Salário inválido!");
        salario = 2500;
    }
    let sexo = "x";
    while (sexo !== "f" && sexo !== "m") {
        console.log("Sexo inválido!");
        sexo = "m";
    }
    let estadoCivil = "x";
    while (!["s", "c", "v", "d"].includes(estadoCivil)) {
        console.log("Estado civil inválido!");
        estadoCivil = "c";
    }
    console.log("Dados válidos:", nome, idade, salario, sexo, estadoCivil);

    // ====================== QUESTÃO 4 ======================
    let popA = 80000, popB = 200000, anos = 0;
    while (popA < popB) {
        popA += popA * 0.03;
        popB += popB * 0.015;
        anos++;
    }
    console.log("Anos para A ultrapassar B:", anos);

    // ====================== QUESTÃO 5 ======================
    let popA2 = 50000, popB2 = 120000, taxaA = 0.04, taxaB = 0.02, anos2 = 0;
    while (popA2 < popB2) {
        popA2 += popA2 * taxaA;
        popB2 += popB2 * taxaB;
        anos2++;
    }
    console.log("Anos (entrada usuário):", anos2);

    // ====================== QUESTÃO 6 ======================
    let i = 1, numeros = "";
    while (i <= 20) {
        console.log(i); // um abaixo do outro
        numeros += i + " ";
        i++;
    }
    console.log("Números lado a lado:", numeros);

    // ====================== QUESTÃO 7 ======================
    let nums7 = [5, 12, 7, 20, 9];
    let index = 1;
    let maior = nums7[0];
    while (index < nums7.length) {
        if (nums7[index] > maior) maior = nums7[index];
        index++;
    }
    console.log("Maior número:", maior);

    // ====================== QUESTÃO 8 ======================
    let nums8 = [10, 20, 30, 40, 50];
    index = 0;
    let soma8 = 0;
    while (index < nums8.length) {
        soma8 += nums8[index];
        index++;
    }
    console.log("Soma:", soma8, "Média:", soma8 / nums8.length);

    // ====================== QUESTÃO 9 ======================
    i = 1;
    while (i <= 50) {
        if (i % 2 !== 0) console.log(i);
        i++;
    }

    // ====================== QUESTÃO 10 ======================
    let inicio = 5, fim = 10;
    let intervalo = [];
    i = inicio + 1;
    while (i < fim) {
        intervalo.push(i);
        i++;
    }
    console.log("Intervalo:", intervalo);

    // ====================== QUESTÃO 11 ======================
    let somaIntervalo = 0;
    index = 0;
    while (index < intervalo.length) {
        somaIntervalo += intervalo[index];
        index++;
    }
    console.log("Soma do intervalo:", somaIntervalo);

    // ====================== QUESTÃO 12 ======================
    let tabuada = 5;
    i = 1;
    while (i <= 10) {
        console.log(`${tabuada} X ${i} = ${tabuada * i}`);
        i++;
    }

    // ====================== QUESTÃO 13 ======================
    let base = 2, expoente = 5, resultado13 = 1;
    i = 0;
    while (i < expoente) {
        resultado13 *= base;
        i++;
    }
    console.log(`${base} elevado a ${expoente} =`, resultado13);

    // ====================== QUESTÃO 14 ======================
    let nums14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    i = 0;
    let pares = 0, impares = 0;
    while (i < nums14.length) {
        if (nums14[i] % 2 === 0) pares++;
        else impares++;
        i++;
    }
    console.log("Pares:", pares, "Ímpares:", impares);

    // ====================== QUESTÃO 15 ======================
    let nFibo = 10;
    let fibo = [1, 1];
    i = 2;
    while (i < nFibo) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        i++;
    }
    console.log("Fibonacci até o", nFibo, "º termo:", fibo);

    // ====================== QUESTÃO 16 ======================
    let fibo16 = [0, 1];
    while (true) {
        let proximo = fibo16[fibo16.length - 1] + fibo16[fibo16.length - 2];
        if (proximo > 500) break;
        fibo16.push(proximo);
    }
    console.log("Fibonacci até 500:", fibo16);

    // ====================== QUESTÃO 17 ======================
    let nFat = 5, fat = 1;
    i = 2;
    while (i <= nFat) {
        fat *= i;
        i++;
    }
    console.log(`${nFat}! =`, fat);

    // ====================== QUESTÃO 18 ======================
    let nums18 = [10, 20, 5, 8, 15];
    let menor = nums18[0], maior18 = nums18[0], soma18 = 0;
    i = 0;
    while (i < nums18.length) {
        if (nums18[i] < menor) menor = nums18[i];
        if (nums18[i] > maior18) maior18 = nums18[i];
        soma18 += nums18[i];
        i++;
    }
    console.log("Menor:", menor, "Maior:", maior18, "Soma:", soma18);

    // ====================== QUESTÃO 19 ======================
    let nums19 = [10, 200, 1500, 500, 800];
    menor = Infinity; maior18 = -Infinity; soma18 = 0;
    i = 0;
    while (i < nums19.length) {
        if (nums19[i] >= 0 && nums19[i] <= 1000) {
            if (nums19[i] < menor) menor = nums19[i];
            if (nums19[i] > maior18) maior18 = nums19[i];
            soma18 += nums19[i];
        }
        i++;
    }
    console.log("Menor:", menor, "Maior:", maior18, "Soma:", soma18);

    // ====================== QUESTÃO 20 ======================
    nFat = 5;
    if (nFat > 0 && nFat < 16) {
        fat = 1; i = 2;
        while (i <= nFat) { fat *= i; i++; }
        console.log(`${nFat}! =`, fat);
    }

    // ====================== QUESTÃO 21 ======================
    let num21 = 7, primo = true;
    i = 2;
    while (i < num21) {
        if (num21 % i === 0) primo = false;
        i++;
    }
    console.log(num21, "é primo?", primo);

    // ====================== QUESTÃO 22 ======================
    let num22 = 12, divisores = [];
    primo = true; i = 2;
    while (i < num22) {
        if (num22 % i === 0) {
            divisores.push(i);
            primo = false;
        }
        i++;
    }
    console.log(num22, "é primo?", primo);
    if (!primo) console.log("Divisível por:", divisores);

    // ====================== QUESTÃO 23 ======================
    let N23 = 20, primos23 = [], contDiv = 0;
    i = 2;
    while (i <= N23) {
        let primoTemp = true;
        let j = 2;
        while (j < i) {
            contDiv++;
            if (i % j === 0) primoTemp = false;
            j++;
        }
        if (primoTemp) primos23.push(i);
        i++;
    }
    console.log("Primos até", N23, ":", primos23, "Testes:", contDiv);
    // ====================== QUESTÃO 24 ======================
    let notas = [8,7,9,10,6];
    let somaNotas = 0;
    i = 0;
    while(i < notas.length){
        somaNotas += notas[i];
        i++;
    }
    console.log("Média das notas:", somaNotas / notas.length);

    // ====================== QUESTÃO 25 ======================
    let idades = [10,20,30,40,50];
    let somaIdades = 0;
    i = 0;
    while(i < idades.length){
        somaIdades += idades[i];
        i++;
    }
    let mediaIdade = somaIdades/idades.length;
    let tipoTurma = mediaIdade <= 25 ? "Jovem" : (mediaIdade <= 60 ? "Adulta" : "Idosa");
    console.log("Média de idade:", mediaIdade,"- Turma:", tipoTurma);

    // ====================== QUESTÃO 26 ======================
    let totalEleitores = 5;
    let votos = [0,0,0]; // candidatos 1,2,3
    i = 0;
    while(i < totalEleitores){
        let voto = i%3; // simulação de voto
        votos[voto]++;
        i++;
    }
    console.log("Votos por candidato:", votos);

    // ====================== QUESTÃO 27 ======================
    let qtdTurmas = 3;
    let alunosPorTurma = [35,28,40];
    let somaAlunos = 0;
    i=0;
    while(i<qtdTurmas){
        somaAlunos += alunosPorTurma[i];
        i++;
    }
    console.log("Média de alunos por turma:", somaAlunos/qtdTurmas);

    // ====================== QUESTÃO 28 ======================
    let qtdCDs = 5;
    let valoresCD = [10,20,15,12,18];
    let totalCD = 0;
    i=0;
    while(i<qtdCDs){
        totalCD += valoresCD[i];
        i++;
    }
    console.log("Total gasto:", totalCD,"- Média por CD:", totalCD/qtdCDs);

    // ====================== QUESTÃO 29 ======================
    let precoProduto = 1.99;
    i=1;
    while(i<=50){
        console.log(i,"- R$", (precoProduto*i).toFixed(2));
        i++;
    }

    // ====================== QUESTÃO 30 ======================
    let precoPao = 0.18;
    i=1;
    while(i<=50){
        console.log(i,"- R$", (precoPao*i).toFixed(2));
        i++;
    }

    // ====================== QUESTÃO 31 ======================
    let produtos = [2.2,5.8,0]; // simulação
    let totalCompra = 0;
    i=0;
    while(i<produtos.length){
        totalCompra += produtos[i];
        i++;
    }
    let dinheiro = 20;
    console.log("Total:", totalCompra,"Dinheiro:",dinheiro,"Troco:", (dinheiro-totalCompra).toFixed(2));

    // ====================== QUESTÃO 32 ======================
    let temperaturas = [25,30,20,18,35];
    let somaTemp = 0;
    let minTemp = temperaturas[0], maxTemp = temperaturas[0];
    i=0;
    while(i<temperaturas.length){
        if(temperaturas[i] < minTemp) minTemp = temperaturas[i];
        if(temperaturas[i] > maxTemp) maxTemp = temperaturas[i];
        somaTemp += temperaturas[i];
        i++;
    }
    console.log("Mínima:", minTemp,"Máxima:",maxTemp,"Média:", somaTemp/temperaturas.length);

    // ====================== QUESTÃO 33 ======================
    let num33 = 11, primo33 = true;
    i=2;
    while(i<num33){
        if(num33%i===0) primo33=false;
        i++;
    }
    console.log(num33,"é primo?", primo33);

    // ====================== QUESTÃO 34 ======================
    let N34 = 20;
    let primos34 = [];
    i=2;
    while(i<=N34){
        let isPrimo = true;
        let j=2;
        while(j<i){
            if(i%j===0) isPrimo=false;
            j++;
        }
        if(isPrimo) primos34.push(i);
        i++;
    }
    console.log("Primos até",N34,":",primos34);

    // ====================== QUESTÃO 35 ======================
    let num35 = 5, inicio35 = 4, fim35 = 7;
    if(fim35 >= inicio35){
        i = inicio35;
        while(i<=fim35){
            console.log(`${num35} X ${i} = ${num35*i}`);
            i++;
        }
    }

    // ====================== QUESTÃO 36 ======================
    let clientes = [
        {codigo:1, altura:1.8, peso:80},
        {codigo:2, altura:1.6, peso:70},
        {codigo:3, altura:1.9, peso:90},
    ];
    let maisAlto = clientes[0], maisBaixo = clientes[0], maisGordo = clientes[0], maisMagro = clientes[0];
    let somaAlt = 0, somaPeso = 0;
    i=0;
    while(i<clientes.length){
        let c = clientes[i];
        if(c.altura>maisAlto.altura) maisAlto=c;
        if(c.altura<maisBaixo.altura) maisBaixo=c;
        if(c.peso>maisGordo.peso) maisGordo=c;
        if(c.peso<maisMagro.peso) maisMagro=c;
        somaAlt += c.altura;
        somaPeso += c.peso;
        i++;
    }
    console.log("Mais alto:", maisAlto,"Mais baixo:", maisBaixo,"Mais gordo:", maisGordo,"Mais magro:", maisMagro);
    console.log("Média altura:", somaAlt/clientes.length,"Média peso:", somaPeso/clientes.length);

    // ====================== QUESTÃO 37 ======================
    let anoInicio = 1995, salario = 1000, aumento = 0.015;
    let anoAtual = 2025;
    i = 1996;
    while(i<=anoAtual){
        salario += salario*aumento;
        aumento *=2;
        i++;
    }
    console.log("Salário atual:", salario.toFixed(2));

    // ====================== QUESTÃO 38 ======================
    let cidades = [
        {codigo:1, veiculos:1500, acidentes:30},
        {codigo:2, veiculos:3000, acidentes:20},
        {codigo:3, veiculos:1800, acidentes:10},
        {codigo:4, veiculos:2500, acidentes:25},
        {codigo:5, veiculos:1000, acidentes:15},
    ];
    let maxIndice = cidades[0], minIndice = cidades[0], somaVeiculos = 0, somaAcidentesMenos2000 = 0, contMenos2000 =0;
    i=0;
    while(i<cidades.length){
        let c = cidades[i];
        let indice = c.acidentes/c.veiculos;
        if(indice > maxIndice.acidentes/maxIndice.veiculos) maxIndice=c;
        if(indice < minIndice.acidentes/minIndice.veiculos) minIndice=c;
        somaVeiculos += c.veiculos;
        if(c.veiculos<2000){
            somaAcidentesMenos2000 += c.acidentes;
            contMenos2000++;
        }
        i++;
    }
    console.log("Maior índice:", maxIndice,"Menor índice:",minIndice);
    console.log("Média veículos:", somaVeiculos/cidades.length,"Média acidentes (<2000 veículos):", somaAcidentesMenos2000/contMenos2000);

    // ====================== QUESTÃO 39 ======================
    let divida = 1000;
    let parcelas = [1,3,6,9,12];
    let juros = [0,10,15,20,25];
    i=0;
    while(i<parcelas.length){
        let total = divida + divida*(juros[i]/100);
        console.log(`Parcelas: ${parcelas[i]} - Juros: ${juros[i]}% - Valor parcela: ${(total/parcelas[i]).toFixed(2)} - Total: ${total.toFixed(2)}`);
        i++;
    }

    // ====================== QUESTÃO 40 ======================
    let cardapio = {
        100:1.2,101:1.3,102:1.5,103:1.2,104:1.3,105:1.0
    };
    let pedidos = [{codigo:100, qtd:2},{codigo:102,qtd:1}];
    let totalPedido=0;
    i=0;
    while(i<pedidos.length){
        let p = pedidos[i];
        let valor = cardapio[p.codigo]*p.qtd;
        console.log(`Código ${p.codigo} - Quantidade ${p.qtd} - Valor: R$ ${valor.toFixed(2)}`);
        totalPedido += valor;
        i++;
    }
    console.log("Total do pedido: R$", totalPedido.toFixed(2));