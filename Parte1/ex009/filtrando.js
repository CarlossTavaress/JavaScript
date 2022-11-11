const alunos = ["Carlos", "Maria", "Julia", "Rogério", "Viviane","Pedro"];
const notas = [10, 8, 9, 3, 4, 2];

const reprovados = alunos.filter((aluno, indice) => notas[indice] < 5);
console.log(reprovados)