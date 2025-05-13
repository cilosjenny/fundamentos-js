/*
Escreva uma função chamada "verificarNumero" que recebe dois parâmetros: um número e uma função callback

A função "verificarNumero" deve executar o seguinte:

- Se o número for maior ou igual a 10, deve chamar a função callback passando a string "número alto" como argumento.

-Caso contrario, deve chamar a funçaõ callback passando a string "Número baixo" como argumento

Em seguida, escreva uma função chamada "mensagem" que receba um texto como parâmetro e exibe esse texto no console.

Por fim, chame a função "verificarnumero" passandoo um número qualquer e a função "mensagem" como callback
*/

function verificarNumero(numero, callback) {
    if (numero >=10) {
        callback("Número Alto");
    } else {
        callback("Número Baixo");
    }
}

function mensagem(texto) {
    console.log(`${texto}`);
    
}

verificarNumero(80, mensagem);