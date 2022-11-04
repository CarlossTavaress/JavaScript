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

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const drLove = new clientePoupanca("DrLove", "9128314271", "drlove@contato.com", 350000, 998000);
//console.log(drLove);
const carlosTavares = new clientePoupanca("Carlos Matheus Tavares", "09001550940", "carlosmatheustavares@gmail.com", 350000,990000);
//console.log(carlosTavares);

clientePoupanca.prototype.depositarPoup = function (x){
    this.saldoPoup += x;
}
clientePoupanca.prototype.sacarPoup = function (y){
    this.saldoPoup -= y;
}

drLove.depositarPoup(11);
console.log(drLove.saldoPoup);