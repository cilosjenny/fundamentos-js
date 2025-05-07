let idade = 30
let habilitado = true;

if(idade >=18){
    if(habilitado){
        console.log("Pode dirigir!");
        
    }else{
        console.log("Precisa tirar a habilitação.");
        
    }
}else{
    console.log("Não pode dirigir.");
    
}

/*
ou colocar
if (idade >=18 && habilitado) {
    console.log("pode dirigir");

} else if (idadde >= 18) {
    console.log("precisa tirar a habilitação");
} else {
    consolle.log("Não pode dirigir.");
}