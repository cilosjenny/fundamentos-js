/*
Crie uma função chamada "mostraMensagem" que recebe um nome como parâmetro e exibe um alert() com a mensagem: "Olá, nome! Bem-vindo(a)!"

Use prompt() para capturar o nome do usuário e chame a função passando o nome do usuário como argumento
*/


function nomeDaPessoa(nome) {
     alert(`Olá, ${nome}! Bem-vindo(a)!`)
        
}

const nome = prompt("Qual seu nome?")

nomeDaPessoa(nome);



