import pegaArquivo from "./index.js";
import validaLinks from "./htpp-validacao.js";

import fs from "fs";

const caminho = process.argv;
pegaArquivo(caminho[2]);

async function  imprimeLista(valida, resultado, identificador = ''){

    if(valida){
            console.log((
        'Lista validada'),
        identificador,
        await validaLinks(resultado));
    }else{
            console.log((
        'Lista de links'),
        identificador,
        validaLinks(resultado));
    }

}


async function processaTexto(argumentos){

    const caminho = argumentos[2];
    const valida = argumentos[3] === 'valida';

    try{
        fs.lstatSync(caminho);
    }

    catch(erro){
        if(erro.code === 'ENOENT') {
            console.log('Arquivo ou diretório não existe');
            return;
        }
    }

    

    if (fs.lstatSync(caminho).isFile()){
        const resultado =  await pegaArquivo(argumentos[2]);
        imprimeLista(valida, resultado);
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/ ${nomeDeArquivo}`);
        })        
        imprimeLista(valida, lista, nomeDeArquivo);
    }    
}

processaTexto(caminho);