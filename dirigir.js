/*
Crie um sistema que peça o nome e a idade do usuário e verifique se ele é maior ou menor de idade.

Se ele for maior exiba um alert() dizendo "Olá, nomeDoUsuario! Você pode dirigir.".

Se ele for menor, exiba um alert() dizendo "Olá, nomeDoUsuario! Você não pode dirigir.".
*/

let nomeDoUsuario = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")

if (idade >=18) {
    alert(`Olá ${nomeDoUsuario}! Você pode dirigir`)
} else { 
    alert(`Olá ${nomeDoUsuario}! Você não pode dirigir`)
     
}