/*
crie um loop que percorra o de objetos a seguir:

const pessoas =[
    pessoa1 = {
        nome:"alex",
        idade: 29,
    },
    pessoa2 = {
        nome:"yoshi",
        idade: 18,
    },
    pessoa3 = {
        nome:"mario",
        idade:24,
    },
];

O loop deve verificar a idade de cada pessoa.
-Se a idade da pessoa for maior ou igual a 21, exiba no console "Fulano pode se casar pois tem 29 anos de idade."
-senão, exiba no console "fulano não pode se casar pois tem 18 anos de idade.".

*/

const pessoas = [

    pessoa1 = {
        nome: "Alex",
        idade: 29,
    },
    pessoa2 = {
        nome: "Yoshi",
        idade: 18,
    },
    pessoa3 = {
        nome: "Mario",
        idade: 24,
    },


]

for (const pessoas of pessoas){
     if (pessoas.idade >= 21) {
        console.log(`${pesssoas.nome}pode casar pois tem${pessoas.idade}anos de idade.`);


    } else {
        console.log(`${pessoas.nome} não pode casar pois tem ${pessoas.idade} anos de idade.`));

    }
}

