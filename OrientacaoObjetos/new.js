/*function User(nome, email){
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `Nome: ${this.nome} - Email: ${this.email}` 
    }
}

//const novoUser = new User('DrLove', 'DrLove@contato.com');
//console.log(novoUser.exibirInfos());

function Admin(role){
    User.call(this, 'DrLove', 'drlove@contato.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log(novoUser.exibirInfos());
console.log(novoUser.role); */

const user = {
    exibirInfos: function(nome){
        return nome;
    }
}

const novoUser = Object.create(user);
console.log(novoUser.exibirInfos('DrLove'));
console.log(user.isPrototypeOf(novoUser));