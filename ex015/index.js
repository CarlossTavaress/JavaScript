const livros = riquire('ex015/listaLivros');
 
let menorPreco = 0;

for(atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[menorPreco].preco){
        menorPreco = atual
    }
}

console.log(`Menor preço dos livros: R$ ${livros[menorPreco].preco} e o titulo é ${livros[menorPreco].titulo}`)

//erro na definição do riquire