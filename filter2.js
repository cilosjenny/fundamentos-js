/*
Você tem uma lista de alunos com seus nomes e notas:

const alunos = [
{nome: "Alex", nota: 4},
{nome:"Yoshi", nota: 9},
{nome:"Mario", nota: 7}
];

Filtrar apenas os alunos que foram aparovados, ou seja, que tiveram a nota maior ou igual a 7.

*/

const alunos = [
{nome: "Alex", nota: 4},
{nome:"Yoshi", nota: 9},
{nome:"Mario", nota: 7}
];

const aprovados = alunos.filter(cb=>  cb.nota >=7);

console.log(aprovados);
