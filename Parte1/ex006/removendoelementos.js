const notas = [10, 7, 8, 5, 9];
let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
console.log(notas);
console.log(media)
notas.pop();
let media1 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é: ${media1}`)