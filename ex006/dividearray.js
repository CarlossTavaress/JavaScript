const nomes = ["João", "Julaiana", "Ana", "Caio", "Rodrigo", "Amanda", "Jéssica", "Carolina", "Jorge", "Renata", "Ana", "Amanda"];

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Tamanho do array: ${nomes.length}`)
console.log(`Sala 1: ${sala1}`);
console.log(`Sala 2: ${sala2}`);