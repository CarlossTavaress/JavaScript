const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBusca){ // "de" é onde o indice começa e "ate" é onde vai o array, valorbusca é o valor q será buscado
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];
    
    if(de > ate){
        console.log("Valor não encontrado!");
        return -1;        
    }

    if(valorBusca === atual.preco){
        return meio;
    }

    if(valorBusca < atual.preco){
        return busca(array, de, meio - 1, valorBusca);
    }

    if(valorBusca > atual.preco){
        return busca(array, meio + 1, ate, valorBusca);
    }
}
console.log(busca(listaLivros,0, listaLivros.length - 1, 520));
