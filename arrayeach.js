/*
Você recebe um array contendo três números: 10,20,30.

Seu obejtivo é somar todos os valores desse array e imprimir o total no console. 
Para isso, vc deve usar o método forEazh, que permite percorrer cada item do array, e executar uma ação.

*/
const numeros = [10,20,30];

let acumulador = 0;

numeros.forEach((elemento) => {
    //ou: acumulador = acumulador + elemento
    acumulador += elemento;
});

console.log(acumulador);


