let albumcardcontainer = document.getElementsByClassName('album-card-container')[0];
let chartcardcontainer = document.getElementsByClassName('album-chart-container')[0];
//sripts
let cduration = document.getElementById('c-duration')
let tduration = document.getElementById('t-duration')
let playindex;
let range = document.getElementById('range');
let playdiv = document.getElementById('play-div');
let song = null;
let slink = "https://aac.saavncdn.com/903/f8ef6c593dd5689cf59ff681c6cc83c6_48.mp4"

// let backbtn = document.getElementsByClassName('back-btn')[0];
// backbtn.addEventListener("click", () => {
//     pop.classList.toggle('active');
//     if (song) {
//         song.pause()
//         playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-pause");
//         playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-play");
//     }
// })

const popupfornpbtn=(songdata)=>{
    setsong(songdata.downloadUrl[1].link);
    let playerimg = document.getElementById('player-img');
    let playerdetails = document.getElementsByClassName('player-details')
    playerimg.setAttribute("src", `${songdata.image[2].link}`);
    tduration.innerHTML = Number.parseFloat(`${songdata.duration / 60}`).toFixed(2)
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
    playdiv.firstChild.nextElementSibling.nextElementSibling.addEventListener("click", (e) => {
        
    })
}
let prebtn = document.getElementsByClassName('prebtn');
prebtn = [...prebtn];
let nextbtn = document.getElementsByClassName('nextbtn');
nextbtn = [...nextbtn];
const addbtnevents = ()=>
{   
    nextbtn.forEach((e)=>{
        e.addEventListener("click",()=>{
            if (song)
            song.pause();
            play();
            if(playindex == songdataarray.length-1)
            {
                popupfornpbtn(songdataarray[0]);
                playindex = 0;
            }
            else
            {
            popupfornpbtn(songdataarray[playindex+1]);
            playindex = playindex+1;
            console.log(playindex)
            }
    })
    });
    prebtn.forEach((e)=>{
        e.addEventListener("click",()=>{
            if (song)
            song.pause();
            play();
            if(playindex == 0)
            {
                popupfornpbtn(songdataarray[songdataarray.length-1]);
                playindex = songdataarray.length-1;
            }
            else
            {
            popupfornpbtn(songdataarray[playindex-1]);
            playindex = playindex-1;
            console.log(playindex)
            }
    })
    });
}
addbtnevents();
playdiv.firstChild.nextElementSibling.nextElementSibling.addEventListener("click", () => {
    play()
})
const setsong = (link) => {
    song = new Audio(link);
    play();
    loadrange()
}
const play = () => {
    if (playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.contains("fa-play")) {
        playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-play");
        playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-pause");
        song.play();
    }
    // if(playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.contains("fa-pause"))
    else {
        playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-pause");
        playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-play");
        song.pause()
    }
}

function loadrange() {
    setInterval(() => {
        range.value = song.currentTime;
        cduration.innerHTML = Number.parseFloat(`${song.currentTime / 60}`).toFixed(2)
    }, 500);
    range.oninput = () => {
        if (song)
            song.pause();
        song.play()
        song.currentTime = range.value;
        playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-play");
        playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-pause")
    }
}

let albumbox = document.getElementsByClassName('card-album')[0];



//homepagedata
let pop = document.getElementsByClassName('popup-div')[0];
let albumpop = document.getElementsByClassName('album-popup')[0];
let songcardcontainer = document.getElementsByClassName('song-card-container')[0];
const homepage = async () => {

    let res = await fetch('https://saavn.me/modules?language=kannada,tulu,hindi,english,tamil,telugu');
    let data = await res.json();
    // console.log(data)
    loadalbum(data.data);
    loadchart(data.data)
}

function popup(songdata) {
    console.log(songdata)
    pop.classList.toggle('active');
    setsong(songdata.downloadUrl[1].link);
    let playerimg = document.getElementById('player-img');
    let playerdetails = document.getElementsByClassName('player-details')
    playerimg.setAttribute("src", `${songdata.image[2].link}`);
    tduration.innerHTML = Number.parseFloat(`${songdata.duration / 60}`).toFixed(2)
    range.max = songdata.duration;
    sname = songdata.name.split(" ");
    playerdetails[0].firstElementChild.innerHTML = `${sname[0]} ${(sname[1] == undefined) ? " " : sname[1]}`;
    playerdetails[0].firstElementChild.nextElementSibling.innerHTML = `${songdata.primaryArtists}`;
    let backbtn = document.getElementsByClassName('back-btn')[0];
    backbtn.addEventListener("click", () => {
        pop.classList.remove('active');
        if (song) {
            song.pause()
            playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-pause");
            playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-play");
        }
    })
    playdiv.firstChild.nextElementSibling.nextElementSibling.addEventListener("click", (e) => {
        
    })
}
homepage()
function addalbum(e) {
    let li = document.createElement('li');
    li.setAttribute("class", "card-album");
    li.setAttribute("onclick", "albumpopup()");
    li.innerHTML = `
        <div class="album-img">
            <img src="${e.image[0].link}" alt="">
        </div>
        <div class="a-details">
            <h1>${e.name}</h1>
            <h4>${e.songCount} Songs</h4>
            <p class="hidden">${e.id}</p>
        </div>`;
    albumcardcontainer.appendChild(li);
}
function addplaylist(e, index, data) {
    let li = document.createElement('li');
    li.setAttribute("class", "card-album");
    li.setAttribute("onclick", "albumpopup()");
    li.innerHTML = `
        <div class="album-img">
            <img src="${e.image[0].link}" alt="">
        </div>
        <div class="a-details">
            <h1>${e.title}</h1>
            <h4>${e.songCount} Songs</h4>
            <p class="hidden">${e.id}</p>
        </div>`;
    albumcardcontainer.appendChild(li);
    if ((index + 1) > data.playlists.length - 1) {
        addevent("playlist")
    }
}
function addchart(e, index, data) {
    let li = document.createElement('li');
    li.setAttribute("class", "card-album card-chart");
    li.setAttribute("onclick", "albumpopup()");
    li.innerHTML = `
        <div class="album-img">
            <img src="${e.image[2].link}" alt="">
        </div>
        <div class="a-details">
            <h1>${e.title}</h1>
            <h4>${e.songCount} Songs</h4>
            <p class="hidden">${e.id}</p>
        </div>`;
    chartcardcontainer.appendChild(li);
    if ((index + 1) > data.charts.length - 1) {
        // console.log("data is "+ data)
        // console.log(data.charts)
        addevent("charts",data.charts);
        // console.log("clicked from passs")
    }
}
let al_bk_btn = document.getElementsByClassName('a-back-btn');
// let album = document.getElementsByClassName('album-popup');
function setalbum(pdata) {
    console.log(pdata)
    let div = document.createElement('div')
    div.innerHTML = `
        <div class="button">
            <div class="a-back-btn">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        </div>
        <div class="a-img-div">
            <div class="albm-img">
                <img src="${pdata.data.image[2].link}" alt="">
            </div>
            <div class="albm-details">
                <h1>${pdata.data.name}</h1>
                <h2>${pdata.data.songCount} Songs</h>
            </div>
        </div>
        <div class="albm-songs">
        </div>
 `
    albumpop.appendChild(div)
    al_bk_btn[0].addEventListener("click", () => {
        albumpop.classList.toggle('active');
    })
    pdata.data.songs.forEach((e, index) => {
        let albm_songs = document.getElementsByClassName('albm-songs')[0];
        let li = document.createElement('li');
        li.setAttribute("class", "album-song");
        li.innerHTML = `<div class="song-s-img">
        <img src="${e.image[2].link}" alt="">
    </div>
    <div class="s-details">
        <h1>${e.name}</h1>
        <h4>${e.primaryArtists}</h4> 
    </div>`
        albm_songs.appendChild(li);

        if ((index + 1) > pdata.data.songs.length - 1) {
            // addevent("what",data,index of items)   //contents
            addevent("songs", pdata.data.songs, index)
        }
    })
}
const albumpopup = async (id) => { };
const albumpopups = async (id) => {
    albumpop.innerHTML = " ";
    albumpop.classList.toggle('active');
    // console.log(id)

    let res = await fetch(`https://saavn.me/playlists?id=${id}`)
    // let res = await fetch(`https://saavn.me/albums?link=${link}`)
    let pdata = await res.json();
    // console.log(pdata)
    setalbum(pdata);
}
function addevent(id, songdata) {
    if (id == "playlist") {
        let cardalbum = document.getElementsByClassName('card-album');
        cardalbum = [...cardalbum];
        cardalbum.forEach((e, index) => {
            e.addEventListener("click", () => {
                albumpopups(e.lastElementChild.lastElementChild.innerHTML)
            })
        })
    }
    if (id == "songs") {
        let albumsong = document.getElementsByClassName('album-song');
        albumsong = [...albumsong];
        albumsong.forEach((e, index) => {
            e.addEventListener("click", (ele) => {
                popup(songdata[index]);
            })
        })
    }
    if (id == "charts") {
        
        // console.log("hello")
        let albumsong = document.getElementsByClassName('card-chart');
        albumsong = [...albumsong];
        albumsong.forEach((e, index) => {
            // console.log("clicked")
            e.addEventListener("click", (ele) => {
                    albumpopups(e.lastElementChild.lastElementChild.innerHTML)
            })
        })
    }
}
const loadalbum = (data) => {
    
    let dataarray;
    dataarray = data;
    data.playlists.forEach((e, index) => {
        if (e.songCount > 0)
            addplaylist(e, index, data)
    })
    // if (data)
    // data.albums.forEach((e, index) => {
    //         console.log(e)
    //         if (e.songCount > 0)
    //             addalbum(e)
    //     })
}
const loadchart = (data) => {
let dataarray;
    dataarray = data.charts;
    // console.log(dataarray)
    dataarray.forEach((e,index)=>{
        addchart(e, index, data)
    })
}

//*/******* */

albmsongcontainer = document.getElementsByClassName('albm-songs')[0];