const ordenaPosicao = require('./index');
const livros = require('./listaLivros');

for(let atual = 0; atual < livros.length; atual++){
    let menor = ordenaPosicao(livros, atual)
    
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros)