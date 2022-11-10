import fs from 'fs';


function trataErro(erro){
    throw new Error(erro.code, 'Arquivo não encontrado no diretório'); // caso de erro, está função irá retornar o tipo do erro e a mensagem escrita.

}

function extraiLink(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captura = [...texto.matchAll(regex)];
    console.log(captura);
    const resultado = captura.map(captura =>( {[captura[1]] : captura[2]}))
    return resultado;
}

async function pegaArquivo(caminhoDoArquivo){
    try{

        const encoding = 'utf-8';
        const texto =  await fs.promises.readFile(caminhoDoArquivo, encoding)
       console.log(extraiLink(texto));
    } catch(erro){
        trataErro(erro)
    }

}

//pegaArquivo('./importacao/ex01/texto.md');




// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)


export default pegaArquivo;

