let ssong, splayindex;
let scduration = document.getElementById('c-duration')
let stduration = document.getElementById('t-duration')

let spop = document.getElementsByClassName('popup-div')[0];
let srange = document.getElementById('range');
let splaydiv = document.getElementById('play-div');
let parentdiv = document.getElementById('s-songs')
let input = document.getElementById('s-name')
let sbtn = document.getElementById('search-btn')
let songdataarray = [];
const splay = () => {
    if (splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.contains("fa-play")) {
        splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-play");
        splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-pause");
        ssong.play();
    }

    // if(playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.contains("fa-pause"))
    else {
        splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-pause");
        splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-play");
        ssong.pause()
    }
}

function loadrange() {
    setInterval(() => {
        srange.value = ssong.currentTime;
        scduration.innerHTML = Number.parseFloat(`${song.currentTime / 60}`).toFixed(2)

    }, 500);
    srange.oninput = () => {
        if (ssong)
            ssong.pause();
        song.play()
        song.currentTime = srange.value;
        splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-play");
        splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-pause")
    }
}
const spopupfornbtn = (songdata) => {
    setsong(songdata.downloadUrl[1].link);
    let playerimg = document.getElementById('player-img');
    let playerdetails = document.getElementsByClassName('player-details')
    playerimg.setAttribute("src", `${songdata.image[2].link}`);
    stduration.innerHTML = Number.parseFloat(`${songdata.duration / 60}`).toFixed(2)
    range.max = songdata.duration;
    sname = songdata.name.split(" ");
    playerdetails[0].firstElementChild.innerHTML = `${sname[0]} ${(sname[1] == undefined) ? " " : sname[1]}`;
    playerdetails[0].firstElementChild.nextElementSibling.innerHTML = `${songdata.primaryArtists}`;
    let backbtn = document.getElementsByClassName('back-btn')[0];
    // backbtn.addEventListener("click", () => {
    //     pop.classList.remove('active');
    //     if (song) {
    //         song.pause()
    //         playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-pause");
    //         playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-play");
    //     }
    // })
    splaydiv.firstChild.nextElementSibling.nextElementSibling.addEventListener("click", (e) => {

    })
}
const ssetsong = (link) => {
    ssong = new Audio(link);
    play();
    loadrange()
}
splaydiv.firstChild.nextElementSibling.nextElementSibling.addEventListener("click", (e) => {
    play();
})
function popup(songdata) {
    spop.classList.toggle('active');
    ssetsong(songdata.downloadUrl[1].link);
    let playerimg = document.getElementById('player-img');
    let playerdetails = document.getElementsByClassName('player-details')
    playerimg.setAttribute("src", `${songdata.image[2].link}`);
    stduration.innerHTML = Number.parseFloat(`${songdata.duration / 60}`).toFixed(2)
    srange.max = songdata.duration;
    sname = songdata.name.split(" ");
    playerdetails[0].firstElementChild.innerHTML = `${sname[0]} ${(sname[1] == undefined) ? " " : sname[1]}`;
    playerdetails[0].firstElementChild.nextElementSibling.innerHTML = `${songdata.primaryArtists}`;
    let backbtn = document.getElementsByClassName('back-btn')[0];
    backbtn.addEventListener("click", () => {
        spop.classList.remove('active');
        if (ssong) {
            ssong.pause()
            splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-pause");
            splaydiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-play");
        }
    })

}

const addsearchevent = () => {
    let scards = document.getElementsByClassName('search-list');
    let acards = document.getElementsByClassName('card-album');
    scards = [...scards];
    scards.forEach((e, i) => {
        e.addEventListener("click", () => {
            addtodown(songdataarray[i], i, songdataarray);
            playindex = i;
        })
    })
    acards = [...acards]
    acards.forEach((e, i) => {
        e.addEventListener("click", async () => {
            albumpopups(e.lastElementChild.lastElementChild.innerHTML)
        })
    })
}
const createcard = ((which, tdata, index) => {
    if (which == 'songs') {
        parentdiv = document.getElementById('s-songs')
        let li = document.createElement('li');
        songdataarray.push(tdata)
        console.log(tdata)
        li.setAttribute("class", "card-song search-list");
        li.innerHTML = `
            <div class="song-s-img">
                <img src="${tdata.image[1].link}" alt="">
            </div>
            <div class="s-details s-song-details">
                <h1>${tdata.name}</h1>
                <h4>${tdata.primaryArtists}</h4>
                <p class="hidden">${tdata.downloadUrl[1].link}</p>
            </div>
        `
        parentdiv.appendChild(li)
    }
    else if (which == 'playlists' || which == 'albums') {
        parentdiv = document.getElementById('s-album')
        parentdiv.style.display = "flex";
        parentdiv.style.flexWrap = "wrap";
        parentdiv.style.flexDirection = "row";

        let e = tdata;
        if (e.songCount > 0) {
            let li = document.createElement('li');
            li.setAttribute("class", "card-album");
            li.innerHTML = `
                    <div class="album-img"> 
                        <img src="${e.image[2].link}" alt="">
                    </div>
                    <div class="a-details">
                        <h1>${e.name}</h1>
                        <h4>${e.songCount} Songs</h4>
                        <p class="hidden">${e.id}</p>
                    </div>`;
            parentdiv.appendChild(li);
            if ((index + 1) > tdata.length - 1) {
                addevent("toptrending")
            }
        }
    }
})
const fetchdata = async (which, id) => {//which refers to sog,album.playlisyt
    response = await fetch(`https://saavn.me/search/${which}?query=${id}&page=1&limit=50`)
    // response = await fetch(`https://saavn.me/search/albums?query=${id}&page=1&limit=50`)
    data = await response.json();
    results = data.data.results
    if (data) {
        await data.data.results.forEach((e, index) => {
            createcard(which, data.data.results[index], index);
        })
        addsearchevent();
    }
}
const fetchalbumdata = async (id) => {//*which refers to song,album.playlisyt
    // response = await fetch(`https://saavn.me/search/${which}?query=${id}&page=1&limit=50`)
   let response = await fetch(`https://saavn.me/search/albums?query=${id}&page=1&limit=50`)
    data = await response.json();
    let createcard = (tdata,index,data) => {
        parentdiv = document.getElementById('s-album')
        parentdiv.style.display = "flex";
        parentdiv.style.flexWrap = "wrap";
        parentdiv.style.flexDirection = "row";

        let e = tdata;
        let li = document.createElement('li');
        li.setAttribute("class", "card-album");
        li.innerHTML = `
                    <div class="album-img"> 
                        <img src="${e.image[2].link}" alt="">
                    </div>
                    <div class="a-details">
                        <h1>${e.name}</h1>
                        <h4>${e.songCount} Songs</h4>
                        <p class="hidden">${e.url}</p>
                    </div>`;
        parentdiv.appendChild(li);
        if ((index + 1) > data.length - 1) {
            addevent("albums")
        }

    }
    data.data.results.forEach((e,index) => {
        createcard(e,index,data.data.results)
    })
}

let loader = document.getElementById('loader')
if (input) {
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            parentdiv.innerHTML = ` `;
            songdataarray.length = 0;
            if (ssong)
                ssong.pause();
            id = input.value;
            document.getElementById('s-songs').innerHTML = " "
            document.getElementById('s-album').innerHTML = " "
            fetchdata('songs', id);
            fetchdata('playlists', id);
            fetchalbumdata(id);
        }
    })
}
sbtn.addEventListener("click", () => {
    parentdiv.innerHTML = ` `;
    songdataarray.length = 0;
    if (ssong)
        ssong.pause();
    id = input.value;
    document.getElementById('s-songs').innerHTML = " "
            document.getElementById('s-album').innerHTML = " "
            fetchdata('songs', id);
            fetchdata('playlists', id);
            fetchalbumdata(id);
})
let sprebn = document.getElementsByClassName('prebtn');
sprebn = [...sprebn];
let snextbtn = document.getElementsByClassName('nextbtn');
snextbtn = [...snextbtn];
const saddbtnevents = () => {
    snextbtn.forEach((e) => {
        e.addEventListener("click", () => {
            if (ssong)
                ssong.pause();
            play();
            if (splayindex == songdataarray.length - 1) {
                spopupfornbtn(songdataarray[0]);
                splayindex = 0;
            }
            else {
                spopupfornbtn(songdataarray[splayindex + 1]);
                splayindex = splayindex + 1;
                console.log(splayindex)
            }
        })
    });
    sprebn.forEach((e) => {
        e.addEventListener("click", () => {
            if (ssong)
                ssong.pause();
            play();
            if (splayindex == 0) {
                spopupfornbtn(songdataarray[songdataarray.length - 1]);
                splayindex = songdataarray.length - 1;
            }
            else {
                spopupfornbtn(songdataarray[splayindex - 1]);
                splayindex = splayindex - 1;
                console.log(splayindex)
            }
        })
    });
}
saddbtnevents();
