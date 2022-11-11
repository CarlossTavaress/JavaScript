function extraiLinks (arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}


export default function validaLinks(listaDeLinks){
    return extraiLinks(listaDeLinks);
}