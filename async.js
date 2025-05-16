//async = marca uma função como assincrona

// async function name(params) {

// }

//await: so pode ser usado dentro de funçoes async. ele pausa a execução da função até q a Promise seja resolvida ou rejeitada.

async function executarLOgs() {
    console.log("Inicio");
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Meio")
            resolve()
        }, 2000);
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fim")
            resolve()
        }, 2000);
    })
}
executarLOgs();

