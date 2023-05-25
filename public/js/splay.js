// ****************************************************************************************** */
// NOTE  : THIS SCRIPt IS NOT INCLUDED IN THE DOCUMENT AND THIS IS IONLY FOR THE REFERENCE
// ****************************************************************************************** */

//      const startfiles = () => {
//     let playing = false;
    
//     setTimeout(() => {
//         song = new Audio("http")
//             song.play()
//             song.pause()
//         let volumebtn, playbtn, downloadbtn;

//         volumebtn = document.getElementsByClassName('volumeicon');
//         playbtn = document.getElementsByClassName('playicon');
//         downloadbtn = document.getElementsByClassName('dicon');

//         if (volumebtn) {
//             volumebtn = [...volumebtn]
//             volumebtn.forEach((e) => {
//                 e.addEventListener("click", () => {
//                     console.log('click');
//                     if (e.classList.contains("fa-volume-high")) {
//                         e.setAttribute("class", "volumeicon fa-solid fa-volume-low")
//                         song.volume = "0.5"
//                     }
//                     else if (e.classList.contains("fa-volume-low")) {
//                         song.volume = "0.0"
//                         e.setAttribute("class", "volumeicon fa-solid fa-volume-xmark")
//                     }
//                     else {
//                         e.setAttribute("class", "volumeicon fa-solid fa-volume-high")
//                         song.volume = "0.9"
//                     }
//                 })
//             })

//         }
//         if (playbtn) {
//             console.log(playbtn[0])
//             playbtn = [...playbtn]
//             playbtn.forEach((e) => {
//                 e.addEventListener("click", () => {
//                     console.log('click');
//                     if (e.classList.contains("fa-play")) {
//                         e.setAttribute("class", "playicon fa-solid fa-pause")
//                         e.previousElementSibling.setAttribute("class", "volumeicon fa-solid fa-volume-high")
//                         play(e)
//                     }
//                     else {
//                         e.setAttribute("class", "playicon fa-solid fa-play")
//                         stop(e)
//                     }

//                 })
//             })
//         }
//         if (downloadbtn) {
//             // console.log(playbtn[0])
//             downloadbtn = [...downloadbtn]
//             downloadbtn.forEach((e) => {
//                 e.setAttribute("class", "dicon fa-solid fa-download")
//                 e.addEventListener("click", () => {
//                     console.log('click');
//                     e.setAttribute("class", "dicon fa-solid fa-download")
//                     e.style.opacity = ".5";
//                     const videoHref = `${e.nextElementSibling.innerHTML}`;
//                     const a = Object.assign(document.createElement('a'), {
//                         href: "audio.MP4",
//                         style: 'display: none',
//                         download: videoHref
//                     });
//                     // <a href="audio.MP3" download="DownloadedFilenameHere.mp3">Download</a>
//                     document.body.appendChild(a);
//                     a.click();
//                     a.remove();
//                 })
//             })

//         }
//         const play = (e) => {
//             if (playing == true) {
//                 console.log("previous is there")
//                 song.pause()
//                 previous.setAttribute("class", "playicon fa-solid fa-play")
//             }
//             alink = e.parentElement.lastElementChild.innerHTML
//             song = new Audio(alink)
//             song.play()
//             playing = true;
//             previous = e;
//         }
//         const stop = (ele) => {
//             song.pause()
//             playing = false;
//         }



//         // const play = (e) => {
//         //     let playingSources = [];
//         //     url = e.parentElement.lastElementChild.innerHTML;
//         //     function playSong(url) {
//         //         var audio = new Audio(url);
//         //         audio.play();
//         //         playingSources.push(audio);
//         //     }
//         //     playSong(url)
//         // }
//         // const stop = (e) => {
//         //     function stopAllSongs() {
//         //         for (var i = 0; i < playingSources.length; i++) {
//         //             var audio = playingSources[i];
//         //             audio.pause();
//         //             audio.currentTime = 0;
//         //             audio.src = '';
//         //             audio.load();
//         //         }
//         //         playingSources = [];
//         //     }
//         //     stopAllSongs();
//         // }
//         console.log("running")
//     }, 2000);
// }

// startfiles();