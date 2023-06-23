let song,playindex;
let cduration = document.getElementById('c-duration')
let tduration = document.getElementById('t-duration')

let pop = document.getElementsByClassName('popup-div')[0];
let range = document.getElementById('range');
let playdiv = document.getElementById('play-div');
let parentdiv = document.getElementById('s-songs')
let input = document.getElementById('s-name')
let sbtn = document.getElementById('search-btn')
let songdataarray =[];
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
const setsong = (link) => {
    song = new Audio(link);
    play();
    loadrange()
}
playdiv.firstChild.nextElementSibling.nextElementSibling.addEventListener("click", (e) => {
    play();
})
function popup(songdata) {
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
    
}

const addsearchevent=()=>{
    let cards = document.getElementsByClassName('search-list');
    cards = [...cards];
    console.log(cards)
    cards.forEach((e,i)=>{
        e.addEventListener("click",()=>{
            popup(songdataarray[i]);
            playindex = i;
        })
    })
}
const createcard = ((tdata) => {
        let li = document.createElement('li');
        songdataarray.push(tdata)
        console.log(tdata)
        li.setAttribute("class","card-song search-list");
        li.innerHTML =`
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
    })
const fetchdata = async (id) => {
        response = await fetch(`https://saavn.me/search/songs?query=${id}&page=1&limit=15546`)
    
        data = await response.json();
        results = data.data.results
        if(data)
        {
           await  data.data.results.forEach((e,index)=>{

               createcard(data.data.results[index]);
           })
           addsearchevent();
        }
    }
let loader = document.getElementById('loader')
if (input) {
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            parentdiv.innerHTML = ` `;
            songdataarray.length=0;
            if (song)
                song.pause();
            id = input.value;
            fetchdata(id);
        }
    })
}
sbtn.addEventListener("click",()=>{
    parentdiv.innerHTML = ` `;
    songdataarray.length=0;
    if (song)
        song.pause();
    id = input.value;
    fetchdata(id);
})
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
