let nomeJogador = document.querySelector("#nomeJogador");
let mensagemJogador = document.querySelector("#mensagemJogador");
let confirmarJogador = document.querySelector("#confirmarJogador");

let textoDestaque = document.querySelector(".textoDestaque");
let imagemJogador = document.querySelector("#imagemJogador");
let trocarImagem = document.querySelector("#trocarImagem");

let modoEscuro = document.querySelector("#modoEscuro");

let pontoA = document.querySelector("#pontoA");
let pontoB = document.querySelector("#pontoB");

let placarA = document.querySelector("#placarA");
let placarB = document.querySelector("#placarB");

let senha = document.querySelector("#senha");
let mostrarSenha = document.querySelector("#mostrarSenha");

let iniciar = document.querySelector("#iniciar");
let parar = document.querySelector("#parar");
let zerar = document.querySelector("#zerar");
let cronometro = document.querySelector("#cronometro");

let finalizar = document.querySelector("#finalizar");
let mensagemFinal = document.querySelector("#mensagemFinal");

let pontosA = 0;
let pontosB = 0;

let segundos = 0;
let tempo;

nomeJogador.addEventListener("input", function() {

    if (nomeJogador.value == "") {

        mensagemJogador.innerText = "Digite o nome do jogador";

        confirmarJogador.disabled = true;

    } else {

        mensagemJogador.innerText = "Jogador: " + nomeJogador.value;

        confirmarJogador.disabled = false;

    }
});

confirmarJogador.addEventListener("click", function() {

    textoDestaque.innerText = nomeJogador.value;

    mensagemFinal.innerText = "Jogador confirmado!";

    setTimeout(function() {

        mensagemFinal.innerText = "";

    }, 3000);
});

pontoA.addEventListener("click", function() {

    pontosA = pontosA + 2;

    placarA.innerText = pontosA;

    finalizar.disabled = false;
});

pontoB.addEventListener("click", function() {

    pontosB = pontosB + 2;

    placarB.innerText = pontosB;

    finalizar.disabled = false;
});

modoEscuro.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
});

textoDestaque.addEventListener("mouseover", function() {
    textoDestaque.classList.add("destaque");
});

textoDestaque.addEventListener("mouseout", function() {
    textoDestaque.classList.remove("destaque");
});

trocarImagem.addEventListener("click", function() {
    imagemJogador.src = "imagens/jogador1.gif";
});

mostrarSenha.addEventListener("click", function() {

    if (senha.type == "password") {

        senha.type = "text";

        mostrarSenha.innerText = "Esconder senha";

    } else {

        senha.type = "password";

        mostrarSenha.innerText = "Mostrar senha";

    }
});

iniciar.addEventListener("click", function() {

    tempo = setInterval(function() {

        segundos = segundos + 1;

        cronometro.innerText = segundos;

    }, 1000);
});

parar.addEventListener("click", function() {
    clearInterval(tempo);
});

zerar.addEventListener("click", function() {

    clearInterval(tempo);

    segundos = 0;

    cronometro.innerText = 0;
});

finalizar.addEventListener("click", function() {

    mensagemFinal.innerText = "Partida finalizada!";

    setTimeout(function() {

        mensagemFinal.innerText = "";

    }, 3000);
});