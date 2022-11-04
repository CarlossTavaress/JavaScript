const salaJS = [7,8,1,2,10,5,6,10,9];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(salaProg){
    const somaDasMedias = salaProg.reduce((acumulador, atual) => acumulador + atual,0)
    return somaDasMedias / salaProg.length
}

console.log(mediaSala(salaJS));