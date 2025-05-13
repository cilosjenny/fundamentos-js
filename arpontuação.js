/*
Você tem um array com pomtuações de jogadores:
    const pontuacoes =[15,20,8,12];
Use  .map() para criar um novo array onde cada jogador ganha 10 pontos a mais.

*/

const pontuacoes =[15,20,8,12];

const novo = pontuacoes.map((pontos)=>{
    return pontos+10
});
console.log(pontuacoes);
console.log(novo);

///////com forEach:

// const pontuacoes =[15,20,8,12];

// const novo =[];

// pontuacoes.forEach((pontos)=>{
//     //push ta levando ele para o array novo
//     novo.push(pontos+10);
    
// });
// console.log(novo);


//ou pontuacoes.forEach(ponto => novo.push(pontos=10));

//console.log(novo)