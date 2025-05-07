/*
Crie um sistema que peça a tempreratura local atual e classifique de acordo com o valor infomado.
Se a temperatura for maior que 35, exibir "calor extremo".
Se for entre 25 e 35 (inclusive), exibir "clima quente"
Se for entre 15 e 24 (inclusive) exibir "clima agradável."
Se for entre 5 e 14 (inclusive), exibir "clima frio".
Se for abaixo de 5, exibir "frio intenso".
*/

// let temperatura = prompt("Qual a temperatura atual?")

// if (temperatura >35) {
//     console.log("calor extremo");
    
// } else if (temperatura >=25) {
//     console.log("clima quente");
    
// } else if (temperatura >=15){
//     console.log("clima agradável");
    
// } else if (temperatura >=5) {
//     console.log("clima frio");
    
// } else {
//     console.log("frio intenso");
    
// }

// tbm pode ser com ternario;

let temperatura = prompt("Qual a temperatura atual?");

temperatura > 35 ? alert("calor extremo"):
temperatura >= 25? alert("clima quente"):
temperatura >= 15 ? alert("clima agradável"):
temperatura >= 5 ? alert("clima frio"): alert("frio intenso");