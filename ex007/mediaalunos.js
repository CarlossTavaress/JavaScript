const alunos = ["Ana", "Alice", "Fábio", "Rayssa"];
const notas = [9.6, 10, 8, 7.9];

let listaNotasAlunos = [alunos, notas];

for(let i = 0; i < alunos.length; i++){
    console.log(`Aluno: ${listaNotasAlunos[0][i]} - Nota: ${listaNotasAlunos[1][i]}`)
}

let mediaTurma = 0;
for(let i = 0; i < notas.length; i++){
    mediaTurma = mediaTurma + notas[i];
}
console.log(`A média da turma foi ${mediaTurma/notas.length}`)
