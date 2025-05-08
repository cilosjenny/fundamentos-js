//um while de senha:

let senha = Number(prompt("Digite a senha:"));

while (senha !== 1234) {
    alert("Acesso Negado!");
    senha = Number(prompt("Senha inválida. Tente novamente."));

}
alert("Acesso permitido.");
