const notas = [9.6, 10, 8, 7.9];
let somaNotas = 0;

notas.forEach(nota => {
    somaNotas = somaNotas + nota
})

let media = somaNotas / notas.length;


console.log(media);