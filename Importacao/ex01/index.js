import fs from 'fs';


function trataErro(erro){
    throw
}
 
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(texto);
    })
}

pegaArquivo('./importacao/ex01/texto.md')


