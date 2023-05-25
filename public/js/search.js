let song;
let parentdiv = document.getElementsByClassName('card-container')
let input = document.getElementById('s-name')
let sbtn = document.getElementById('search-btn')

const createcard = ((index, tdata) => {
    if (tdata.data.results[0]) {
        sartist = tdata.data.results[index].primaryArtists.split(",")[1];
        let div = document.createElement('div');
        div.setAttribute("class", "card");
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

const fetchdata = async (id) => {

    try {
        response = await fetch(`https://saavn.me/search/songs?query=${id}&page=1&limit=500`)
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
    // unloadscipt()
    // loadscipt()
    runevent()
}
const addload = () => {
    let ldiv= document.createElement('div');
    let footer = document.getElementById('footer')
    ldiv.setAttribute("id","loader");
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.previousElementSibling);
    }
    insertAfter(ldiv,footer)
}
let loader = document.getElementById('loader')
if (input) {
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            parentdiv[0].innerHTML = " ";
            if (song)
                song.pause();
            id = input.value;
            fetchdata(id);
            console.log("yes")
        }
    })
}
if(sbtn)
{
    sbtn.addEventListener("click", (e) => {
            parentdiv[0].innerHTML = " ";
            if (song)
                song.pause();
            id = input.value;
            fetchdata(id);
            console.log("yes")
    })
}
loadscipt = () => {
    console.log("ready to load")
    let script = document.createElement("script")
    script.setAttribute("src", "js/splay.js")
    script.setAttribute("id", "playsrcipt")
    document.body.appendChild(script)
    document.body.setAttribute("onload", "checkFirstVisit()")
};
unloadscipt = () => {
    if (document.getElementById("playsrcipt")) {
        document.getElementById("playsrcipt").removeAttribute("src")
    }
};

const runevent = () => {
    setTimeout(() => {

        let volumebtn = document.getElementsByClassName('volumeicon');
        let playbtn = document.getElementsByClassName('playicon');
        let downloadbtn = document.getElementsByClassName('dicon');

        if (volumebtn) {
            volumebtn = [...volumebtn]
            volumebtn.forEach((e) => {
                e.addEventListener("click", () => {
                    console.log('click');
                    if (e.classList.contains("fa-volume-high")) {
                        e.setAttribute("class", "volumeicon fa-solid fa-volume-low")
                        song.volume = "0.5"
                    }
                    else if (e.classList.contains("fa-volume-low")) {
                        song.volume = "0.0"
                        e.setAttribute("class", "volumeicon fa-solid fa-volume-xmark")
                    }
                    else {
                        e.setAttribute("class", "volumeicon fa-solid fa-volume-high")
                        song.volume = "0.9"
                    }
                })
            })

        }
        if (playbtn) {
            console.log(playbtn[0])
            playbtn = [...playbtn]
            playbtn.forEach((e) => {
                e.addEventListener("click", () => {
                    console.log('click');
                    if (e.classList.contains("fa-play")) {
                        e.setAttribute("class", "playicon fa-solid fa-pause")
                        e.previousElementSibling.setAttribute("class", "volumeicon fa-solid fa-volume-high")
                        play(e)
                    }
                    else {
                        e.setAttribute("class", "playicon fa-solid fa-play")
                        stop(e)
                    }
                })
            })
        }
        if (downloadbtn) {
            // console.log(playbtn[0])
            downloadbtn = [...downloadbtn]
            downloadbtn.forEach((e) => {
                e.setAttribute("class", "dicon fa-solid fa-download")
                e.addEventListener("click", () => {
                    console.log('click');
                    e.setAttribute("class", "dicon fa-solid fa-download")
                        console.log('click');
                        e.setAttribute("class", "dicon fa-solid fa-download")
                        e.style.opacity = ".5";
                        localStorage.setItem('elementData',`${e.nextElementSibling.innerHTML}` );
                        location.href = "/download"
                   
                })
            })

        }



        let playing = false;
        const play = (e) => {
            if (playing == true) {
                song.pause()
                previous.setAttribute("class", "playicon fa-solid fa-play")
            }
            alink = e.parentElement.lastElementChild.innerHTML
            song = new Audio(alink)
            song.play()
            playing = true;
            previous = e;
        }
        const stop = (ele) => {
            song.pause()
            playing = false;
        }

    }, 1000);
}