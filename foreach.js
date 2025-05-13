//SINTAXE DO FOREACH:

    //array.forEach(function(elemento, indice, arrayOriginal){
        ////corpo da função
    // })



const numeros = [1,2,3,4,5,6];

numeros.forEach((numero) => {
    console.log(numero * 2);
    
});


 //forEach n deixa retornar um novo array, sempre retorna undefined
     //so se usa no arrayOriginal
     // n é possivel usar break, continue e return p/ pular ou sair do laço antecipadamente

//outro:

const numero = [1,2,3,4,5,6];

const pares = [];

numero.forEach((numero) => {
    if(numero %2 === 0){
        pares.push(numero);
    }
});

console.log(pares);
