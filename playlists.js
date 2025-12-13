let listaPlaylistEl = document.querySelector('#lista-playlists');
let inputNome = document.querySelector('#adicionar-nome')
let inputImg = document.querySelector('#adicionar-imagem');
let inputFundo = document.querySelector('#adicionar-fundo');
let inputTexto =document.querySelector('#adicionar-texto');

let playlists = [
    {
        nome:"Rock",
        img:"https://media.istockphoto.com/id/1183921035/pt/vetorial/rock-sign-gesture-with-lightning-for-your-design.jpg?s=1024x1024&w=is&k=20&c=5W_jMiqJwQ3HQKqM5kSe_Ygm7t60UkLYXGPvHDub1gg=",
        fundo:"#000000ff",
        texto:"#ffffffff",
        musicas:[
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/AC_DC-Thunderstruck-rock.mp3",
                nome:"Thunderstruck",
                autor:"AC_DC",
                id: 1
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/BlackSabbath-WarPigs-rock.mp3",
                nome:"War Pigs",
                autor:"Black Sabbath",
                id: 2
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/GunsN'Roses-SweetChildO'Mine-rock.mp3",
                nome:"Sweet Child O' Mine",
                autor:"Guns N' Roses",
                id: 3
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/BlackSabbath-IronMan-rock.mp33",
                nome:"Iron Man (2012 Remaster)",
                autor:"Black Sabbath",
                id: 4
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/OzzyOsbourne-NoMoreTears-rock.mp3",
                nome:"No More Tears",
                autor:"Ozzy Osbourne",
                id: 5
            }
        ]
    },
    {
        nome:"Rap",
        img:"https://pngimg.com/d/rap_PNG23.png",
        fundo:"#ffea00",
        texto:"#000000ff",
        musicas:[
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/Eminem-RapGod-rap.mp3",
                nome:"Rap God",
                autor:"Eminem",
                id: 6
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/Eminem-WithoutMe-rap.mp3",
                nome:"Without Me",
                autor:"Eminem",
                id: 7
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/Eminem-TheRealSlimShady-rap.mp3",
                nome:"The Real Slim Shady",
                autor:"Eminem",
                id: 8
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/TravisScott-FE_N-rap.mp3",
                nome:"FE!N",
                autor:"Travis Scott",
                id: 9
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/YG-GoLoko-rap.mp3",
                nome:"Go Loko",
                autor:"YG",
                id: 10
            }
        ]
    },
    {
        nome:"Pop",
        img:"https://upload.wikimedia.org/wikipedia/commons/f/f8/Pop_Music_Barnstar.png",
        fundo:"#ffaaf9",
        texto:"#000000ff",
        musicas:[
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/ArizonaZervas-ROXANNE-pop.mp3",
                nome:"ROXANNE",
                autor:"Arizona Zervas",
                id: 11
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/BrunoMars-TheLazySong-pop.mp3",
                nome:"The Lazy Song",
                autor:"Bruno Mars",
                id: 12
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/DaftPunk-GetLucky-pop.mp3",
                nome:"Get Lucky",
                autor:"Daft Punk",
                id: 13
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/SteveLacy-BadHabit-pop.mp3",
                nome:"Bad Habit",
                autor:"Steve Lacy",
                id: 14
            },
            {link:"https://github.com/potenciamusicas-ui/pmoutseinccaiamax/raw/refs/heads/main/TheFatRat-Unity-pop.mp3",
                nome:"Unity",
                autor:"TheFatRat",
                id: 15
            }
        ]
    }
];

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

playlists.forEach(adicionarlista);

function removeplaylist(indice) {
    playlists.splice(indice, 1);
    limparllista();
    playlists.forEach(adicionarlista);
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
};

export { listaPlaylistEl, playlists, adicionarPlaylist, removeplaylist };
