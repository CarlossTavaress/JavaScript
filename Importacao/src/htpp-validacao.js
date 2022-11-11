function extraiLinks (arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listUrls){
    const arrStatus = await Promise.all(
        listUrls.map(async(url) => {
            try{
          const response = await fetch(url)
          return response.status;
            }
            catch(erro){
                return manejaErros;
            }

      })

    )
    return arrStatus;
}

function manejaErros(erro){ //validação de status
    if(erro.cause.code === 'ENOTFOUND'){
        return 'Link não encontrado'
    }else{
        return 'ocorreu algum erro!'
    }
}


export default async function validaLinks(listaDeLinks){
    const links =  extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    console.log(status);
    return listaDeLinks.map((objeto, indice) =>({
        ...objeto,
        status: status[indice]
    }))

}