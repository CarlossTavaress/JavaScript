const ordenaPosicao = require('./index');
const livros = require('./listaLivros');

for(let atual = 0; atual < livros.length; atual++){
    let menor = ordenaPosicao(livros, atual)
    
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco; //troca o livro da posição atual para ode menor preço
    livros[menor] = livroAtual; 
}

console.log(livros)