/*
Peça ao usuário que digite se nome e sua idade para sabermos se ele pode entrar na festa.

Regra:
    -a festa é para maiores de 21 anos.

Crie uma nova promessa que:
    -verificar a idade do usuário
        -se for maior de 21 anos, lance um "response" após 3 segundos com a mensagem: "Olá [nome]! Você pode entrar na festa." 
        - se for menor de 21 anos, lance um "reject" após 3 segundos com a mensagem " Você não pode entrar na festa."

*/

let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));

new Promise((resolve, reject) => {
    setTimeout(() => {
        if (idade >=21) {
           resolve(`Olá ${nome} Você pode entrar na festa.`)
        } else {
            resolve(`Olá ${nome}! Você não pode entrar na festa.`);     
         }
    }, 3000);
})
.then(resolvido => {
    alert(resolvido);
})
.catch(rejeitado => {
    console.error(rejeitado);
});
