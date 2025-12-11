
import { listaPlaylistEl, playlists, adicionarPlaylist, removeplaylist } from "./playlists.js";
import { setIndicePlaylist, reproduzir, proximaMusica, musicaAnterior } from "./player.js";


let btnEsquerdoEl = document.querySelector('#botao-esquerdo');
let btnDireitoEl = document.querySelector('#botao-direito');
let btnProfileMenuEl = document.querySelector('#profile');
let btnDarkMode = document.querySelector('#dark-mode');
let btnRemoverEl = document.querySelector('#remover');
let btnAdicionarPlaylistEl = document.querySelector('#criar');
let btnsSairEl = document.querySelectorAll('.sair')
let btnAdicionarConfirmar = document.querySelector('#adicionar-confirmacao');
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

btnsSairEl.forEach(btn => {
    btn.addEventListener("click", () => esconderJanelas())});

btnAdicionarConfirmar.addEventListener("click", () => {
    adicionarPlaylist();
    indice = 0;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;

    esconderJanelas();
});

function esconderJanelas() {
    let janelaInteracaoEl = document.querySelector('#janelas-interacoes');
    let janelaAdicionarEl = document.querySelector('#adicionar');
    
    janelaInteracaoEl.classList.toggle("escondido");
    janelaAdicionarEl.classList.toggle("escondido");

    return;
}

