const numeros = [10,20,30];
const somar = numeros.reduce((acumulador, number) => {
    return acumulador = number;
},0);
//dentro do reduce porem fora da função
//ta dizendo q o acumulador começa em 0
console.log(somar);//60

//ou:
const soma = numeros.reduce((acumulador, number) => acumulador = number, 0);

