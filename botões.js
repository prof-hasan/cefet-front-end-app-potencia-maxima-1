let btnEsquerdoEl = document.querySelector('#botao-esquerdo');
let btnDireitoEl = document.querySelector('#botao-direito');
let btnProfileMenuEl = document.querySelector('#profile');
let btnDarkMode = document.querySelector('#dark-mode');

let indice = 0;

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