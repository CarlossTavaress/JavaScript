const livros = require('./listaLivros'); // usa o array ( objeto do outro arquivo)
 


function ordenaPosicao(arrProdutos, posicaoInicial){
    let menorPreco = posicaoInicial;

    for(atual = posicaoInicial; atual < arrProdutos.length; atual++){
    if(arrProdutos[atual].preco < arrProdutos[menorPreco].preco){
        menorPreco = atual
     }
    }
    return menorPreco;
}


//console.log(`Menor preço dos livros: R$ ${livros[menorPreco].preco} e o titulo é ${livros[menorPreco].titulo}`)

module.exports = ordenaPosicao;
