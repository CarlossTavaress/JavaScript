const cliente = [{
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
    }]
}, {
    nome: "Juliana",
    idade: 33,
    cpf: "91231824812",
    email: "jualura@gmail.com",
    dependentes : [{
        nome: "natalia",
        idade: 12,
        parentesco: "filha"
    }, {
        nome: "Ana",
        idade: 14,
        parentesco: "filha"
    }]
}]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];

console.table(listaDependentes);
console.log(typeof listaDependentes)
