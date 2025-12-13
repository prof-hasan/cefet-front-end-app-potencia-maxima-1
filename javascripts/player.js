import { playlists } from "./playlists.js";

let bibliotecaMusicas;
let indicePlaylist = 0;
let indiceMusica = 0;

fetch('./JSONs/biblioteca-musicas.json')
    .then(resposta => resposta.json())
    .then(musicas => {
        bibliotecaMusicas = musicas;
        console.log('Musicas', bibliotecaMusicas);
    })

const audio = new Audio();
audio.volume = 0.7;

function setIndicePlaylist(i) {
    indicePlaylist = i;
    indiceMusica = 0;

    carregarMusica();
}

function addMusica() {
    const inputMarcado = document.querySelectorAll('#preenche-input input[type="checkbox"]:checked');
    inputMarcado.forEach(cb => {
        if(!playlists[indicePlaylist].musicas.find(mus => mus.id === Number(cb.value))) {
            let novoId = {id: Number(cb.value)};
            playlists[indicePlaylist].musicas.push(novoId);
        }
    })
}

function carregarMusica() {
    const listaMusica = playlists[indicePlaylist].musicas;
    const idMusica = listaMusica[indiceMusica].id;
    let musicaAtual;

    for(let b of bibliotecaMusicas) {
        const atual = bibliotecaMusicas.find(mus => mus.id === idMusica);
        musicaAtual = atual;
    }

    console.log(idMusica);
    console.log(musicaAtual);
    
    if (!musicaAtual) return;

    audio.src = musicaAtual.link;
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
    bibliotecaMusicas,
    addMusica,
    reproduzir,
    pausar,
    proximaMusica,
    musicaAnterior
};