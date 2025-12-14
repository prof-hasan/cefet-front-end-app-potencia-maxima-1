
import { listaPlaylistEl, playlists, bibliotecaPlaylists, adicionarPlaylist, removeplaylist, listaPesquisa, adicionarPlaylistPesquisa } from "./playlists.js";
import { setIndicePlaylist, bibliotecaMusicas, addMusica, reproduzir, proximaMusica, musicaAnterior, pausar } from "./player.js";


let btnEsquerdoEl = document.querySelector('#botao-esquerdo');
let btnDireitoEl = document.querySelector('#botao-direito');
let btnProfileMenuEl = document.querySelector('#profile');
let btnDarkModeEl = document.querySelector('#dark-mode');
let inputPesquisaEl = document.querySelector('#pesquisar')
let btnRemoverEl = document.querySelector('#remover');
let btnAdicionarPlaylistEl = document.querySelector('#criar');
let btnAdicionarMusicaEl = document.querySelector('#adicionar-musica');
let btnsSairEl = document.querySelectorAll('.sair');
let btnsExitEl = document.querySelectorAll('.exit');
let btnAdicionarConfirmar = document.querySelector('#adicionar-confirmacao');
let btnMusicaConfirmacao = document.querySelector('#musica-confirmacao');
let btnSelecionar = document.querySelector('#selecionar');
let btnVoltarMusica = document.querySelector('#voltar-musica');
let btnProximaMusica = document.querySelector('#proxima-musica');
let caixaPesquisaEl = document.querySelector('#caixa-de-pesquisa');
let btnPausarMusica = document.querySelector('#pausar');
let preencheInput = document.querySelector('#preenche-input');
let janelaCreditos = document.querySelector('#janelas-interacoes2');
let creditos = document.querySelector('#creditos');
let btnSairCreditos = document.querySelector('.sair2');


let indice = 0;
let darkMode = localStorage.getItem('userDark');
darkMode = JSON.parse(darkMode) || false;

if(darkMode === true) {
    let bodyEl = document.querySelector('body');

    bodyEl.classList.add('dark');
}

btnPausarMusica.addEventListener("click", () => {
    console.log("▶ Pausando playlist:", indice);
    setIndicePlaylist(indice);
    pausar();
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


btnDarkModeEl.addEventListener("click", () => {
    let bodyEl = document.querySelector('body');

    darkMode = !darkMode;

    darkMode = localStorage.setItem('userDark', JSON.stringify(darkMode))

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

btnAdicionarMusicaEl.addEventListener('click', () => {
    autoPreencheInput();
    let janelaMusicaEl = document.querySelector('#janela-musicas');
    let inputMusicaEl = document.querySelector('#input-musica');

    janelaMusicaEl.classList.toggle("oculto");
    inputMusicaEl.classList.toggle("oculto");
})

btnsSairEl.forEach(btn => {
    btn.addEventListener("click", () => esconderJanelas())});

btnsExitEl.forEach(btn => {
    btn.addEventListener("click", () => ocultarJanelas())});

btnAdicionarConfirmar.addEventListener("click", () => {
    adicionarPlaylist();
    indice = 0;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;

    esconderJanelas();
});

btnMusicaConfirmacao.addEventListener("click", () => {
    addMusica();
    ocultarJanelas();
})

function esconderJanelas() {
    let janelaInteracaoEl = document.querySelector('#janelas-interacoes');
    let janelaAdicionarEl = document.querySelector('#adicionar');
    
    janelaInteracaoEl.classList.toggle("escondido");
    janelaAdicionarEl.classList.toggle("escondido");

    return;
}

function ocultarJanelas() {
    let janelaMusicaEl = document.querySelector('#janela-musicas');
    let inputMusicaEl = document.querySelector('#input-musica');

    janelaMusicaEl.classList.toggle("oculto");
    inputMusicaEl.classList.toggle("oculto");

    return;
}

function autoPreencheInput() {
    preencheInput.innerHTML = '';

    for(let i=0; i<bibliotecaMusicas.length; i++) {
        const novoInput = document.createElement('input');
        novoInput.type = 'checkbox';
        novoInput.value = bibliotecaMusicas[i].id;

        const label = document.createElement('label');
        label.setAttribute('for', bibliotecaMusicas[i].id);
        label.textContent = `${bibliotecaMusicas[i].nome} - ${bibliotecaMusicas[i].autor}`;

        preencheInput.appendChild(novoInput);
        preencheInput.appendChild(label);
        preencheInput.appendChild(document.createElement('br'));
    }
}

inputPesquisaEl.addEventListener('focus', () => {
    caixaPesquisaEl.classList.toggle('ativa');
});

inputPesquisaEl.addEventListener('blur', () => {
    caixaPesquisaEl.classList.toggle('ativa');
});

inputPesquisaEl.addEventListener('focus', () => {
    caixaPesquisaEl.classList.add('ativa');
    caixaPesquisaEl.innerHTML = '';
    bibliotecaPlaylists.forEach(e => listaPesquisa(e));
});

caixaPesquisaEl.addEventListener('mousedown', (e) => {
    e.preventDefault();
});

inputPesquisaEl.addEventListener('blur', () => {
    caixaPesquisaEl.classList.remove('ativa');
});

inputPesquisaEl.addEventListener('input', (e) => {
    let valor = e.target.value;

    if(valor === '') {
        caixaPesquisaEl.innerHTML = '';
        bibliotecaPlaylists.forEach(e => listaPesquisa(e));
        return;
    }

    let bibliotecaFiltrda = bibliotecaPlaylists.filter( playlist => playlist.nome.toLowerCase().includes(valor.toLowerCase().trim()));

    caixaPesquisaEl.innerHTML = '';
    bibliotecaFiltrda.forEach(e => listaPesquisa(e));
});

caixaPesquisaEl.addEventListener('click', (e) => {
    const botao = e.target.closest('.btn-pesquisa');
    if (!botao) {return};

    adicionarPlaylistPesquisa(parseInt(botao.dataset.id));
    indice = playlists.length - 1;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
});

btnProfile.addEventListener("click", () => {
    janelaCreditos.classList.remove('escondido2');
    creditos.classList.remove('escondido2');
});