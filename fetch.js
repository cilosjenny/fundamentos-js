///////SINTAXE DO FATCH:

// fetch ('url')
//     .then (response => response.json())
//     .then (data => {
//         //manipular os dados
//     })
//     .catch(error => {
//         //lidar com erros de requisição
//     })



fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(dados => {

    })
    .catch(erro => {
        console.error(`Erro: ${erro}`);

    });
