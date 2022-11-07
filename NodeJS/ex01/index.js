import fs from 'fs';
 
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'uft-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(texto);
    })
}

pegaArquivo('./NodeJS/ex01/texto.md')


