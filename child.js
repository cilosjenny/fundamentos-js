const caixa = document.querySelector("div")
const paragrafo = document.querySelector("p")

parafrafo.textContent = "Ola"

caixa.appendChild(paragrafo);

//insere um elemento dentro de outro elemento


//insere um elemento antes de outro elemento


caixa.insertBefore(Paragrafo2,Paragrafo)

//insertAdjacentHTML(posicao,htmlSting) - metodo insere html interpretado

const lista = document.querySelector("ul");
                        //posição, local
lista.insertAdjacentHTML("beforeend" "<li>Item Antes</li>");