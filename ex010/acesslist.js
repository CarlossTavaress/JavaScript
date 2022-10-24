const cliente = {
    nome : "DrLove",
    idade : 25,
    cpf : "1923881241129",
    email: "drlove@contato.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

for(let i = 0; i < chaves.length; ++i){
    console.log(`${chaves[i]} : ${cliente[chaves[i]]}`)
}