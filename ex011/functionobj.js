const cliente = {
    nome : "DrLove",
    idade : 25,
    cpf : "1923881241129",
    email: "drlove@contato.com",
    fones: ["55592883", "92139810", "0391284128"],
    dependentes : [{
        
        nome: "Francheskkah",
        parentesco: "Gata",
        idade: 9
    },{
        nome: "Lux",
        parentesco: "Cachorro",
        idade: 1
    }],
    saldo: 100,
    depositar : function(valor){
        this.saldo += valor        
    }
}
console.log(cliente.saldo)
