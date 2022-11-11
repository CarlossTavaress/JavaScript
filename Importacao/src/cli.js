import pegaArquivo from "./index.js";

import fs from "fs";

const caminho = process.argv;
pegaArquivo(caminho[2]);

function imprimeLista(resultado, identificador = ''){
    console.log((
        'Lista de links'),
        identificador,
        resultado);

}


async function processaTexto(argumentos){

    try{
        fs.lstatSync(caminho);
    }

    catch(erro){
        if(erro.code === 'ENOENT') {
            console.log('Arquivo ou diretório não existe');
            return;
        }
    }

    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()){
        const resultado =  await pegaArquivo(argumentos[2]);
        imprimeLista(resultado);
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/ ${nomeDeArquivo}`);
        })        
        imprimeLista(lista, nomeDeArquivo);
    }    
}

processaTexto(caminho);