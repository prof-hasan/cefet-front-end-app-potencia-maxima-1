let listaPlaylistEl = document.querySelector('#lista-playlists');

let playlists = [
    {
        nome:"Rock",
        img:"https://media.istockphoto.com/id/1183921035/pt/vetorial/rock-sign-gesture-with-lightning-for-your-design.jpg?s=1024x1024&w=is&k=20&c=5W_jMiqJwQ3HQKqM5kSe_Ygm7t60UkLYXGPvHDub1gg=",
        fundo:"#000000ff",
        texto:"#ffffffff",
        musicas:[
            {link:"rock/AC_DC - Thunderstruck [mBksMIl9Kf0].mp3",
                nome:"Thunderstruck",
                autor:"AC_DC"
            },
            {link:"rock/Black Sabbath - War Pigs [PrZFscfJxXc].mp3",
                nome:"War Pigs",
                autor:"Black Sabbath"
            },
            {link:"rock/Guns N' Roses - Sweet Child O' Mine (Lyrics) [qoflJn7zkFM].mp3",
                nome:"Sweet Child O' Mine",
                autor:"Guns N' Roses"
            },
            {link:"rock/Iron Man (2012 Remaster) [b3-QqGVt-tM].mp3",
                nome:"Iron Man (2012 Remaster)",
                autor:"Black Sabbath"
            },
            {link:"rock/Ozzy Osbourne - No More Tears (Official Audio) [mX_8p7NaibQ].mp3",
                nome:"No More Tears",
                autor:"Ozzy Osbourne"
            }
        ]
    },
    {
        nome:"Rap",
        img:"https://pngimg.com/d/rap_PNG23.png",
        fundo:"#ffea00",
        texto:"#000000ff",
        musicas:[
            {link:"rap/Eminem - Rap God (Audio) [S7cQ3b0iqLo].mp3",
                nome:"Rap God",
                autor:"Eminem"
            },
            {link:"rap/Eminem - Without Me (Audio) [pyb13N80DZQ].mp3",
                nome:"Without Me",
                autor:"Eminem"
            },
            {link:"rap/The Real Slim Shady [r5MR7_INQwg].mp3",
                nome:"The Real Slim Shady",
                autor:"Eminem"
            },
            {link:"rap/Travis Scott - FE_N (Lyrics) [3OUdeW4HmgE].mp3",
                nome:"FE!N",
                autor:"Travis Scott"
            },
            {link:"rap/YG - Go Loko Ft Jon Z & Tyga (Lyrics) [EcXMJPqmbx4].mp3",
                nome:"Go Loko",
                autor:"YG"
            }
        ]
    },
    {
        nome:"Pop",
        img:"https://upload.wikimedia.org/wikipedia/commons/f/f8/Pop_Music_Barnstar.png",
        fundo:"#ffaaf9",
        texto:"#000000ff",
        musicas:[
            {link:"pop/Arizona Zervas - ROXANNE (Lyrics) [mfYUtROIzDk].mp3",
                nome:"ROXANNE",
                autor:"Arizona Zervas"
            },
            {link:"pop/Bruno Mars - The Lazy Song (Official Music Video) [fLexgOxsZu0].mp3",
                nome:"The Lazy Song",
                autor:"Bruno Mars"
            },
            {link:"pop/Daft Punk - Get Lucky (Lyrics) ft. Pharrell Williams, Nile Rodgers [5glDAaCaazc].mp3",
                nome:"Get Lucky",
                autor:"Daft Punk"
            },
            {link:"pop/Steve Lacy - Bad Habit (Lyrics) [bU2EvRBUmxc].mp3",
                nome:"Bad Habit",
                autor:"Steve Lacy"
            },
            {link:"pop/TheFatRat - Unity [n8X9_MgEdCg].mp3",
                nome:"Unity",
                autor:"TheFatRat"
            }
        ]
    }
];

function addplaylist(e) {
    let nome = e.nome;
    let img = e.img;
    let fundo = e.fundo;
    let texto = e.texto;

    let novaPlaylistEl =  document.createElement('div');
    novaPlaylistEl.classList.add('playlist');
    novaPlaylistEl.setAttribute("id", `playlist-${nome.replaceAll(' ', '').toLowerCase()}`);

    novaPlaylistEl.innerHTML = `<img src="${img}" alt="Rap">
                                <h1>${nome}</h1>`

    novaPlaylistEl.style.backgroundColor = `${fundo}`;
    novaPlaylistEl.style.color = `${texto}`;

    listaPlaylistEl.appendChild(novaPlaylistEl);
}

playlists.forEach(addplaylist);