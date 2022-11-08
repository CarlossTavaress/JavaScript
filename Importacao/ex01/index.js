import fs from 'fs';


function trataErro(erro){
    throw new Error(erro.code, 'não há arquivo para ser lido no diretório');
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((texto) => trataErro(erro))
}

/*
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro){
            trataErro(erro);
        }
        console.log(texto);
    })
} */

pegaArquivo('./importacao/ex01/texto.md')


