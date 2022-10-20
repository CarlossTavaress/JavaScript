const notas = [9.6, 10, 8, 10];
let somaNotas = 0;

notas.forEach( nota => {
    
    somaNotas += nota;
})

console.log(somaNotas / notas.length)