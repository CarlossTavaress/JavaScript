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
    saldo: 985413,
    depositar : function(valor){
        this.saldo += valor        
    }
}

let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else {
        relatorio += `
        ${info}: ${cliente[info]}  `
    }      
}
console.log(relatorio)

