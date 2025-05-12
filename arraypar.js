/*
Crie uma função chamada "contarPares" que recebe um array de numeros como parametro.

essa função deve:

-Percorrer o array usando um loop
-Contar quantos numereos pares existem dentro do array
-Retornar a quantidade de numeros pares encontrados

em seguida, crie um array com numeros de 1 a 10 e utilize a função "contarpares" com esse array.

Exiba no console o resultado retornado pela função.

*/


function contarPares (numeros) {
    let pares=0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        }
    }
  
    return pares;
}
const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(contarPares(arr));
