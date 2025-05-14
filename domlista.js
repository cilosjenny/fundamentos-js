/*
Crie uma lista não ordenada contendo um item "Divisor".

Capture a lista e o armazene em uma variável.

Crie uma função "verificarIdade" que receba um numero como parâmetro e verificar se esse numero é maior ou igual a 18.

Se for maior ou igual a 18 você deve adicionar um novo item "maior" depois do divisor.

Senão, adicione um novo item "menor" antes do divisor.
*/

const lista = document.querySelector("ul")

function verificarIdade(numero) {
    if (numero >=18) {
        return lista.insertAdjacentHTML("beforeend", "<li>maior</li>")
    }
    return lista.insertAdjacentHTML("afterbegin", "<li>menor</li>");
}

verificarIdade(18);