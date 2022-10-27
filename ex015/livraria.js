const precosLivros = [25, 30, 15, 50, 45, 20];
 
let menor = 0;

for (let atual = 0; atual < precosLivros.length; atual++){    
    if (precosLivros[atual] < precosLivros[menor]){
        menor = atual
    }
}
console.log(`O preço do livro mais barato custa: R$ ${precosLivros[menor]}`)