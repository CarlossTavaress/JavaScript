const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBusca){ // "de" é onde o indice começa e "ate" é onde vai o array, valorbusca é o valor q será buscado
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if(valorBusca === atual.preco){
        return meio;
    }

    if(valorBusca < atual.preco){
        return busca(array, de, meio - 1, valorBusca)
    }

    if(valorBusca > atual.preco){

    }
}