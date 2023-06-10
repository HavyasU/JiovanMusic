const loadbb = async () => {
    let res = await fetch('https://jiovanmusic-production.up.railway.app/api/bb')
    let data = await res.json();
    data.songs.forEach((e) => {
        fetchdata(e)
        console.log(e)
    });
}
loadbb();


createcard = ((tdata) => {
    let parentdiv = document.getElementsByClassName('song-card-container')[0]
    let li = document.createElement('li');
    console.log(tdata)
    li.setAttribute("class","card-song");
    li.innerHTML =`
        <div class="song-s-img">
            <img src="${tdata.image[1].link}" alt="">
        </div>
        <div class="s-details">
            <h1>${tdata.name}</h1>
            <h4>${tdata.primaryArtists}</h4>
        </div>
    `
    parentdiv.appendChild(li);
    
})
const fetchdata = async (id) => {
    response = await fetch(`https://saavn.me/search/songs?query=${id}&page=1&limit=500`)

    data = await response.json();
    if(data.data.results)
    {
        // console.log(data.data.results[0])
            createcard(data.data.results[0])
    // data.data.results[0]

    // if (data.data.results)
    //     data.data.results = [...data.data.results]
    // data.data.results[0].forEach((e)=>{
    //    console.log(e)
    // })
    //    console.log(data.data.results)
    }
}
