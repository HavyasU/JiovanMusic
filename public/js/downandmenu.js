
let isplaying = false;
let downimg = document.getElementById('down-img');
let downdetails = document.getElementById('down-details');
let downplaybtn = document.getElementById('down-play-btn');
let downprebtn = document.getElementById('down-pre-btn');
let downbackbtn = downprebtn.parentElement.previousElementSibling.firstElementChild;//backward
let downnextbtn = document.getElementById('down-next-btn');
let downbforbtn = downnextbtn.parentElement.nextElementSibling.firstElementChild;//forward
let downrange = document.getElementById('down-range');
let dsong=null;
const setdsong = (link) => {
    if(isplaying)
     dsong.pause();
    dsong = new Audio(link);
    dsong.play();
    downplaybtn.classList.remove("fa-play");
    downplaybtn.classList.add("fa-pause");
    loadrangedown();
    isplaying=true;
}

downplaybtn.parentElement.addEventListener("click",()=>{
    if(dsong!=null)
    playd();
})
const playd = () => {
    if (downplaybtn.classList.contains("fa-play")) {
        downplaybtn.classList.remove("fa-play");
        downplaybtn.classList.add("fa-pause");
        dsong.play();
        isplaying=true;
    }
    // if(playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.contains("fa-pause"))
    else {
        downplaybtn.classList.remove("fa-pause");
        downplaybtn.classList.add("fa-play");
        dsong.pause();
        isplaying=false;
    }
}
function loadrangedown() {
    setInterval(() => {
        downrange.value = dsong.currentTime;
        // cduration.innerHTML = Number.parseFloat(`${song.currentTime / 60}`).toFixed(2)
    }, 500);
    downrange.oninput = () => {
        if (song)
            dsong.pause();
        dsong.play()
        isplaying=true;
        dsong.currentTime = downrange.value;
        downplaybtn.classList.remove("fa-play");
        downplaybtn.classList.add("fa-pause")
    }
}
setInterval(() => {
    if(dsong)
    {
    if(downrange.max==Number.parseInt(dsong.currentTime+2))
    {
       downnextbtn.click();
    }
    // cduration.innerHTML = Number.parseFloat(`${song.currentTime / 60}`).toFixed(2)
    }
    
}, 500);
let playingindex;
const addtodown = (songdata,index,songarray) => {
    downimg.setAttribute("src", `${songdata.image[2].link}`);
    downdetails.firstElementChild.innerHTML = songdata.name;
    downdetails.firstElementChild.nextElementSibling.innerHTML = songdata.primaryArtists;
    setdsong(songdata.downloadUrl[1].link)
    downrange.max = songdata.duration;
    playingindex=index;
    downsongarray=songarray;
}

downnextbtn.parentElement.addEventListener("click",()=>{
    if((playingindex+1) == downsongarray.length)
    {
        playingindex=-1;
    }
    addtodown(downsongarray[playingindex+1],playingindex+1,downsongarray);
})
downprebtn.parentElement.addEventListener("click",()=>{
    if((playingindex-1) == -1)
    {
        playingindex=downsongarray.length;
    }
    addtodown(downsongarray[playingindex-1],playingindex-1,downsongarray);
})
downbackbtn.parentElement.addEventListener("click",()=>{
    dsong.currentTime-=6;
    loadrangedown();
})
downbforbtn.parentElement.addEventListener("click",()=>{
    dsong.currentTime+=3;
    loadrangedown();
})
// function popup(songdata) {
//     console.log(songdata)
//     pop.classList.toggle('active');
//     setsong(songdata.downloadUrl[1].link);
//     let playerimg = document.getElementById('player-img');
//     let playerdetails = document.getElementsByClassName('player-details')
//     playerimg.setAttribute("src", `${songdata.image[2].link}`);
//     tduration.innerHTML = Number.parseFloat(`${songdata.duration / 60}`).toFixed(2)
//     range.max = songdata.duration;
//     sname = songdata.name.split(" ");
//     playerdetails[0].firstElementChild.innerHTML = `${sname[0]} ${(sname[1] == undefined) ? " " : sname[1]}`;
//     playerdetails[0].firstElementChild.nextElementSibling.innerHTML = `${songdata.primaryArtists}`;
//     let backbtn = document.getElementsByClassName('back-btn')[0];
//     backbtn.addEventListener("click", () => {
//         pop.classList.remove('active');
//         if (song) {
//             song.pause()
//             playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("fa-pause");
//             playdiv.firstChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("fa-play");
//         }
//     })
//     playdiv.firstChild.nextElementSibling.nextElementSibling.addEventListener("click", (e) => {

//     })
// }