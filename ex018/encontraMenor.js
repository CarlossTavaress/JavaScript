const listaLivros = require('./array');

console.log(listaLivros)
console.log("depois da ordenação")

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

console.log(encontrMenor(listaLivros[2], listaLivros));