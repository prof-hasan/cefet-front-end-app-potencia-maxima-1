import { playlists } from "./playlists.js";

let indicePlaylist = 0;
let indiceMusica = 0;

const audio = new Audio();
audio.volume = 0.7;

function setIndicePlaylist(i) {
    indicePlaylist = i;
    indiceMusica = 0;

    carregarMusica();
}

function carregarMusica() {
    const musica = playlists[indicePlaylist].musicas[indiceMusica];
    if (!musica) return;

    audio.src = musica.link;
    audio.load();
}

function reproduzir() {
    if (!audio.src)
        carregarMusica();

    audio.play();
}

function pausar() {
    audio.pause();
}

function proximaMusica() {
    const lista = playlists[indicePlaylist].musicas;

    indiceMusica = (indiceMusica + 1) % lista.length;
    carregarMusica();
    reproduzir();
}

function musicaAnterior() {
    const lista = playlists[indicePlaylist].musicas;

    indiceMusica = (indiceMusica === 0 ? lista.length - 1 : indiceMusica - 1);
    carregarMusica();
    reproduzir();
}

export {
    setIndicePlaylist,
    reproduzir,
    pausar,
    proximaMusica,
    musicaAnterior
};