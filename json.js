//Json é como traduz um codigo js para mandar para um api p/ capturar um dado no banco de dados
//JSON.stringify = se usa para transformar em um codigo JSON

const usuario = {
    nome: "Jenny",
    idade: 18,
    hobbies: ["leitura", "programação"]
};

const json = JSON.stringify(usuario);

console.log(json);
//'{"nome": "Jenny", "idade":18}'

//JSON.parse() = para transformar JSON p/ objeto

const novoUsuario = JSON.parse(json);



//JSON pode ter Array como parte da estrutura
//js consegue manipular esse array dentro do json

console.log(novoUsuario.hobbies[1]);

//percorrendo pelo array 
