class ContaBancaria{
    constructor(saldoInicial){
        this.saldo = saldoInicial || 0;
    }

    depositar(valor){
        this.saldo += valor;
        console.log(`Deposito de R$${valor} realizado! \n
            Saldo atual: R$${this.saldo}`);
    }

    sacar(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado!\n
             Saldo atual: R$${this.saldo}`)
    }

    extrato(){
        console.log(`Saldo atual: R$${this.saldo}`)
    }
}

const minhaConta = new ContaBancaria(100);
minhaConta.extrato();
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.extrato();