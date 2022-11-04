const cliente = {
    nome: "Jair",
    idade: 55,
    profissao: "Presidente",
    saldo: 500,
    depositar: function(x){
        this.saldo += x
    },
    sacar : function(y){
        this.saldo -= y
    }    
}

console.log(cliente.saldo);
console.log("--------------");
cliente.depositar(600);
console.log(cliente.saldo);
cliente.sacar(1000);
console.log("--------------");
console.log(cliente.saldo);