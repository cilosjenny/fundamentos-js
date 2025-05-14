/*
Crie um parágrafo vazio no HTML.

Capture o parágrafo e armazene em uma variável.

Crie uma função "saudar" que recebe um nome como parâmetro, mas que usa um valor padrão "visitante" para este parâmetro.

A função deve executar a saudação "Olá, [nome]!" no parágrafo dentro do HTML.

Chame a função passando um nome (ou não) como argumento.
*/

const paragrafo= document.querySelector("p")

function saudar(nome = "visitante") {
    paragrafo.textContent = `Olá, ${nome}!`;
}

saudar();