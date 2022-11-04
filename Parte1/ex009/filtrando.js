const alunos = ["Carlos", "Maria", "Julia", "Rogério", "Viviane"];
const notas = [10, 8, 9, 3, 4];

const reprovados = alunos.filter((aluno, indice) => notas[indice] < 5);
console.log(reprovados)