const arrayComum = [1,2,4,5,19];

const outroArray = new Array([1,2,3,4,5]);

console.log(outroArray);
console.log(arrayComum);
let i = 0;

arrayComum.forEach( comum => {
    i += comum
})

console.log(i)