/*
Crie uma função chamada processarUsuario que recebe dois parâmetros:
    Um objeto representando um usúario.
    Uma função callback.
A função processarUsuario deve:

    Verificar se o usuário está ativo (ativo === true).

    Se estiver ativo, chamar o callback passando como argumento a mensagem:
        ---"Usuário [nome] está ativo."
    Se não estiver ativo, chamar o callback passando como argumento a mensagem:
        ---"Usuário [nome] está inativo."
Depois, crie uma função chamada exibeMensagem que recebe uma mensagem como parâmetro e exibe no console.

Crie um objeto de usuário com as propriedades:
    ---nome(string)
    ---ativo(boolean)
Por fim, execute a função processarUsuario, passando o objeto e a função exibeMensagem como argumentos.
*/

function processarUsuario(usuario, cb) {
        //ou só usuario.ativo
    if(usuario.ativo === true ) {
        cb(`Usuário ${usuario.nome} está ativo`)
    } else {
        cb(`Usuário ${usuario.nome} está inativo`)
    }
}
function exibeMensagem(mensagem) {
    console.log(mensagem);
    
}

const usuario = {
    nome: "jenny",
    ativo: true 
}

processarUsuario(usuario, exibeMensagem);
