let listaPlaylistEl = document.querySelector('#lista-playlists');
let inputNome = document.querySelector('#adicionar-nome')
let inputImg = document.querySelector('#adicionar-imagem');
let inputFundo = document.querySelector('#adicionar-fundo');
let inputTexto =document.querySelector('#adicionar-texto');

let primeiraVez = localStorage.getItem('loginAnterior');
primeiraVez = JSON.parse(primeiraVez);

let bibliotecaPlaylists;

let playlists = localStorage.getItem('userPlaylists');
playlists = JSON.parse(playlists) || [];

async function inicializar() {
    const resposta = await fetch('JSONs/biblioteca-playlists.json');
    bibliotecaPlaylists = await resposta.json();

    if (primeiraVez === null) {
        playlists.push(bibliotecaPlaylists[0], bibliotecaPlaylists[1], bibliotecaPlaylists[2]);

        localStorage.setItem('loginAnterior', JSON.stringify(false));
        localStorage.setItem('userPlaylists', JSON.stringify(playlists));
    }

    playlists.forEach(adicionarlista);
}

function adicionarlista(e) {
    let nome = e.nome;
    let img = e.img;
    let fundo = e.fundo;
    let texto = e.texto;

    let novaPlaylistEl =  document.createElement('div');
    novaPlaylistEl.classList.add('playlist');
    novaPlaylistEl.setAttribute("id", `playlist-${nome.replaceAll(' ', '').toLowerCase()}`);

    novaPlaylistEl.innerHTML = `<img src="${img}">
                                <h1>${nome}</h1>`

    novaPlaylistEl.style.backgroundColor = `${fundo}`;
    novaPlaylistEl.style.color = `${texto}`;

    listaPlaylistEl.appendChild(novaPlaylistEl);
};

function limparllista() {
    listaPlaylistEl.innerHTML = '';
};

function removeplaylist(indice) {
    playlists.splice(indice, 1);
    limparllista();
    playlists.forEach(adicionarlista);
    localStorage.setItem('userPlaylists', JSON.stringify(playlists));
};

function adicionarPlaylist() {
    let novaPlaylist = {
        nome:`${inputNome.value}`,
        img:`${inputImg.value}`,
        fundo:`${inputFundo.value}`,
        texto:`${inputTexto.value}`,
        musicas:[]
    };

    playlists.unshift(novaPlaylist);

    limparllista();
    playlists.forEach(adicionarlista);
    localStorage.setItem('userPlaylists', JSON.stringify(playlists));
};

inicializar();

export { listaPlaylistEl, playlists, bibliotecaPlaylists, adicionarPlaylist, removeplaylist };