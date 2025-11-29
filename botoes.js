
import { listaPlaylistEl, playlists, adicionarPlaylist, removeplaylist } from "./playlists.js";
import { setIndicePlaylist, reproduzir } from "./player.js";


let btnEsquerdoEl = document.querySelector('#botao-esquerdo');
let btnDireitoEl = document.querySelector('#botao-direito');
let btnProfileMenuEl = document.querySelector('#profile');
let btnDarkMode = document.querySelector('#dark-mode');
let btnRemoverEl = document.querySelector('#remover');
let btnAdicionarPlaylistEl = document.querySelector('#criar');
let btnsSairEl = document.querySelectorAll('.sair')
let btnAdicionarConfirmar = document.querySelector('#adicionar-confirmacao');
let btnSelecionar = document.querySelector('#selecionar');


let indice = 0;


document.addEventListener("DOMContentLoaded", () => {
    let btnSelecionar = document.querySelector('#selecionar');
    btnSelecionar.addEventListener("click", () => {
        setIndicePlaylist(indice);
        reproduzir();
    });
});

btnDireitoEl.addEventListener('click', () => {
if(indice == playlists.length - 1) {
    indice = 0;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
    return;
}

indice++;
listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
});

btnEsquerdoEl.addEventListener('click', () => {
    if(indice == 0) { 
        indice = playlists.length - 1;
        listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`; 
        return;
    }

    indice--;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
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

