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

const propsCliente = Object.keys(cliente);

console.log(propsCliente);

function oferecerSeguro(objeto){
    const propsCliente = Object.keys(objeto);
    if(propsCliente.includes("dependentes")){
        console.log(`Oferta de seguro de vida para: ${objeto.nome}`)
    }
}
console.log("----------------------")
oferecerSeguro(cliente)