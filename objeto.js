const usuario = {
    nome:"jenny",
    idade:18,
    profissão:"estudante"

}

console.log(usuario.profissão);

//dot notacion


//bracket notacion

console.log(usuario["idade"]);

//ou

const chave = "idade";

console.log(usuario[chave]);//18

//atualizando propriedade

usuario.nome = "ana";
usuario.idade = "19";
usuario.profissão = "monitor";

//adicionando nova propriedade
usuario.altura = 1.59

//deletando propriedade

delete usuario.altura

//retorna um array com todos os objetos
console.log(Object.keys(usuario));

//retorna os valores
console.log(Object.values(usuario));

//retorna objetos com valores
console.log(Object.entries(usuario));


//objeto dentro de objeto
const usuario = {
    nome:"jenny",
    idade:18,
    profissão:"estudante",
    endereço: {
        rua: "rua rincao",
        numero: 185,
        cidade: "fortaleza"
    }
}

console.log(usuario.endereço.numero);

//formas de usar:

const calculadora = {
    adição: function somar(a,b) {
        return a+b;
    },
    subtração: function (a,b) {
        return a-b;
    },
    multiplicação: (a,b) =>{
        return a*b
    }
}
console.log(calculadora.adição);

//array de objetos

const lista = [
    calculadora = {
     adição: function somar(a,b) {
          return a+b;
     },
     subtração: function (a,b) {
            return a-b;
     },
        multiplicação: (a,b) =>{
            return a*b
        }
    },

    usuario = {
        nome:"jenny",
        idade:18,
        profissão:"estudante",
        endereço: {
         rua: "rua rincao",
         numero: 185,
         cidade: "fortaleza"
    }
}

]

