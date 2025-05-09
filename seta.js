/*
Crie uma função de seta que, usando do...while, peça que o usuário digite uma palavra, mostre a palavra digitadaa for diferente de "sair", peça novamente pro usuário digitar uma palavra.
Quando a palavra digitada for estritamente igual a "sair", mostre a palavra e encerre o programa.
*/
let frase;
const executar = () => {

    do {
        frase = prompt("Digite uma palavra:")

        alert(`Sua palavra foi: ${frase}`);
    } while (frase !== "sair");

    alert("Encerrando programa");
}
executar();