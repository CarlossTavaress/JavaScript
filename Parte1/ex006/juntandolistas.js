//juntando listas 

const salaDePython = ["André","Melissa", "Helena", "Juliana", "Rodrigo"];
const salaDeJavaScript = ["Ju", "Leo", "Raquel", "Carlos"];

console.log(`Alunos sala de Python: ${salaDePython}`);
console.log(`Alunos sala de JavaScript ${salaDePython}`);

const salaUnificada = salaDePython.concat(salaDeJavaScript);
console.log(`Alunos sala Unificada: ${salaUnificada}`)
