/*
Crie uma expressão de função que recebe um número como parâmetro , verifique se esse número é par ou impar e exibe um alert() com a mensagem: "Seu numero é par/impar."

Peça ao usuário que digite um número e passe o número recebido como argumento para a chamada da função
*/

let numero = parseInt(prompt("Digite um numero:"))

const funcao = function(numero) {
    if (numero % 2 === 0) {
      return  alert("Seu númeoro é par");        
    } 
      return  alert("Seu número é impar")
} 
funcao(numero);
