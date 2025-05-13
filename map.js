//Com ForEach

// const numeros = [1,2,3,4,5,6];

// const dobrados = [];

// numeros.forEach((item) = >{
//     if(numeros %2 === 0){

//     }
// });


//com map:

//ele n precisa atribuir a um array vazio


// const numeros = [1,2,3,4,5,6];

// const dobrados = numeros.map((elemento) => {
//     if(elemento %2 === 0){
//         return elemento;
//     }
// });

//outro:
const numeros = [1,2,3,4,5];

const dobrados = numeros.map((elemento) => {
    return elemento* 2
});

console.log(dobrados);
console.log(numeros);

//ou

const dobro = numeros.map(elementos =>elementos * 2);

// map com objetos:

const pessoas = [
    pessoa1 = {
        nome: "Alex",
        idade: 29
    },
    pessoa2 = {
        nome:"Jenny",
        idade: 18
    }
];

const nomes = pessoas.map((pessoa)=> {
    return pessoa.nome;
})

console.log(nomes);//"Alex" e "Jenny"

//ou:

const nome = pessoas.map(pessoa => pessoa.nome);

console.log(nomes);//["Alex" e "Jenny"]



