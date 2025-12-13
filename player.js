let playlists;
fetch("./JSONs/biblioteca-playlists.json")
    .then(response => response.json())
    .then(musicas => {
        playlists = musicas;
        console.log("Playlists", playlists);
    })



let indicePlaylist = 0;
let indiceMusica = 0;

const audio = new Audio();
audio.volume = 0.7;

function setIndicePlaylist(i) {
    indicePlaylist = i;
    indiceMusica = 0;

    carregarMusica();
}

function adicionaMusica() {
    let adicionadas = document.querySelectorAll('#coloca-musica input[type="checkbox"]:checked');

    adicionadas.forEach(cb => {
        if(!playlists[indicePlaylist].musicas.find(mus => mus.id == Number(cb.value))) {
            let novoId = {id: Number(cb.value)};
            playlists[indicePlaylist].musicas.push(novoId);
        } 
    });
}

function carregarMusica() {
    let musica
    const listaId = playlists[indicePlaylist].musicas;
    if (!listaId) return;
    const idObj = listaId[indiceMusica];
    if(!idObj) return;
    const id = idObj.id;
    if(!id) return;

    

    for(let p of playlists) {
        const achada = p.musicas.find(mus => mus.id === id);
        if(achada) {
            console.log(p.musicas);
            musica = achada;
            break;
        }
    }

    console.log(id);
    console.log(musica);
    console.log(playlists[indicePlaylist].musicas);
    

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
    adicionaMusica,
    reproduzir,
    pausar,
    proximaMusica,
    musicaAnterior
};