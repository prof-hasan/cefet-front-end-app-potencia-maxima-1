let btnEsquerdoEl = document.querySelector('#botao-esquerdo');
let btnDireitoEl = document.querySelector('#botao-direito');
let listaPlaylistEl = document.querySelector('#lista-playlists');

let indice = 0;

btnDireitoEl.addEventListener('click', () => {
    /*if(indice == tamanho playlists - 1) {
        indice = 0;
        listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
        return;
    }
    */

    indice++;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
});

btnEsquerdoEl.addEventListener('click', () => {
    /*if(indice == 0) { 
        indice = tamanho playlists - 1;
        listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`; 
        return;
    }
    */

    indice--;
    listaPlaylistEl.style.transform = `translateX(${-indice * 800}px)`;
});