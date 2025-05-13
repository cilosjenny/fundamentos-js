/*
Crie a função "boasVindas" que recebe dois parâmetros: nome e uma callback.

Dentro da função "boasVindas", chame a função callback e passe o nome como argumento para ela.

Em seguida crie a função "saudar" que recebe um nome como parâmetro e exibe "Olá, nome!" no console.

Execute a função "boasVindas" passando um nome e a função "saudar" como argumento.

*/

function boasVindas(nome, cb) {
    cb(nome);

}

function saudar(nome) {
    console.log(`Olá, ${nome}!`);


}
boasVindas("jenny", saudar);


//ou :

boasVindas("jenny", (nome) =>{
    console.log(`Olá, ${nome}!`);
    
});
