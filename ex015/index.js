const livros = require('./listaLivros');
 


function ordenaPosicao(arrProdutos, posicaoInicial){
    let menorPreco = posicaoInicial;
    for(atual = 0; atual < arrProdutos.length; atual++){
    if(arrProdutos[atual].preco < arrProdutos[menorPreco].preco){
        menorPreco = atual
    }
}
    return menorPreco;
}


console.log(`Menor preço dos livros: R$ ${livros[menorPreco].preco} e o titulo é ${livros[menorPreco].titulo}`)

module.exports = ordenaPosicao;
