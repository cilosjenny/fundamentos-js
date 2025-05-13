/*
Você tem um array com as notas dos alunos de uma sala:
    const notas = [7,8,6,9,5];
Use o método .reduce() para calcular a média da sala.
*/

const notas = [7,8,6,9,5];

const media = notas.reduce((cb, nota)=>{
    return cb+nota/5
},0);
console.log(media);

//ou:
// const media = notas.reduce((cb, nota)=> cb+nota/5, 0);
