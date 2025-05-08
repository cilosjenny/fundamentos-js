/*
Crie um algoritmo que peça ao usuário para digitar um número.
Exiba a tabuada de multiplicação do número recebido pelo usuário de 1 a 10
*/

let numero = Number(prompt("Qual número vc quer multiplicar?"))

for (let i = 1; i <= 10; i++){
     
   console.log(`${numero} x ${i} = ${numero * i}`);
   
}
