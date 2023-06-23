let load = document.getElementsByClassName('load')[0];
let songdataarray = [];
const addsongevent=()=>{
    let cards = document.getElementsByClassName('card-song');
    cards = [...cards];
    console.log(cards)
    cards.forEach((e,i)=>{
        console.log("events")
        e.addEventListener("click",()=>{
            console.log("clixked")
            popup(songdataarray[i]);
        })
    })
}
const loadbb = async () => {
    // let res = await fetch('http://localhost:5000/api/bb');
    let res = await fetch('http://jiovanmusic-production.up.railway.app/api/bb')
    let data = await res.json();
    await data.songs.forEach(async(e) => {
        fetchdata(e)
    });
    setTimeout(()=>{
        addsongevent()
        load.classList.toggle('hide')
    },1000)
    
}
loadbb();


createcard = ((tdata,i) => {
    let parentdiv = document.getElementsByClassName('song-card-container')[0]
    let li = document.createElement('li');
    songdataarray.push(tdata)
    li.setAttribute("class","card-song");
    li.innerHTML =`
        <div class="song-s-img">
            <img src="${tdata.image[1].link}" alt="">
        </div>
        <div class="s-details">
            <h1>${tdata.name}</h1>
            <h4>${tdata.primaryArtists}</h4>
            <p class="hidden">${tdata.downloadUrl[1].link}</p>
        </div>
    `
    parentdiv.appendChild(li);
})
const fetchdata = async (id) => {
    response = await fetch(`https://saavn.me/search/songs?query=${id}&page=1&limit=500`)

    data = await response.json();
    if(data.data)
    {
        // console.log(data.data.results[0])
            createcard(data.data.results[0]);
}}
