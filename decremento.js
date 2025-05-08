/* 
Crie um algotitmo que peça para digitar um número acima de 4.
Decremente o número recebido pelo usuário exibindo no console:
"Númrto par: numero" para númmeros pares e numeros impares: numeropara numeros impares.
Quando a conategm chegar a 0, exiba "Chegou ao zero!" no console.
 */

let numero = Number(prompt("Digite um númeo a cima de 4:"))


while (numero >=0) {
    if(numero %2=== 0){
        if (numero === 0) {
            console.log("Chegou ao zero!");
            
        }else{
            console.log(` Número par: ${numero} `);
        }
    }else{
        console.log(`Número impar: ${numero}`);
        
    }
    console.log(numero);
    
    numero--;
}


