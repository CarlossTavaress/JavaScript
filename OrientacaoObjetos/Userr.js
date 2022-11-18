class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante'
        this.ativo = ativo;
    }
    
    exibirInfos(){
        return `Nome: ${this.nome} - Email: ${this.email}`
    }
}

const novoUser = new User('Doutor do Amor', 'doutorlove@contato.com', '03/06/1997', 'admin', true);