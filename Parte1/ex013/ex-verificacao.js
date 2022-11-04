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


function clientePoupanca(nome,cpf, email, saldo, saldoPoup){
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const kaito = new clientePoupanca("kaito", "1239124912", "kaito@chillibeans.com", 729999, 9912312);

clientePoupanca.prototype.depositarPoup = function(x){
    this.saldoPoup += x
}
clientePoupanca.prototype.sacarPoup = function(y){
    this.saldoPoup -= y
}

kaito.depositarPoup(8000);
console.log(kaito.saldoPoup);
