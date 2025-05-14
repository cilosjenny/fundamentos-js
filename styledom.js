//////MUDANDO ESTILO NO JS

const paragrafo = document.querySelector("p");

paragrafo.style.color = "red";

//ou se for no fundo

paragrafo.style.backgroundColor = "red";

//usa camelCase


///////ativando classe pelo js(precisa ter uma classe no css)
///ativo é o nome da classe


const paragrafo = document.querySelector("p");

paragrafo.classList.add("ativo")

///p/ remover

const paragrafo = document.querySelector("p");

paragrafo.classList.remove("ativo")

////esconder

paragrafo.classList.toggle("ativo");

////pergunta se no paragrafo ativo contem uma class


paragrafo.classList.add("ativo");

console.log(paragrafo.classList.contains("ativo"))