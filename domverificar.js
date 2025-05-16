/*
Crie um parágrafo com seu nome no HTML.

Capture o parágrafo e o armazene em uma variável.

Crie uma função "verificarIdade" que receba um numero como parâmetro e verificar se esse numero é maior ou igual a 18.

Se for maior ou igual a 18 você deve adicionar a classe "maior" no parágrafo.

Senão, adicione a classe "menor" no parágrafo.
*/

const paragrafo = document.querySelector("p");

function verificarIdade(numero) {
    if (numero >=18) {
         return paragrafo.classList.add("maior");
    }
    
    return paragrafo.classList.add("menor");
}
verificarIdade(18);e
