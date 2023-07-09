// let load = document.getElementsByClassName('load')[0];
// let songdataarray = [];
// const addsongevent=()=>{
//     let cards = document.getElementsByClassName('card-song');
//     cards = [...cards];
//     // console.log(cards)
//     cards.forEach((e,i)=>{
//         console.log("events")
//         e.addEventListener("click",()=>{
//             console.log("clixked")
//             addtodown(songdataarray[i]);
//         })
//     })
// }
// const loadbb = async () => {
//     let res = await fetch('http://localhost:5000/api/bb');
//     // let res = await fetch('https://jiovanmusic-production.up.railway.app/api/bb')
//     let data = await res.json();
//     await data.songs.forEach(async(e) => {
//         fetchdata(e)
//     });
//     setTimeout(()=>{
//         addsongevent()
//         load.classList.toggle('hide')
//     },1000)

// }
// loadbb();


// createcard = ((tdata,i) => {
//     let parentdiv = document.getElementsByClassName('song-card-container')[0]
//     let li = document.createElement('li');
//     songdataarray.push(tdata)
//     li.setAttribute("class","card-song");
//     li.innerHTML =`
//         <div class="song-s-img">
//             <img src="${tdata.image[1].link}" alt="">
//         </div>
//         <div class="s-details">
//             <h1>${tdata.name}</h1>
//             <h4>${tdata.primaryArtists}</h4>
//             <p class="hidden">${tdata.downloadUrl[1].link}</p>
//         </div>
//     `
//     parentdiv.appendChild(li);
// })
// const fetchdata = async (id) => {
//     response = await fetch(`https://saavn.me/search/songs?query=${id}&page=1&limit=500`)

//     data = await response.json();
//     if(data.data)
//     {
//         // console.log(data.data.results[0])
//             createcard(data.data.results[0]);
// }}
document.getElementById('albumaddbtn').classList.add('button-active')
let sortbutton = document.getElementsByClassName('s-button');
sortbutton = [...sortbutton]
sortbutton.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        sortbutton.forEach((ele)=>{
            ele.classList.remove('button-active')
        })
        e.target.classList.add('button-active')

    })
})


let sortbtnfetch = async (link) => {
    let res = await fetch(link);
    let data = await res.json();
    addsortfetchdata(data.data.results)
}
let addsortfetchdata = (data) => {

    data.forEach((e, index) => {
        if (e.songCount > 0) {
            let li = document.createElement('li');
            li.setAttribute("class", "card-album");
            li.setAttribute("onclick", "");
            li.innerHTML = `
                <div class="album-img">
                    <img src="${e.image[2].link}" alt="">
                </div>
                <div class="a-details">
                    <h1>${e.name}</h1>
                    <h4>${e.songCount} Songs</h4>
                    <p class="hidden">${e.id}</p>
                </div>`;
            albumcardcontainer.appendChild(li);
            if ((index + 1) > data.length - 1) {
                addevent("toptrending")
            }
        }
    })
}
let toptrendingaddbtn = document.getElementById('toptrendingaddbtn');
toptrendingaddbtn.addEventListener("click", () => {
    albumcardcontainer.innerHTML = " "
    sortbtnfetch('https://saavn.me/search/playlists?query=top&limit=50')
})
let viralhits = document.getElementById('viralhits');
viralhits.addEventListener("click", () => {
    albumcardcontainer.innerHTML = " "
    sortbtnfetch('https://saavn.me/search/playlists?query=viral%20hits&limit=50')
})
let popular = document.getElementById('popular');
popular.addEventListener("click", () => {
    albumcardcontainer.innerHTML = " "
    sortbtnfetch('https://saavn.me/search/playlists?query=popular%20search&limit=40')
})
let kannada = document.getElementById('kannada');
kannada.addEventListener("click", () => {
    albumcardcontainer.innerHTML = " "
    sortbtnfetch('https://saavn.me/search/playlists?query=kannada&limit=40')
     })

let hindi = document.getElementById('hindi');
hindi.addEventListener("click", () => {
         albumcardcontainer.innerHTML = " "
         sortbtnfetch('https://saavn.me/search/playlists?query=hindi&limit=50')
     })

 let malayalam = document.getElementById('malayalam');
 malayalam.addEventListener("click", () => {
         albumcardcontainer.innerHTML = " "
         sortbtnfetch('https://saavn.me/search/playlists?query=malayalam&limit=50')
     })
//      let popular = document.getElementById('popular');
// popular.addEventListener("click", () => {
//     albumcardcontainer.innerHTML = " "
//     sortbtnfetch('https://saavn.me/search/playlists?query=popular%20search&limit=40')
// })