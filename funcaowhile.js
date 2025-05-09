/*
Usando prompt(), peça ao usuário que digite um número maior ou igual a 10.
Crie uma função chamada "decrementar" que recebe um número como parâmetro e, usando while, decrementa esse número até 0.
Passe o número recebdio do usuário como argumento na chamada da função
Imprima no console.
*/

let numero = parseInt(prompt("Digite um número maior ou igual a 10:"));


function decrementar(numero) {
    while (numero >=0) {
        console.log(numero);
        numero--;
    }
}
decrementar(numero);

//typeof onomedafunção: para saber oq ta dando errado

//como estou escrevendo uma sting mas quero receber um numero, uso parseInt, Number ou parsefloat e tals