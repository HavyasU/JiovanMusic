let searchalbum=async(link)=>{
    let res = await fetch(`https://saavn.me/albums?link=${link}`);
    let data = await res.json();
    albumpop.innerHTML=" "
    setalbum(data)
}