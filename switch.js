/*
Crie um programa que simula um menu bancário de operações básicas.
O usuário digita uma opção numérica e é exibido a operação correspondente:
1-Saque
2-Transferência
3-Saldo
4-Extrato
*/

let numero = parseInt(prompt(`Escolha uma opção: 
1-Saque
2-Transferência
3-Saldo
4-Extrato`
))

switch (numero) {

    case 1:
        console.log("Saque");
        
        
        break;
    case 2:
        console.log("Transferência");
        

        break;
    case 3: 
        console.log("Saldo");
        

        break;
    case 4:
        console.log("Extrato");

        break;
        
    default:
        console.log("número invalido");
        
}