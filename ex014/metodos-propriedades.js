class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(x){
        this.saldo += x
    }
    sacar(y){
        this.saldo -= y
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome,email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoupanca(x){
        this.saldoPoup += x;
    }
    
    sacarPoupanca(y){
        this.saldoPoup -= y;
    }
}

const jair = new ClientePoupanca("Jair Bolsonaro", "presidente@gov.com.br", "19039129419231", 9123182, 213912984);
console.log(jair)

jair.depositarPoupanca(1)
console.log(jair.saldoPoup)