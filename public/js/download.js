
window.onload = function () {
    let elementData;
    elementData = localStorage.getItem('elementData');
    let btn = document.getElementById("downloadbtn")
   
    btn.setAttribute("src",elementData)
}
