// com confirm
let nomeDoUsuario = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");


if (idade >=18) {
    let habilitado = confirm("Você é habilitado?");

    if (habilitado) {
        alert(`Olá ${nomeDoUsuario}! Claro q você pode dirigir, vc é top`);
    } else {
        alert(`Olá ${nomeDoUsuario}! Você não pode dirigir`);
    }
    
} else {
    alert(`Olá,${nomeDoUsuario}!Você é menor de idade.`);
}