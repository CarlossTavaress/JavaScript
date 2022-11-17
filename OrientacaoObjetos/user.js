const userr = {
    nome: "Dr Love",
    email: "drlove@contato.com",
    nascimento: "03/06/1997",
    role: "estudante",
    ativo: true,
    exibirInfo: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Carlos Tavares",
    email:"carlosmatheustavares@gmail.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado!")
    }
}

Object.setPrototypeOf(admin, userr);
admin.criarCurso();
admin.exibirInfo();