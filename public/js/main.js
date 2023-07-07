// setInterval(()=>{
//     let homeli = document.getElementById('home');
//     let searchli = document.getElementById('search');
//     let rateusli = document.getElementById('rateus');


//     let loc = location.href.split("/");
//     let locend = loc[loc.length-1];
//     console.log(locend +" by outer")
//     if(locend == " ")
//     {
//         homeli.style.borderLeft = "4px solid red";
//         console.log(locend+" by inner")
//     }
// },500)
// let ss  = document.createElement('link')
//     ss.setAttribute("rel","stylesheet")
//       ss.setAttribute("id","changer")


//       let p = document.createElement('p')
//       p.setAttribute("class","hidden");
//       p.setAttribute("id","dark");
//       p.innerHTML = 'true';



let modechanger = document.getElementsByClassName("mode-changer");

let sslink = document.getElementById('changer');
  modechanger = [...modechanger];
    modechanger[0].addEventListener("click",()=>{

      if( localStorage.getItem('mode') == 'dark')
      {
        localStorage.setItem('mode',"white");
        changer.href = " "
      }
      else{
           localStorage.setItem('mode',"dark");
           changer.href = "css/darkmode.css"
      }
   });
//buttons of the nav in mob view
let mobmenu = document.getElementById('mob-menu');
let list = document.getElementById('list');
let into = document.getElementById('into');
list.addEventListener("click",()=>{
  mobmenu.style.display = "flex"
})
// into.addEventListener("click",()=>{
//   mobmenu.style.display = "none"
// })

let searchbtndiv = document.getElementById('search-btn-div');

searchbtndiv.addEventListener("click",()=>{
    albumcardcontainer.style.display="flex";
    albumcardcontainer.style.flexWrap="wrap";
    document.getElementsByClassName('sortbuttons')[0].style.display="none";

  albumcardcontainer.innerHTML=""
  albumcardcontainer.innerHTML=`

<div class="search-page">
<div class="inp-container">
    <input type="text" name="s-name" id="s-name" placeholder="Enter Song Name/Link" />
    <button id="search-btn" type="button">
        <i class="fa-solid fa-magnifying-glass fa-xl" style="color: #ffffff; font-weight:1000;"></i>
    </button>
</div>
 <div class="suggest-div">
    <button class="suggest">Trending</button>
    <button class="suggest">Latest</button>
    <button class="suggest">Lofi</button>
    <button class="suggest">Remix</button>
    <button class="suggest">Kannada</button>
</div> 
<div id="s-album">

</div>
<div id="s-songs">

</div>

<div class="popup-div">
    <div class="player">
        <div class="u-btn">
            <div class="back-btn">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        </div>
        <div class="player-img">
            <div class="img-div">
                <img src="./image2.jpg" alt="image" id="player-img">
            </div>
        </div>
        <div class="player-details">
            <h1>Onde Usiranthe</h1>
            <h3>Rajesh Krishnan</h3>
            <!-- <h3>Vijay Preakash</h3> -->
        </div>
        <div class="controls">
            <div class="input-range">
                <audio src="https://aac.saavncdn.com/903/f8ef6c593dd5689cf59ff681c6cc83c6_48.mp4"
                    style="display: block;"></audio>
                <input type="range" name="" id="range" value="0">
            </div>
            <div class="duration">
                <p id="c-duration">00.00</p>
                <p id="t-duration">00.00</p>
            </div>
            <div class="player-btn" id="play-div">
                <div class="play-btn prebtn" ><i class="fa-solid fa-backward "></i></div>
                <div class="play-btn " id="play-btn"><i class="fa-solid fa-2xl fa-play"></i></div>
                <div class="play-btn nextbtn"><i class="fa-solid fa-forward"></i></div>
            </div>
        </div>
    </div>
</div>
</div>
  `
  let script =document.createElement('script')
  script.src = "js/search.js"
  document.body.appendChild(script);
})

let rateusbtndiv = document.getElementById('rate-btn-div');

rateusbtndiv.addEventListener("click",()=>{
    albumcardcontainer.style.display="flex";
    albumcardcontainer.style.flexWrap="wrap";
    document.getElementsByClassName('sortbuttons')[0].style.display="none";

  albumcardcontainer.innerHTML=""
  albumcardcontainer.innerHTML=`
  
  <link rel="stylesheet" href="css/rateus.css">
  <link rel="stylesheet" href="css/rateus-mob.css">

  <form class="container" method="post" id="container" action="/RateUs">
      <img src="image/rateimg.png" alt="">
      <h1>Rate Us!</h1>
      <h2>Your Opinion Matters to Us!</h2>
      <h4>we work hard to make the things closer for you...and we want to know your ratings for us.. </h4>
      <input type="text" id="user-name" name="name" placeholder="Enter your name" required>

      <div class="rating-stars" id="rating-stars">
          <input type="radio" name="rating" id="star5" value="5" required />
          <label for="star5">&#9733;</label>
          <input type="radio" name="rating" id="star4" value="4" required />
          <label for="star4">&#9733;</label>
          <input type="radio" name="rating" id="star3" value="3" required />
          <label for="star3">&#9733;</label>
          <input type="radio" name="rating" id="star2" value="2" required />
          <label for="star2">&#9733;</label>
          <input type="radio" name="rating" id="star1" value="1" required />
          <label for="star1">&#9733;</label>
      </div>
      <p name="totalrate" id="totalrate"> </p>

      <textarea id="review-text" placeholder="Write your review" name="userreview"></textarea>
      <div href="" id="submit-review"><button id="btn" type="">Submit</button>  </div>
  </form>
              <div class="popup" id="popup">
                  <h1 class="t-u">Thank You</h1>
                  <p>Your review was successfully submitted  
                      <div id="pop-btn">
                        <h6>Okay</h6>
                      </div>
              </div>
  `
})