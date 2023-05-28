
setTimeout(() => {
    let song;
    if (song)
        stop()
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
    let pdiv = document.getElementById('p-div');
    if (downloadbtn) {
        // console.log(playbtn[0])
        downloadbtn = [...downloadbtn]
        downloadbtn.forEach((e) => {
            e.setAttribute("class", "dicon fa-solid fa-download")
            e.addEventListener("click", () => {
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

const load = (e) =>{
    // // let script = document.createElement('script');
    // // script.setAttribute('scr','js/download.js')
    // // // document.body.appendChild(script)
    // // console.log(`${e.nextElementSibling.innerHTML}`)
    // // let p = document.getElementById('d-info')
    // //     x = p.innerHTML;
    // //     console.log(x)
    // console.log(document.URL)
    // if (document.URL.includes("http://localhost:5000/download")) {
    //     // Console log specific things only in the second page
    //     console.log("This is the second page!");
    //     console.log("Additional logs for the second page.");
    //   }
    //   if (document.URL.includes("http://localhost:5000/")) {
    //     // Console log specific things only in the second page
    //     console.log("This is the first page!");
    //     console.log("Additional logs for the second page.");
    //   }

    
}
