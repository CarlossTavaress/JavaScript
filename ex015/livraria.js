const precosLivros = [25, 30, 15, 50, 45, 20];
 
let menorPreco = 0;

for(atual = 0; atual < precosLivros.length; atual++){
    if(precosLivros[atual] < precosLivros[menorPreco]){
        menorPreco = atual
    }
}

console.log(`Menor preço dos livros: R$ ${precosLivros[menorPreco]}`)