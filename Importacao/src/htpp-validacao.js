function extraiLinks (arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listUrls){
    return  listUrls.map(async(url) => {
        const response = await fetch(url)
        return response.status;
    })
}


export default function validaLinks(listaDeLinks){
    const links =  extraiLinks(listaDeLinks);
    const status = checaStatus(links);
    console.log(status);
    return status;

}