/* let x = "";
console.log(x);
x = "Oi"; */

function imprimeTexto(texto){
    console.log(texto)
}

// imprimeTexto("Olá, tudo bem?")

function verificadorIdade(idadeCliente){
    if(idadeCliente >= 18){
        console.log("autorizado!")
    }else {
        console.log("negado!")
    }
}

const idadeCliente = 25;

verificadorIdade(idadeCliente);