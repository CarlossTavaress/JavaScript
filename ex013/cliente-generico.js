function cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function deposito(x){
        saldo += x
    }
    this.saque = function saque(y){
        saldo -= y
    }
}

const drLove = new cliente("DrLove", "81287381248", "drlove@contato.com", 300000);

if()