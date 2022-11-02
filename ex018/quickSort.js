const listaLivros = require('./array');
const trocaLugar = require('./encontraMenor');


function quickSort(array, esquerda, direita){
    if(array > 1){
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita);
        }
    }

    return array
}

function particiona(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda + direita)/ 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){            
            atualEsquerda++;
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--;
        }
        if(atualEsquerda <= atualEsquerda){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))

//revisar exercicio