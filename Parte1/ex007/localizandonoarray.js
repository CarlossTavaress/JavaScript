const alunos = ["Ana", "Alice", "Fábio", "Rayssa"];
const notas = [9.6, 10, 8, 7.9];

let listaNotasEAlunos = [alunos, notas];

const exibeAluno = (nomeAluno) => {
    if(listaNotasEAlunos[0].includes(nomeAluno)){
       let indice = listaNotasEAlunos[0].indexOf(nomeAluno)
        return listaNotasEAlunos[0][indice] + ' sua nota é: ' + listaNotasEAlunos[1][indice]
    }else {
        return 'Aluno não encontrado'
    }
}

console.log(exibeAluno("Ana"))

console.log(listaNotasEAlunos[0][2] + listaNotasEAlunos[1][3]);