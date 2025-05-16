//mesma tarefa porem com async e await


let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));


function verificarIdade(nome, idade) {
    return new Promise((resolve, reject) => {
        idade >= 21 ? resolve(`Olá ${nome}! Você pode entrar na festa.`)
        :rejeitada(`Você não pode entrar na festa.`)
    });
}

//trycatch é mesmo q then e catch

async function exibirMensagem() {
    try {
        const resultado = await verificarIdade(nome, idade);
        alert(resultado);
    } catch (error) {
        console.error(error);
    }
}

exibirMensagem();