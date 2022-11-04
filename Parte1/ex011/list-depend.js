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
    }]
}

//console.log(cliente);

cliente.dependentes.push({
    nome: "Lux",
    parentesco: "Cachorro",
    idade: 1
})

//console.log("--------------------")

const dependenteNovo = cliente.dependentes.filter(dependentes => dependentes.idade == 1);

console.log(dependenteNovo[0].nome)
