function extraiLinks (arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listUrls){
    const arrStatus = await Promise.all(
        listUrls.map(async(url) => {
          const response = await fetch(url)
          return response.status;
      })

    )
    return arrStatus;
}


export default async function validaLinks(listaDeLinks){
    const links =  extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    console.log(status);
    return status;

}