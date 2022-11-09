import fs from 'fs';


function trataErro(erro){
    throw new Error(erro.code, 'Arquivo não encontrado no diretório'); // caso de erro, está função irá retornar o tipo do erro e a mensagem escrita.

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


