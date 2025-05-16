const promessa = new Promise(resolve => {
    setTimeout(()=>{
        resolve("Dados carregados com sucesso.");
        
    }, 3000);
});

//then sera executado quando nossa promise for resolve

//o resultado vai pro parametro do then
promessa.then((resultado) => {
    console.log(resultado);
    
});


//se for rejeitada

const promess = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject("Dados perdidos no meio do caminho.");
        
    }, 3000);
});

promess
    .then( resultado => {
        console.log(resultado);
    
    })
    .catch( errado => {
        console.error(`Erro:${errado}`);
    });

//outra forma:
//pode encadear then's
//a resposta de um then vai pra outro
// sempre tem q usar return se n dá undefined


new Promise((resolve, reject) => {
    resolve(10);
})
.then(numero => {
    return numero*2;
})
.then(numero => {
    return numero + 5;
})
.then(numero => {
    console.log(numero);
    
});

// fazendo callback em promise

const nomeDoUsuario = prompt("Qual seu nome?")

function saudar(nome) {
    return new Promise(resolve => {
        resolve(nome)
    });
}

function exibirMensagem(nome) {
    alert (`Olá ${nome}!`)
}

saudar(nomeDoUsuario).then(nomeVindoDoArgumento => {
    exibirMensagem(nomeVindoDoArgumento);
});

//ou 

saudar(nomeDoUsuario).then(exibirMensagem);