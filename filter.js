//cria novo array aom elementos do array original q satisfazem uma condição especifica q usa um callback q deve retornar booleano(true ou false)

//pode retornar um array vazio se nenhum item atender a condiçoes
//o array original n é modificavel



//FORMAS DIFERENTES DE FAZER A MESMA COISA:

// const numeros = [1,2,3,4,5,6];
// const pares = [];

// //lenght para percorrer por todo percusso
// for (let i = 0; i< numeros.length; i++) {
//     //numeros na posição do i
//     if(numeros[i] %2 === 0){
//         //push adiciona no final; numeros na posição do index
//         pares.push(numeros[i]);
//     }
// }

// console.log(pares);

// //ou for...of

// for (const numeros of numeros){
//      if(numeros[i] %2 === 0){
//         pares.push(numeros)
//      }
// }
// console.log(pares);

//ou filter:

const numeros = [1,2,3,4,5,6];
const pares = numeros.filter((numero) => {
    if(numero %2 === 0){
        return numero;
    }
});
console.log(pares);


//OU resumidamente:

// const numeros = [1,2,3,4,5,6];
// const pares = numeros.filter(numero => numero %2 === 0);

// console.log(pares);

