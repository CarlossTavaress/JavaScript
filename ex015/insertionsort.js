const livros = require('./listaLivros.');

function insertSort(arrayLista){
    for(let atual = 0; atual < arrayLista.lenght; atual++){
        let analise = atual;
        while(arrayLista[analise].preco < arrayLista[analise - 1].preco){
            let livroAtual = livros[atual];
            let livroMenorPreco = livros[menor];
        
            livros[atual] = livroMenorPreco; 
            livros[menor] = livroAtual; 
        }
    }
}