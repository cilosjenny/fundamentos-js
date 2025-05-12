//for...of
//impede de fazer coisas masi dinamicas

const lista = ["a" ,"b", "c", "d", "e"];

//itens da lista
for(let item of listas) {
    console.log(item);
    
}
//a,b,c,d,e

//mesma coisa que:

for(let i =0; i<lista.length; i++){
    console.log(lista[i]);
    
}

const nome = "jenny";

for(let letra of nome){
    console.log(letra);
    
}// "J", "E", "N", "N", "Y"