const userr = {
    nome: "Dr Love",
    email: "drlove@contato.com",
    nascimento: "03/06/1997",
    role: "admin",
    ativo: true,
    exibirInfo: function() {
        console.log(this.nome, this.email);
    }
}

//userr.exibirInfo();

const exibir = function(){
    console.log(this.nome);
}

const exibirNome = exibir.bind(userr);
exibirNome();