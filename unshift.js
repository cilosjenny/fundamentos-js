//unshift adiciona no inicio
//push adiciona no final
//shift remove o primeiro
//pop remove o ultimo

const cores = [ "azul", "verde", "vermelho"];

cores push("rosa");

console.log(cores);



const cores = [ "azul", "verde", "vermelho"];

cores pop();

console.log(cores);



const cores = [ "azul", "verde", "vermelho"];

cores.shift();

console.log(cores);//[verde, vermelho]


//indexof retorna o indice do valor


console.log(cores.indexOf("verde"))


//includes = pergunta se inclue

////slice = inicio e fim, extrai parte do original, n inclue o ultimo

const lista = ["a" ,"b", "c", "d", "e"] 

const fatia = lista.slice(1,4);

console.log(fatia);

//splice (inicio, quantos, novos) - altera o original

const lista = ["a" ,"b", "c", "d", "e"] 

lista.splice(1,3, "oie");

console.log(lista);//0:"a" 1:"oie" 2:e


                