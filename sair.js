/*
Crie um algoritmo que peça ao usuário que digite uma palavra.
Enquanto a palavra digitada pelo usuário não for "sair" peça novamente para o usuário digitar uma palavra 
*/

let palavra;

do {
    palavra = prompt("Digite uma palavra:")
} while (palavra !== "sair");

alert("palavra certa!")