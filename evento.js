// click = Quando o usuário clica em um elemento
// mouseover = Quando o mouse passa por cima
// mouseout	= Quando o mouse sai do elemento
// keydown	= Quando uma tecla é pressionada
// keyup  = Quando a tecla é solta
// submit = Envio de formulário
// load =  Quando a página ou imagem termina de carregar
// change = Quando o valor de um input muda
// input = Quando o usuário digita em um campo

//addEventListener = adiciona eventos

const botao = document.querySelector("#meuBotao");

botao.addEventListener("click", function() {
  alert("Botão clicado!");
});

// atribuir diretamente no html

<button onclick="alert('Cliquei!')">Clique aqui</button>

//atribuir diretamente via JS

botao.onclick = function() {
  alert("Cliquei de novo!");
};

// objeto event = O manipulador de eventos recebe um objeto com informações sobre o evento.

botao.addEventListener("click", function(event) {
  console.log(event.target); // Elemento clicado
});


//EVENT BUBBLING VS CAPTURING

// Bubbling (padrão): o evento vai do elemento mais interno para o mais externo.

// Capturing: o evento vai do mais externo para o mais interno.

// Você pode controlar isso com o terceiro argumento do addEventListener:

element.addEventListener("click", handler, true); // Captura
element.addEventListener("click", handler, false); // Bolha (default)


//PARA PROPAGAÇÃO:

event.stopPropagation(); // Impede que o evento continue se propagando
event.preventDefault();  // Impede o comportamento padrão (ex: enviar form)
