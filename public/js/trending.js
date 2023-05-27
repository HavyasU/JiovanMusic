let data, response, res, id, index;
let loadscipt;
let input = document.getElementById('s-name')
let searched = false;
let flink = `https://saavn.me/search/songs?query=${id}&page=1&limit=2`
const fetchdata = async (id) => {
    try {
        response = await fetch(`https://saavn.me/search/songs?query=${id}&page=1&limit=2`)
    } catch (err) {
        alert("Failed to Fetch....Please try after some time")
        console.log("Failed to Fetch....Please try after some time")
    }
    data = await response.json();
    console.log(data)
    data.data.results = [...data.data.results]
    data.data.results.forEach((e, index) => {
        console.log(e)
        index = index;
        createcard(index, data);
    });
}



const createcard = ((index, tdata) => {
    let parentdiv = document.getElementsByClassName('card-container')
    parentdiv.innerHTML = " "
    if (tdata.data.results[0]) {
        sartist = tdata.data.results[index].primaryArtists.split(",")[1];
        let div = document.createElement('div');
        div.setAttribute("class", "card");
        //     div.innerHTML = `<div class="img-div">
        //     <img src="${tdata.data.results[index].image[2].link}" id="img" alt="imgage">
        // </div>
        // <div class="d-div">
        //     <div class="controls">
        //     <audio class="audio" controls src="${tdata.data.results[index].downloadUrl[2].link}"></audio>
        //     </div>
        //     <pre id="song-name">Songs  : ${tdata.data.results[index].name}</pre>
        //     <pre id="song-name">Movie  : ${tdata.data.results[index].album.name}</pre>
        //     <pre id="song-name">Artist : ${tdata.data.results[index].primaryArtists.split(",")[0]}</pre>
        //     <pre id="song-name">Artist : ${sartist ? sartist : "  -"}</pre>
        // </div>`;


        div.innerHTML = ` 
            <div class="img-div">
                <img src="${tdata.data.results[index].image[1].link}" id="img" alt="imgage">
            </div>
            <div class="controls">
                     <i class="volumeicon fa-solid fa-volume-high" ></i>
                     <i class="playicon fa-solid fa-play" ></i>
                     <i class="dicon fa-solid fa-download"></i>
                     <p style="display: none;" >${tdata.data.results[index].downloadUrl[1].link}</p>
            </div> 
            <div class="d-div">
                <pre class="song-name">Song    :  ${tdata.data.results[index].name.split(" ")[0]} ${tdata.data.results[index].name.split(" ")[1]}</pre>
                <pre class="song-name">Movie  :  ${tdata.data.results[index].album.name.split(" ")[0]} ${(tdata.data.results[index].album.name.split(" ")[1] == "undefined") ? " " : tdata.data.results[index].album.name.split(" ")[1]}</pre>
                <pre class="song-name">Singer :  ${tdata.data.results[index].primaryArtists.split(",")[0]}</pre>
                <pre class="song-name">Singer :  ${sartist ? sartist : "  -"}</pre>
            </div>`

        parentdiv[0].appendChild(div)
    }
})
// data.forEach((e)=>{
//     console.log(e)
// });
// setInterval(() => {
//     if (searched) {
//         let playbtn = document.getElementsByClassName('playbtn')
//         playbtn = [...playbtn]
//         playbtn.forEach((ele) => {
//             ele.addEventListener("click", (e) => {
//                 console.log(ele.parentNode.parentNode.previousElementSibling.firstElementChild)
//             }
//             )
//         })
//     }
//     console.log("TRY NOW")
// }, 1000);

let topsongs = async () => {
    res = await fetch('https://jiovanmusic-production.up.railway.app/api/bb');
    data = await res.json()
    toparray = data.songs

    const topfetch = async (t) => {
        try {
            response = await fetch(`https://saavn.me/search/songs?query=${t}&page=1&limit=2`)
            data = await response.json();
        } catch (err) {

            console.log("Failed to Fetch....Please try after some time")
        }
        // console.log(data)
        createcard(0, data);
    };
    toparray.forEach((e) => {
        topfetch(e)
    })
    loadscipt()
    // topfetch(toparray[1])
}
topsongs()

loadscipt = () => {
    console.log("ready to load")
    let script = document.createElement("script")
    script.setAttribute("src", "js/tplay.js")
    document.body.appendChild(script)
};
