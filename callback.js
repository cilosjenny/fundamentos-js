function executarCallback(numero1, numero2, outrafuncao){
    outrafuncao(numero1, numero2);
}

executarCallback(2, 5,(numero1, numero2) => {
    console.log(numero1 + numero2);
    
})