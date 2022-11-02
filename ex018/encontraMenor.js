const listaLivros = require('./array');

let menorValor = 0;

function encontrMenor(pivo, array){
    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];
        if(produtoAtual.preco < pivo.preco){
            menorValor++;
        }
    }
     
     trocaLugar(array, array.indexOf(pivo), menorValor)
     return array;
}

function trocaLugar(array, de, para){
    let elemn1 = array[de]
    let elemn2 = array[para]

    array[de] = elemn1;
    array[para] = elemn2;
};

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length / 2)];
    encontrMenor(pivo, array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }
     return array
}

console.log(divideNoPivo(listaLivros));