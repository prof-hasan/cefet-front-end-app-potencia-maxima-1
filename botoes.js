
import { listaPlaylistEl, playlists, adicionarPlaylist, removeplaylist } from "./playlists.js";
import { setIndicePlaylist, adicionaMusica, reproduzir, proximaMusica, musicaAnterior } from "./player.js";


let btnEsquerdoEl = document.querySelector('#botao-esquerdo');
let btnDireitoEl = document.querySelector('#botao-direito');
let btnProfileMenuEl = document.querySelector('#profile');
let btnDarkMode = document.querySelector('#dark-mode');
let btnRemoverEl = document.querySelector('#remover');
let btnAdicionarPlaylistEl = document.querySelector('#criar');
let btnAdicionaMusicasEl = document.querySelector('#adiciona-musica');
let btnsSairEl = document.querySelectorAll('.sair');
let btnExitEl = document.querySelectorAll('.exit');
let btnAdicionarConfirmar = document.querySelector('#adicionar-confirmacao');
let btnAdicionaMusicas = document.querySelector('#btn-musica');
let btnSelecionar = document.querySelector('#selecionar');
let btnVoltarMusica = document.querySelector('#voltar-musica');
let btnProximaMusica = document.querySelector('#proxima-musica');


let indice = 0;


btnSelecionar.addEventListener("click", () => {
    console.log("▶ Iniciando playlist:", indice);
    setIndicePlaylist(indice);
    reproduzir();
});
btnProximaMusica.addEventListener("click", () => {
    proximaMusica();
});
btnVoltarMusica.addEventListener("click", () => {
    musicaAnterior();
});


btnDarkMode.addEventListener("click", () => {
    let bodyEl = document.querySelector('body');

    bodyEl.classList.toggle('dark');
});

btnRemoverEl.addEventListener("click", () => {
    removeplaylist(indice);

    if(indice >= playlists.length)
        indice--

    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
});

btnAdicionarPlaylistEl.addEventListener("click", () => {
    let janelaInteracaoEl = document.querySelector('#janelas-interacoes');
    let janelaAdicionarEl = document.querySelector('#adicionar');
    
    janelaInteracaoEl.classList.toggle("escondido");
    janelaAdicionarEl.classList.toggle("escondido");

    return;
});

btnAdicionaMusicasEl.addEventListener("click", () => {
    let janelaMusica = document.querySelector('#janela-musicas');
    let janelaSelecionaMusicas = document.querySelector('#coloca-musica');

    janelaMusica.classList.toggle('oculto');
    janelaSelecionaMusicas.classList.toggle('oculto');

    return;
});

btnsSairEl.forEach(btn => {
    btn.addEventListener("click", () => esconderJanelas())});

btnExitEl.forEach(btn => {
    btn.addEventListener('click', () => ocultarJanelas())});

btnAdicionarConfirmar.addEventListener("click", () => {
    adicionarPlaylist();
    indice = 0;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;

    esconderJanelas();
});

btnAdicionaMusicas.addEventListener('click', () => {
    adicionaMusica();
    ocultarJanelas();
});

function esconderJanelas() {
    let janelaInteracaoEl = document.querySelector('#janelas-interacoes');
    let janelaAdicionarEl = document.querySelector('#adicionar');
    
    janelaInteracaoEl.classList.toggle("escondido");
    janelaAdicionarEl.classList.toggle("escondido");

    return;
}

function ocultarJanelas() {
    let janelaMusica = document.querySelector('#janela-musicas');
    let janelaSelecionaMusicas = document.querySelector('#coloca-musica');

    janelaMusica.classList.toggle('oculto');
    janelaSelecionaMusicas.classList.toggle('oculto');

    return;
}