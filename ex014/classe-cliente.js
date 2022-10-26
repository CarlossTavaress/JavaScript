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

const drLove = new Cliente("DrLove", "drlove@contato", "1023182481241", 907739222);

drLove.depositar(20000)
drLove.exibirSaldo()