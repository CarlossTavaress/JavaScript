const listaLivros = require('./array');

function margeSort(array) {

    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const part1 = margeSort(array.slice(0,meio));
        const part2 = margeSort(array.slice(meio, array.length));        
        array = ordena(part1, part2);
    }
    return array;
}

function ordena(part1, part2){
    let posicaoAtualPart1 = 0;
    let posicaoAtualPart2 = 0;
    const resultado = [];

    while(posicaoAtualPart1 < part1.length && posicaoAtualPart2 < part2.length){
        let produtoAtualPart1 = part1[posicaoAtualPart1];
        let produtoAtualPart2 = part2[posicaoAtualPart2];

        if(produtoAtualPart1.preco < produtoAtualPart2.preco){
            resultado.push(produtoAtualPart1);
            produtoAtualPart1++;
        }else{
            resultado.push(produtoAtualPart2);
            produtoAtualPart2++;
        }      
    }
    return resultado.concat(posicaoAtualPart1 < part1.length ? part1.slice(posicaoAtualPart1) : part2.slice(posicaoAtualPart2))
}

console.log(margeSort(listaLivros));