import fs from 'fs';


function trataErro(erro){
    throw new Error(erro.code, 'não há arquivo para ser lido no diretório');
}

async function pegaArquivo(caminhoDoArquivo){
    try{

        const encoding = 'utf-8';
        const texto =  await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto);
    } catch(erro){
        trataErro(erro)
    }

}

/*
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((texto) => trataErro(erro))
}
*/

pegaArquivo('./importacao/ex01/texto1.md')


