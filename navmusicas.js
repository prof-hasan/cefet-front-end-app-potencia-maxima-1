import { playlists } from "./playlists.js";

let indicePlaylist = 0;
let indiceMusica = 0;
let modoMusica = false;

function setIndicePlaylist(i) {
    indicePlaylist = i;
}

function entrarModoMusica() {
    modoMusica = true;
    indiceMusica = 0;
    mostrarMusicaAtual();
}

function sairModoMusica() {
    modoMusica = false;
}

function mostrarMusicaAtual() {
    const playlist = playlists[indicePlaylist];
    const musica = playlist.musicas[indiceMusica];

    console.log("🎵 Tocando agora:");
    console.log(`📀 Playlist: ${playlist.nome}`);
    console.log(`🎶 Música: ${musica.nome}`);
    console.log(`👤 Artista: ${musica.autor}`);
}

function avancarMusica() {
    if(!modoMusica) return;

    const playlist = playlists[indicePlaylist];

    if(indiceMusica >= playlist.musicas.length - 1)
        indiceMusica = 0;
    else
        indiceMusica++;

    mostrarMusicaAtual();
}

function voltarMusica() {
    if(!modoMusica) return;

    const playlist = playlists[indicePlaylist];

    if(indiceMusica === 0)
        indiceMusica = playlist.musicas.length - 1;
    else
        indiceMusica--;

    mostrarMusicaAtual();
}

export {
    entrarModoMusica,
    sairModoMusica,
    avancarMusica,
    voltarMusica,
    setIndicePlaylist,
};
