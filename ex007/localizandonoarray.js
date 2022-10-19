const alunos = ["Ana", "Alice", "Fábio", "Rayssa"];
const notas = [9.6, 10, 8, 7.9];

let listaNotasEAlunos = [alunos, notas];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaNotasEAlunos[0][indice] + 'sua média é: ' + listaNotasEAlunos[1][indice]
    } else {
        return 'Aluno não encontrado'
    }
}

console.log(exibeNomeNota("Ana"));