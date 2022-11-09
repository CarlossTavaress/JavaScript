import fs from 'fs';

const textoTeste = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)."


function trataErro(erro){
    throw new Error(erro.code, 'Arquivo não encontrado no diretório'); // caso de erro, está função irá retornar o tipo do erro e a mensagem escrita.

}

function extraiLink(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captura = regex.exec(texto);
    console.log(captura);
}

extraiLink(textoTeste);

async function pegaArquivo(caminhoDoArquivo){
    try{

        const encoding = 'utf-8';
        const texto =  await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto);
    } catch(erro){
        trataErro(erro)
    }

}

//pegaArquivo('./importacao/ex01/texto.md');

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)


