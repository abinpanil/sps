function playVideo(imageid, iframeid) {
    
    document.getElementById(imageid).style.display = "none";
    document.getElementById(iframeid).style.display = "block";
    let id=document.getElementById(iframeid)
    id.childNodes[1].src+='?autoplay=1'
      
}
