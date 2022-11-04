const somaNumerosPequenos = (num1=0, num2=0, num3=0) => {
    if(num1 > 10 || num2 > 10|| num3 > 10){
        return `somente números de 1 a 10`
    }else {
        return num1 + num2 + num3;
    }
}
console.log(somaNumerosPequenos(11, 21, 31));